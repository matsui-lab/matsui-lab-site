
import { GoogleGenAI, Type } from "@google/genai";
import { CONTENT, PUBLICATIONS } from "../constants";
import { Language, Theme } from "../types";

let ai: GoogleGenAI | null = null;

const getAIClient = () => {
  if (!ai) {
    if (process.env.API_KEY) {
      ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    } else {
      console.warn("Gemini API Key is missing. Chat features will not work.");
    }
  }
  return ai;
};

export const chatWithLabAssistant = async (userMessage: string, lang: Language = 'en'): Promise<string> => {
  const client = getAIClient();
  if (!client) {
    return lang === 'jp' 
      ? "申し訳ありませんが、AI接続（API Key）が現在利用できません。"
      : "I'm sorry, my connection to the AI brain (API Key) is currently unavailable.";
  }

  const data = CONTENT[lang];

  // Flatten research projects for context
  const researchContext = data.research.domains.map(domain => {
    return `
      Domain: ${domain.title}
      Description: ${domain.description}
      Projects:
      ${domain.projects.map(p => `- ${p.title} (${p.subtitle}): ${p.description} [Tags: ${p.tags?.join(', ')}]`).join('\n')}
    `;
  }).join('\n\n');

  // Flatten Device Info
  const deviceContext = data.devices.list.map(d => 
    `- ${d.name} (${d.location}): ${d.description}. Notes: ${d.notes?.join(', ')}. Sensors: ${d.sensors?.join(', ')}`
  ).join('\n');

  // Construct context
  const context = `
    You are the AI Assistant for the ${data.labName} at Nagoya University.
    Your goal is to answer visitor questions about the lab's research, members, locations, and equipment politely and professionally.
    
    Current User Language: ${lang === 'jp' ? 'Japanese' : 'English'}
    IMPORTANT: You must reply in ${lang === 'jp' ? 'Japanese' : 'English'}.
    
    Here is the Lab's Data:
    
    Locations:
    ${data.locations.map(l => `- ${l.name}: ${l.address} (${l.detail})`).join('\n')}

    Computing & Sensing Equipment:
    HPC: ${data.computing.igcoreTitle} (Fat Nodes, GPU Nodes, 2000+ Cores)
    Daiko Devices (Digital Health):
    ${deviceContext}

    Detailed Research Projects:
    ${researchContext}
    
    Key Vision:
    ${data.hero.subtitle}
    
    Selected Publications:
    ${PUBLICATIONS.map(p => `- ${p.title} (${p.year}) in ${p.journal}`).join('\n')}
    
    Members:
    ${data.members.list.map(m => `- ${m.name} (${m.role}): ${m.description}`).join('\n')}
    
    Rules:
    - Keep answers concise (under 100 words if possible).
    - Be welcoming and academic.
    - If asked about joining, mention we welcome students and researchers (Wet & Dry backgrounds).
    - If you don't know the answer based on the provided data, say ${lang === 'jp' ? '"その情報は持ち合わせておりませんので、直接ラボにお問い合わせください。"' : '"I don\'t have that specific information, please contact the lab directly."'}
  `;

  try {
    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userMessage,
      config: {
        systemInstruction: context,
      },
    });

    return response.text || (lang === 'jp' ? "申し訳ありません、応答を生成できませんでした。" : "I apologize, I couldn't generate a response.");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return lang === 'jp' 
      ? "エラーが発生しました。後でもう一度お試しください。"
      : "I encountered an error while processing your request. Please try again later.";
  }
};

export const generateThemeFromMood = async (mood: string): Promise<Theme | null> => {
  const client = getAIClient();
  if (!client) return null;

  try {
    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Generate a web color theme based on the mood: "${mood}". 
      Return a JSON object. Ensure high contrast and accessibility. 
      If the mood is dark, provide dark background colors. If light, provide light backgrounds.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING, description: "A creative name for this theme" },
            colors: {
              type: Type.OBJECT,
              properties: {
                primary: { type: Type.STRING, description: "Main brand color (Hex)" },
                primaryDark: { type: Type.STRING, description: "Darker shade of primary (Hex)" },
                accent: { type: Type.STRING, description: "Highlight color for biology/energy (Hex)" },
                tech: { type: Type.STRING, description: "Secondary accent for technology/digital (Hex)" },
                dark: { type: Type.STRING, description: "Main page background color (Hex)" },
                surface: { type: Type.STRING, description: "Card/Panel background color (Hex)" },
                text: { type: Type.STRING, description: "Main text color (Hex)" },
                textMuted: { type: Type.STRING, description: "Secondary/description text color (Hex)" }
              },
              required: ["primary", "primaryDark", "accent", "tech", "dark", "surface", "text", "textMuted"]
            }
          },
          required: ["name", "colors"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as Theme;
    }
    return null;
  } catch (error) {
    console.error("Error generating theme:", error);
    return null;
  }
};
