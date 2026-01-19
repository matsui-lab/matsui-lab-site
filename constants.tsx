

import React from 'react';
import { Member, Publication, NewsItem, ResearchDomain, SectionId, LabContent, Language, ServerSpec, HPCClusterSpec, DeviceSpec, Theme } from './types';
import { Dna, BrainCircuit, Activity, Network, Binary, Smartphone, Database, Code, Monitor, Glasses, Hand, Camera } from 'lucide-react';

/* --- THEMES --- */

export const DEFAULT_DARK_THEME: Theme = {
  name: 'Scientific Dark',
  colors: {
    primary: '#004C3F',
    primaryDark: '#00332a',
    accent: '#10B981',
    tech: '#06B6D4',
    dark: '#020617',
    surface: '#0F172A',
    text: '#f8fafc',
    textMuted: '#94a3b8',
    border: '#1e293b' // slate-800
  }
};

export const DEFAULT_LIGHT_THEME: Theme = {
  name: 'Scientific Light',
  colors: {
    primary: '#004C3F',      // Keep brand color
    primaryDark: '#00332a',
    accent: '#059669',       // Darker emerald for light bg
    tech: '#0891B2',         // Darker cyan
    dark: '#F8FAFC',         // slate-50
    surface: '#FFFFFF',      // white
    text: '#0F172A',         // slate-900
    textMuted: '#64748B',    // slate-500
    border: '#cbd5e1'        // slate-300
  }
};

/* --- SHARED DATA (Images, IDs, Publications) --- */

export const PUBLICATIONS: Publication[] = [
  // 2025
  {
    id: '2025-1',
    year: 2025,
    title: 'Integrative Network Analysis Reveals Novel Moderators of Aβ–Tau Interaction in Alzheimer\'s Disease',
    authors: 'Akihiro Kitani, Yusuke Matsui',
    journal: 'Alzheimer's Research & Therapy',
    citation: '17(1): 70',
    tag: 'Journal'
  },
  {
    id: '2025-2',
    year: 2025,
    title: 'GlycanGT: A Foundation Model for Glycan Graphs with Pretrained Representation and Generative Learning',
    authors: 'Akihiro Kitani, Bingyuan Zhang, Koichi Himori, Yusuke Matsui',
    journal: 'bioRxiv',
    citation: '10.64898/2025.12.14.694171',
    tag: 'Preprint'
  },
  {
    id: '2025-3',
    year: 2025,
    title: 'GlycoTraitR: an R package for characterizing structural heterogeneity in N-linked glycoproteomics data',
    authors: 'Bingyuan Zhang, Koichi Himori, Yusuke Matsui',
    journal: 'bioRxiv',
    citation: '10.64898/2025.12.16.694754',
    tag: 'Preprint'
  },
  // 2024
  {
    id: '2024-1',
    year: 2024,
    title: 'Predicting Alzheimer\'s Cognitive Resilience Score: A Comparative Study of Machine Learning Models Using RNA-seq Data',
    authors: 'Akihiro Kitani, Yusuke Matsui',
    journal: 'Preprint / In Press',
    tag: 'Preprint'
  },
  {
    id: '2024-2',
    year: 2024,
    title: 'HuTAge: A Comprehensive Human Tissue- and Cell-specific Ageing Signature Atlas',
    authors: 'Koichi Himori, Bingyuan Zhang, Kazuki Hatta, Yusuke Matsui',
    journal: 'Preprint / In Press',
    tag: 'Preprint'
  },
  {
    id: '2024-3',
    year: 2024,
    title: 'Toward a Systems Glycogenomics Approach to Understanding Diseases',
    authors: 'Yusuke Matsui',
    journal: 'Glycoforum',
    citation: '27(4): A12',
    tag: 'Journal'
  },
  {
    id: '2024-4',
    year: 2024,
    title: 'A Computational Approach to Interpreting the Embedding Space of Dimension Reduction',
    authors: 'Bingyuan Zhang, Kohei Uno, Hayata Kodama, Koichi Himori, Yusuke Matsui',
    journal: 'Preprint / In Press',
    tag: 'Preprint'
  },
  {
    id: '2024-5',
    year: 2024,
    title: 'Evaluating Desk-Assisted Standing Techniques for Simulated Pregnant Conditions',
    authors: 'Kohei Uno, Kako Tsukioka, Hibiki Sakata, Tomoe Inoue-Hirakawa, Yusuke Matsui',
    journal: 'Healthcare',
    citation: '12(9): 931',
    tag: 'Journal'
  },
  {
    id: '2024-6',
    year: 2024,
    title: 'Systematic Identification of Exercise-Induced Anti-Aging Processes Involving Intron Retention',
    authors: 'Hayata Kodama, Hirotaka Ijima, Yusuke Matsui',
    journal: 'Preprint / In Press',
    tag: 'Preprint'
  },
  {
    id: '2024-7',
    year: 2024,
    title: 'BRAFV600E Promotes Anchorage-Independent Growth but Inhibits Anchorage-Dependent Growth in hTERT/Cdk4-Immortalized Normal Human Bronchial Epithelial Cells',
    authors: 'Nao Muraki, Nozomi Kawabe, Ayano Ohashi, Kanna Umeda, Masahito Katsuda, Aya Tomatsu, Mikina Yoshida, Kazuki Komeda, John D. Minna, Ichidai Tanaka, Masahiro Morise, Miyoko Matsushima, Yusuke Matsui, Tsutomu Kawabe, Mitsuo Sato',
    journal: 'Experimental Cell Research',
    citation: 'Pages: 114057',
    tag: 'Journal'
  },
  // 2023
  {
    id: '2023-1',
    year: 2023,
    title: 'Single-Cell Glycogenomics Deciphers Links Between Altered Transcriptional Regulation and Aberrant Glycosylation in Alzheimer’s Disease',
    authors: 'Yusuke Matsui, Akira Togayachi, Kazuma Sakamoto, Kiyohiko Angata, Kenji Kadomatsu, Shoko Nishihara',
    journal: 'Preprint / In Press',
    tag: 'Preprint'
  },
  {
    id: '2023-2',
    year: 2023,
    title: 'Network-Based Systematic Dissection of Exercise-Induced Inhibition of Myosteatosis in Older Individuals',
    authors: 'Hirotaka Iijima, Fabrisia Ambrosio, Yusuke Matsui',
    journal: 'The Journal of Physiology',
    tag: 'Journal'
  },
  {
    id: '2023-3',
    year: 2023,
    title: 'Unbiased Estimation of the Population-Level Motor Module',
    authors: 'Yusuke Matsui, Kohei Uno, Ippei Nojima',
    journal: 'Preprint / In Press',
    tag: 'Preprint'
  },
  {
    id: '2023-4',
    year: 2023,
    title: 'Pgc-1α Is an Exercise-Responsive Regulator of Myosteatosis in Older Individuals',
    authors: 'Hirotaka Iijima, Fabrisia Ambrosio, Yusuke Matsui',
    journal: 'Preprint / In Press',
    tag: 'Preprint'
  },
  {
    id: '2023-5',
    year: 2023,
    title: 'Network-Based Cytokine Inference Implicates Oncostatin M as a Driver for Inflammation Phenotype of Knee Osteoarthritis',
    authors: 'Hirotaka Iijima, Fan Zhang, Fabrisia Ambrosio, Yusuke Matsui',
    journal: 'Preprint / In Press',
    tag: 'Preprint'
  },
  {
    id: '2023-6',
    year: 2023,
    title: 'Types of Anomalies in Two-Dimensional Video-Based Gait Analysis in Uncontrolled Environments',
    authors: 'Yuki Sugiyama, Kohei Uno, Yusuke Matsui',
    journal: 'PLOS Computational Biology',
    citation: '19(1): e1009989',
    tag: 'Journal'
  },
  // 2022
  {
    id: '2022-1',
    year: 2022,
    title: 'Utilization and Challenges of Data Science and AI in Physical Therapy Education',
    authors: 'Yusuke Matsui',
    journal: 'Rigaku Ryoho (Physical Therapy)',
    citation: '39(4): 336–342',
    tag: 'Journal'
  },
  {
    id: '2022-2',
    year: 2022,
    title: 'Meta-Analysis Integrated with Multi-Omics Data Analysis to Elucidate Pathogenic Mechanisms of Age-Related Knee Osteoarthritis in Mice',
    authors: 'Hirotaka Iijima, Gabrielle Gilmer, Kai Wang, Sruthi Sivakumar, Christopher Evans, Yusuke Matsui, Fabrisia Ambrosio',
    journal: 'The Journals of Gerontology: Series A',
    citation: '77(7): 1321–1334',
    tag: 'Journal'
  },
  // 2021
  {
    id: '2021-1',
    year: 2021,
    title: 'Pan-Cancer Methylome Analysis for Cancer Diagnosis and Classification of Cancer Cell of Origin',
    authors: 'Dai Shimizu, Kenzui Taniue, Koshi Mimori',
    journal: 'Cancer Gene Therapy',
    citation: '29(5): 428–436',
    tag: 'Journal'
  },
  {
    id: '2021-2',
    year: 2021,
    title: 'Increased BUB1B/BUBR1 Expression Contributes to Aberrant DNA Repair Activity Leading to Resistance to DNA-Damaging Agents',
    authors: 'Kazumasa Komura, Teruo Inamoto, Haruhito Azuma',
    journal: 'Oncogene',
    citation: '40(43): 6210–6222',
    tag: 'Journal'
  },
  {
    id: '2021-3',
    year: 2021,
    title: 'RoDiCE: Robust Differential Protein Co-expression Analysis for Cancer Complexome',
    authors: 'Yusuke Matsui, Yuichi Abe, Kohei Uno, Satoru Miyano',
    journal: 'Bioinformatics',
    tag: 'Journal'
  },
  {
    id: '2021-4',
    year: 2021,
    title: 'Pre-Stimulus Alpha Oscillation and Post-Stimulus Cortical Activity Differ in Localization Between Consciously Perceived and Missed Near-Threshold Somatosensory Stimuli',
    authors: 'Jun-Ichi Uemura, Aiko Hoshino, Go Igarashi, Yusuke Matsui, Minoru Hoshiyama',
    journal: 'European Journal of Neuroscience',
    citation: '54(4): 5518–5530',
    tag: 'Journal'
  },
  // 2020
  {
    id: '2020-1',
    year: 2020,
    title: 'An In Vitro Coculture System of Human PBMCs with Hepatocellular Carcinoma Cells for Predicting Drug-Induced Liver Injury',
    authors: 'Shingo Oda, Yuka Uchida, Michael D. Aleo, Petra H. Koza-Taylor, Yusuke Matsui, Masanori Hizue, Lisa D. Marroquin, Jessica Whritenour, Eri Uchida, Tsuyoshi Yokoi',
    journal: 'Archives of Toxicology',
    tag: 'Journal'
  },
  {
    id: '2020-2',
    year: 2020,
    title: 'EXOSC9 Depletion Attenuates P-Body Formation, Stress Resistance, and Tumorigenicity of Cancer Cells',
    authors: 'Seiko Yoshino, Yusuke Matsui, Teppei Shimamura, et al.',
    journal: 'Scientific Reports',
    citation: '10(1): 9275',
    tag: 'Journal'
  },
  {
    id: '2020-3',
    year: 2020,
    title: 'Coordinated Demethylation of H3K9 and H3K27 Is Required for Rapid Inflammatory Responses of Endothelial Cells',
    authors: 'Yoshiki Higashijima, Yusuke Matsui, Teppei Shimamura, et al.',
    journal: 'The EMBO Journal',
    citation: '39(7): e103949',
    tag: 'Journal'
  },
  // 2019
  {
    id: '2019-1',
    year: 2019,
    title: 'Pathogenic Epigenetic Consequences of Genetic Alterations in IDH-Wild-Type Diffuse Astrocytic Gliomas',
    authors: 'Fumiharu Ohka, Keiko Shinjo, Shoichi Deguchi, Yusuke Matsui, et al.',
    journal: 'Cancer Research',
    citation: '79(19): 4814–4827',
    tag: 'Journal'
  },
  {
    id: '2019-2',
    year: 2019,
    title: 'A Network of Networks Approach for Modeling Interconnected Brain Tissue-Specific Networks',
    authors: 'Kawakubo H, Matsui Y, Kushima I, Ozaki N, Shimamura T',
    journal: 'Bioinformatics',
    citation: '35(17): 3092–3101',
    tag: 'Journal'
  },
  {
    id: '2019-3',
    year: 2019,
    title: 'Tumor Subclonal Progression Model for Cancer Hallmark Acquisition',
    authors: 'Y. Matsui, S. Miyano, T. Shimamura',
    journal: 'Lecture Notes in Bioinformatics',
    citation: 'Pages: 115–123',
    tag: 'Journal'
  },
  {
    id: '2019-4',
    year: 2019,
    title: 'GIMLET: Identifying Biological Modulators in Context-Specific Gene Regulation Using Local Energy Statistics',
    authors: 'T. Shimamura, Y. Matsui, S. Miyano',
    journal: 'Lecture Notes in Bioinformatics',
    citation: 'Pages: 124–137',
    tag: 'Journal'
  },
  // 2018
  {
    id: '2018-1',
    year: 2018,
    title: 'A Temporal Shift of the Evolutionary Principle Shaping Intratumor Heterogeneity in Colorectal Cancer',
    authors: 'Tomoko Saito, Atsushi Niida, Yusuke Matsui, et al.',
    journal: 'Nature Communications',
    citation: '9(1): 2884',
    tag: 'Journal'
  },
  {
    id: '2018-2',
    year: 2018,
    title: 'ER Stress Signaling Promotes the Survival of Cancer “Persister Cells” Tolerant to EGFR-TKI',
    authors: 'Hideki Terai, Shunsuke Kitajima, Yusuke Matsui, Teppei Shimamura, et al.',
    journal: 'Cancer Research',
    citation: '78(4): 1044–1057',
    tag: 'Journal'
  },
  {
    id: '2018-3',
    year: 2018,
    title: 'Identification of Cardiomyocyte-Fated Progenitors from Human-Induced Pluripotent Stem Cells Marked with CD82',
    authors: 'Masafumi Takeda, Yasuharu Kanki, Yusuke Matsui, Teppei Shimamura, et al.',
    journal: 'Cell Reports',
    citation: '22(2): 546–556',
    tag: 'Journal'
  },
  // 2017
  {
    id: '2017-1',
    year: 2017,
    title: 'phyC: Clustering Cancer Evolutionary Trees',
    authors: 'Yusuke Matsui, Atsushi Niida, Ryutaro Uchi, Koshi Mimori, Satoru Miyano, Teppei Shimamura',
    journal: 'PLOS Computational Biology',
    citation: '13(5): e1005509',
    tag: 'Journal'
  },
  // 2016
  {
    id: '2016-1',
    year: 2016,
    title: '(DM)-M-3: Detection of Differential Distributions of Methylation Levels',
    authors: 'Yusuke Matsui, Masahiro Mizuta, Satoshi Ito, Satoru Miyano, Teppei Shimamura',
    journal: 'Bioinformatics',
    citation: '32(15): 2248–2255',
    tag: 'Journal'
  },
  {
    id: '2016-2',
    year: 2016,
    title: 'NECAB3 Promotes Activation of Hypoxia-Inducible Factor-1 and Enhances Tumorigenicity of Cancer Cells',
    authors: 'Hiroki J. Nakaoka, Toshiro Hara, Seiko Yoshino, Akane Kanamori, Yusuke Matsui, Teppei Shimamura, et al.',
    journal: 'Scientific Reports',
    citation: '6: 22784',
    tag: 'Journal'
  },
  // 2015
  {
    id: '2015-1',
    year: 2015,
    title: 'Classification of Customers in a Group-Buying Coupon Site and Analysis of Purchasing Tendencies by Group',
    authors: 'Chito Igarashi, Yusuke Matsui, Hiroyuki Minami, Masahiro Mizuta',
    journal: 'Journal of the Japan Society of Computational Statistics',
    citation: '28(2): 139–146',
    tag: 'Journal'
  },
  {
    id: '2015-2',
    year: 2015,
    title: 'Proposal of Moving Function k-Means Method and Its Application',
    authors: 'Yusuke Matsui, Yuriko Komiya, Hiroyuki Minami, Masahiro Mizuta',
    journal: 'Theory and Applications of Data Analysis',
    citation: '4(1): 43–55',
    tag: 'Journal'
  },
  // 2014
  {
    id: '2014-1',
    year: 2014,
    title: 'A Method for Detecting Abnormal Regions in Multi-Dimensional Functional Data and Its Application to Sensing Data',
    authors: 'Yusuke Matsui, Yuriko Komiya, Hiroyuki Minami, Masahiro Mizuta',
    journal: 'Journal of the Japan Society of Computational Statistics',
    citation: '27(2): 65–77',
    tag: 'Journal'
  },
  {
    id: '2014-2',
    year: 2014,
    title: 'Symbolic Cluster Analysis for Distribution-Valued Dissimilarity',
    authors: 'Matsui Y, Minami H, Mizuta M',
    journal: 'Communications for Statistical Applications and Methods',
    citation: '21(3): 225–234',
    tag: 'Journal'
  },
  {
    id: '2014-3',
    year: 2014,
    title: 'SDA for Mixed-Type Data and Its Application to Analysis of Environmental Radio Activity Level Data',
    authors: 'Matsui Y, Mizuta M',
    journal: 'COMPSTAT2014',
    citation: 'Pages: 673–680',
    tag: 'Journal'
  },
  {
    id: '2014-4',
    year: 2014,
    title: 'Comparison of Two Distribution-Valued Dissimilarities and Its Application for Symbolic Clustering',
    authors: 'Yusuke Matsui, Yuriko Komiya, Hiroyuki Minami, Masahiro Mizuta',
    journal: 'Studies in Classification, Data Analysis, and Knowledge Organization',
    citation: '46: 37–46',
    tag: 'Journal'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    date: '2025-04-01',
    title: 'New academic year started. Welcomed new Master students to the lab.',
    category: 'Event'
  },
  {
    id: 'n2',
    date: '2025-03-15',
    title: 'Research on digital biomarkers accepted for presentation at global conference.',
    category: 'Publication'
  },
  {
    id: 'n3',
    date: '2024-12-01',
    title: 'Looking for Ph.D. students and Postdocs for the new academic year.',
    category: 'Other'
  }
];

export const getIcon = (name: string) => {
  switch (name) {
    case 'Dna': return <Dna className="w-8 h-8" />;
    case 'BrainCircuit': return <BrainCircuit className="w-8 h-8" />;
    case 'Activity': return <Activity className="w-8 h-8" />;
    case 'Network': return <Network className="w-8 h-8" />;
    case 'Binary': return <Binary className="w-8 h-8" />;
    case 'Smartphone': return <Smartphone className="w-8 h-8" />;
    case 'Database': return <Database className="w-8 h-8" />;
    case 'Code': return <Code className="w-8 h-8" />;
    case 'Monitor': return <Monitor className="w-8 h-8" />;
    case 'Glasses': return <Glasses className="w-8 h-8" />;
    case 'Hand': return <Hand className="w-8 h-8" />;
    case 'Camera': return <Camera className="w-8 h-8" />;
    default: return <Activity className="w-8 h-8" />;
  }
};

export const MEMBERS: Member[] = [
  // STAFF
  {
    id: 'matsui',
    name: 'Yusuke Matsui',
    role: 'Principal Investigator / Associate Professor',
    image: '/matsui-lab-site/images/members/yusuke-matsui.jpg',
    description: 'Ph.D. (Information Science). Specializes in Multi-omics, Network Medicine, and Digital Health.',
    links: {
      website: 'https://yusuke-matsui.github.io/',
      github: 'https://github.com/yusuke-matsui'
    }
  },
  {
    id: 'uno',
    name: 'Kohei Uno',
    role: 'Assistant Professor',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800', // Tech/Bio
    description: 'Specializes in Biomechanics and Motion Analysis.'
  },
  {
    id: 'zhang',
    name: 'Bingyuan Zhang',
    role: 'Assistant Professor',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800', // Code/Data
    description: 'Specializes in Computational Biology and Algorithm Development.'
  },
  {
    id: 'himori',
    name: 'Koichi Himori',
    role: 'Researcher',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800', // Tech
    description: 'Focuses on Aging and Omics Data Analysis.'
  },
  {
    id: 'okabe',
    name: 'Masaaki Okabe',
    role: 'Researcher (JSPS Post-Doc)',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800', // Lab/Science
    description: 'Expert in JSPS Research Fellowship projects.'
  },
  {
    id: 'hatta',
    name: 'Kazuki Hatta',
    role: 'Server Engineer',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800', // Server/Data
    description: 'Manages HPC and Computing Infrastructure.'
  },
  {
    id: 'yamauchi',
    name: 'Yui Yamauchi',
    role: 'Secretary',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800', // Office/Abstract
    description: 'Lab administration and support.'
  },
  // STUDENTS
  {
    id: 'kitani',
    name: 'Akihiro Kitani',
    role: 'Ph.D. Student (D3)',
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800', // Neural/Abstract
    description: 'Researching Alzheimer\'s Disease and Network Medicine.'
  },
  {
    id: 'nakano',
    name: 'Akiha Nakano',
    role: 'Master Student (M2)',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800', // Omics
    description: 'Researching Omics Analysis.'
  },
  {
    id: 'yanase',
    name: 'Ryota Yanase',
    role: 'Master Student (M2)',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=800', // Digital Health
    description: 'Researching Digital Health.'
  },
  {
    id: 'suhara',
    name: 'Go Suhara',
    role: 'Master Student (M2)',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', // Analytics
    description: 'Researching Motion Analysis.'
  },
  {
    id: 'wakuda',
    name: 'Nanako Wakuda',
    role: 'Master Student (M1)',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800', // DNA
    description: 'Researching Health Informatics.'
  },
  {
    id: 'furuta',
    name: 'Takeru Furuta',
    role: 'Master Student (M1)',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800', // Code
    description: 'Researching Bioinformatics.'
  },
  {
    id: 'ota',
    name: 'Kosuke Ota',
    role: 'Master Student (M1)',
    image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=800', // Code
    description: 'Researching Data Science.'
  },
  {
    id: 'mizuta',
    name: 'Ryosuke Mizuta',
    role: 'Master Student (M1)',
    image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=800', // Science
    description: 'Researching Integrated Health Sciences.'
  }
];

export const LOCATIONS = [
  {
    name: "Nagoya University Daiko Campus",
    address: "1-1-20 Daiko-Minami, Higashi-ku, Nagoya",
    detail: "South Building 2F, Rm 233 (Digital Health & Health Sciences)",
  },
  {
    name: "Nagoya University Higashiyama Campus",
    address: "Furo-cho, Chikusa-ku, Nagoya",
    detail: "EI Building 8F, Rm 825 (Computational Biology & iGCORE)",
  }
];

/* --- COMPUTING RESOURCES DATA --- */

export const IGCORE_SPECS: HPCClusterSpec = {
  name: "iGCORE-HPC",
  description: "High-Performance Computing Environment for Omics & Big Data",
  stats: [
    { label: "Total Cores", value: "2,000+" },
    { label: "Total RAM", value: "20 TB+" },
    { label: "Storage", value: "4 PB" },
  ],
  nodes: [
    { type: "Fat Memory Nodes", count: 4, specs: "128 Cores, 3.0TB RAM" },
    { type: "Standard Nodes (Linux)", count: 17, specs: "32-64 Cores, 192-512GB RAM" },
    { type: "Standard Nodes (Windows)", count: 2, specs: "32 Cores, 512GB RAM" },
    { type: "GPU Nodes", count: 2, specs: "L40 (48GB) x3, 768GB RAM" },
    { type: "Database Nodes", count: 2, specs: "32 Cores, 512GB RAM" },
    { type: "File Server Nodes", count: 6, specs: "Total 4PB+ Storage" },
  ]
};

export const DAIKO_SERVERS: ServerSpec[] = [
  {
    id: "unikigpu",
    name: "UNIKIGPU",
    ip: ".119",
    os: "Ubuntu 22.04.5 LTS",
    location: "South Bldg 233",
    role: "GPU Workstation",
    specs: {
      cpu: "Intel Xeon Silver 4316 (40 vCPU) @ 2.30GHz",
      memory: "125 GB",
      gpu: "NVIDIA RTX A6000 (48GB)",
      storage: "900 GB NVMe"
    }
  },
  {
    id: "bmhi01",
    name: "BMHI01",
    ip: ".107",
    os: "Ubuntu 22.04.4 LTS",
    location: "Server Room (Console 10)",
    role: "Posit Workbench Server",
    specs: {
      cpu: "AMD EPYC 7413 (96 vCPU) @ 2.65GHz",
      memory: "1.5 TB",
      storage: "109 TB HDD + 900 GB NVMe"
    }
  },
  {
    id: "bmhi02",
    name: "BMHI02",
    ip: ".110",
    os: "Ubuntu 22.04.2 LTS",
    location: "Server Room (Console 12)",
    role: "High-Memory Analysis Node",
    specs: {
      cpu: "AMD EPYC 7543 (128 vCPU) @ 2.80GHz",
      memory: "2.0 TB",
      storage: "109 TB HDD + 900 GB NVMe"
    }
  },
  {
    id: "bmhi-a",
    name: "BMHI-A",
    ip: ".112",
    os: "Ubuntu 22.04.2 LTS",
    location: "Server Room (Console 11)",
    role: "Standard Analysis Node",
    specs: {
      cpu: "Intel Xeon W-2295 (36 vCPU) @ 3.00GHz",
      memory: "503 GB",
      storage: "32.8 TB Total (3.6T + 14.6T + 14.6T)"
    }
  },
  {
    id: "bmhi-b",
    name: "BMHI-B",
    ip: "-",
    os: "Ubuntu 22.04.5 LTS",
    location: "South Bldg 233",
    role: "Analysis Node",
    specs: {
      cpu: "N/A",
      memory: "N/A",
      storage: "N/A"
    }
  }
];


/* --- LOCALIZED CONTENT DICTIONARY --- */

export const contentEN: LabContent = {
  labName: "Matsui Laboratory",
  labSubtitle: "Biomedical & Health Informatics",
  affiliation: "Nagoya Univ. Graduate School of Medicine / Institute for Glyco-core Research (iGCORE)",
  hero: {
    titlePrefix: "Computational",
    titleOmics: " Health",
    titleTwin: " Sciences",
    subtitle: "We are pioneering Data-Driven Health Science by fusing Computational Biology with Digital Health technologies. From molecular networks to whole-body sensing.",
    ctaResearch: "Explore Research",
    ctaJoin: "Join the Lab",
    keywords: [
      { label: 'Computational Biology', val: 'Omics' },
      { label: 'Digital Health', val: 'Sensing' },
      { label: 'AI & Machine Learning', val: 'Models' },
      { label: 'Data Integration', val: 'Systems' },
    ]
  },
  mission: {
    label: "Our Mission",
    title: "Deciphering Life through",
    highlight: "Multi-Layered Data",
    description: "The human body is a complex system where molecular dynamics (Micro) and physical behaviors (Macro) interact. We use AI to integrate these layers, creating a precision 'Digital Twin' for healthcare.",
    bioCard: {
      title: "Computational Biology",
      desc: "Unraveling disease mechanisms via large-scale omics analysis (Genomics, Proteomics, Glycomics)."
    },
    healthCard: {
      title: "Digital Health Science",
      desc: "Quantifying physical function via sensing technology (3D vision, wearables, EEG/EMG) for digital twins."
    }
  },
  research: {
    title: "Research Projects",
    subtitle: "Select a domain to view data streams.",
    domains: [
      {
        id: 'comp-bio',
        title: 'Computational Biology',
        description: 'We elucidate complex biological phenomena—from cancer and dementia to aging muscles—using large-scale omics analysis and network theory.',
        projects: [
          {
            id: 'cb-1',
            title: "Deep Learning Integration for Alzheimer’s Disease",
            subtitle: "Exploring Molecular Targets via Deep Learning",
            description: "While Aβ-Tau interaction is critical in AD progression, its regulators remain unclear. Using 'BIONIC', a deep learning-based network integration method, we integrated ROSMAP proteome and PPI data.",
            image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
            tags: ["Alzheimer's", "Deep Learning", "Network Medicine"]
          },
          {
            id: 'cb-2',
            title: "Exercise-Induced Anti-Aging Mechanisms",
            subtitle: "Mechanisms of Anti-Aging via Exercise",
            description: "Aging muscles exhibit increased splicing abnormalities (Intron Retention; IR). Analyzing skeletal muscle transcriptomes, we found that exercise reduces IR and induces the recovery of mitochondrial function genes.",
            image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
            tags: ["Aging", "Splicing", "Exercise"]
          },
          {
            id: 'cb-3',
            title: "Network Medicine for Aging Muscle",
            subtitle: "Network Mechanisms Suppressing Fat Accumulation",
            description: "We compared gene networks across physical activity conditions using mouse skeletal muscle data. We identified PGC-1α as a core factor in the fat differentiation suppression network.",
            image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
            tags: ["Network Analysis", "Metabolism"]
          },
          {
            id: 'cb-4',
            title: "Cytokine Drivers in Osteoarthritis",
            subtitle: "Analysis of Inflammatory Drivers in OA",
            description: "We discovered that Oncostatin M (OSM), a member of the IL6 family, is a major factor driving the progression of age-related Osteoarthritis (OA). We suggested candidates for drug repositioning.",
            image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800",
            tags: ["Osteoarthritis", "Drug Repositioning"]
          },
          {
            id: 'cb-5',
            title: "Human Tissue-Ageing Atlas – HuTAge",
            subtitle: "Construction of the Aging Atlas 'HuTAge'",
            description: "By integrating GTEx and Tabula Sapiens data, we covered human tissue- and cell-specific age-dependent gene expression. Published as an R Shiny app.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            tags: ["Database", "Web Tool", "Aging"]
          },
          {
            id: 'cb-6',
            title: "PhyC: Clustering Cancer Evolutionary Trees",
            subtitle: "Cancer Evolutionary Tree Clustering Algorithm",
            description: "We developed a clustering method based on tree topology and edge lengths. This allowed us to identify subclonal evolutionary patterns in renal cell carcinoma and lung cancer.",
            image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800",
            tags: ["Algorithm", "Cancer Evolution"]
          },
          {
            id: 'cb-7',
            title: "Robust Co-Expression Analysis by Copula",
            subtitle: "Protein Co-Expression Algorithm 'RoDiCE'",
            description: "By testing co-expression variations using Copula theory, we achieved noise-robust differential co-expression analysis in cancer proteomics.",
            image: "https://images.unsplash.com/photo-1509266272358-7701da638078?auto=format&fit=crop&q=80&w=800",
            tags: ["Algorithm", "Proteomics", "Statistics"]
          },
          {
            id: 'cb-8',
            title: "Explainable AI for Omics Embedding",
            subtitle: "Interpretation of Non-Linear Dimensionality Reduction",
            description: "We proposed a framework to map the structure of t-SNE/UMAP embedding spaces to biological functions. Verified explainable AI visualization using GTEx data.",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
            tags: ["XAI", "Visualization"]
          },
          {
            id: 'cb-9',
            title: "D3M: Distributional Differential Methylation",
            subtitle: "Methylation Variation Detection Algorithm",
            description: "We detect multimodality using distributional difference tests based on Wasserstein distance. Identified novel epigenetic changes in Glioma analysis.",
            image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800",
            tags: ["Epigenetics", "Algorithm"]
          },
          {
            id: 'cb-10',
            title: "Maternal cfRNA Biomarkers",
            subtitle: "Late-Onset Preeclampsia Biomarkers",
            description: "Using cfRNA-seq, we demonstrated high diagnostic accuracy (AUC > 0.9) for late-onset PE. Extracted HLA-G, IL17RB, and KLRC4 as major signatures.",
            image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800",
            tags: ["Biomarker", "cfRNA", "Obstetrics"]
          },
          {
            id: 'cb-11',
            title: "Sleep & Resilience in AD",
            subtitle: "Molecular Mechanisms of Sleep and Resilience",
            description: "Integrated sleep intervention mouse data with human AD brain analysis. Identified TAMM41, KALRN, and SREK1 as resilience-related genes.",
            image: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?auto=format&fit=crop&q=80&w=800",
            tags: ["Sleep", "Alzheimer's"]
          },
          {
            id: 'cb-12',
            title: "Personalized Proteogenomics in AD",
            subtitle: "Peptide Marker Discovery Considering Genetics",
            description: "Identified variant peptides using proteogenomic analysis reflecting individual genomic information. We identified 19 novel AD-related peptides.",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
            tags: ["Proteogenomics", "Personalized Medicine"]
          },
          {
            id: 'cb-13',
            title: "Supervised Pseudotime Modeling",
            subtitle: "Disease Progression Modeling via Pseudotime",
            description: "Developed a model using AD severity as a supervisory signal. Extracted FAAH and GPX1 as candidates for early biomarkers.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            tags: ["Machine Learning", "Trajectory Analysis"]
          },
          {
            id: 'cb-14',
            title: "Microbiome–Host Interaction Modeling",
            subtitle: "Modeling Gut Microbiota-Host Transcription",
            description: "Estimated transcription factor regulatory networks driven by gut bacteria. Identified prognostic transcriptional pathways mediated by ARNT and FLI1.",
            image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
            tags: ["Microbiome", "Network"]
          },
          {
            id: 'cb-15',
            title: "Pan-Cancer Enzyme Network Analysis",
            subtitle: "Pan-Cancer Analysis of PTM Enzymes",
            description: "Integrated expression abnormalities across 32 tumor types with CRISPR screening. Identified ALG14, CDC7, PLK4, and TTK as major enzymatic targets.",
            image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800",
            tags: ["Cancer", "Enzymes"]
          }
        ]
      },
      {
        id: 'digital-health',
        title: 'Digital Health Science',
        description: 'We analyze sensor data from 3D depth cameras, motion capture, EEG, and EMG to quantify physical functions and create digital twins.',
        projects: [
          {
            id: 'dh-1',
            title: "Large-Scale 2D Video Gait Analysis",
            subtitle: "Scalable 2D Video Gait Analysis",
            description: "We established a workflow for anomaly correction and quality control in real-world data using skeletal estimation via OpenPose.",
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800",
            tags: ["Computer Vision", "Gait Analysis"]
          },
          {
            id: 'dh-2',
            title: "3D Depth Camera Balance Analysis",
            subtitle: "Balance Evaluation via 3D Depth Camera",
            description: "Comparing with the Functional Balance Scale, we quantified trunk sway using sparse logistic regression. This allows for non-invasive detection of subtle balance changes.",
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
            tags: ["Sensing", "Rehabilitation"]
          },
          {
            id: 'dh-3',
            title: "Pregnancy Motion Simulation",
            subtitle: "Sit-to-Stand Motion Analysis in Pregnancy",
            description: "Using simulated pregnancy jacket experiments, EMG, and center-of-gravity analysis, we quantified lumbar load specific to pregnancy.",
            image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=800",
            tags: ["Biomechanics", "Women's Health"]
          },
          {
            id: 'dh-4',
            title: "Box and Block Test Motion Analysis",
            subtitle: "3D Motion Analysis for Upper Limb Rehab",
            description: "Combined finger joint motion decomposition using MediaPipe with PCA. Achieved quantitative motor evaluation independent of subjective assessment.",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
            tags: ["Rehabilitation", "Motion Capture"]
          },
          {
            id: 'dh-5',
            title: "Cortico-Muscular Coupling",
            subtitle: "Cortico-Muscular Control under Rhythmic Auditory Stimulation",
            description: "Simultaneous EEG+EMG measurement revealed that Rhythmic Auditory Stimulation (RAS) alters cortico-muscular coupling during gait.",
            image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
            tags: ["EEG", "EMG", "Neuroscience"]
          },
          {
            id: 'dh-6',
            title: "Group-Level Motor Module Analysis",
            subtitle: "Motor Module Estimation Method",
            description: "Developed a new algorithm based on functional data analysis, improving noise robustness and estimation accuracy. Created a standardized analysis method.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            tags: ["Algorithm", "Statistics"]
          },
          {
            id: 'dh-7',
            title: "Dynamic EMG Module Modeling",
            subtitle: "Dynamic Motor Module Analysis",
            description: "Extracted inter-muscle networks for each gait phase using PCA and wavelet analysis. Clarified the dynamics of gait control.",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800",
            tags: ["Signal Processing", "Biomechanics"]
          },
          {
            id: 'dh-8',
            title: "Web-Based EMG Analysis Tool",
            subtitle: "Gait EMG Analysis Web Tool",
            description: "Developed a web app that automates preprocessing, muscle synergy, and coherence analysis. Built an analysis platform usable in both research and clinical settings.",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
            tags: ["Software Dev", "Web App"]
          }
        ]
      }
    ]
  },
  computing: {
    title: "Computing Infrastructure",
    subtitle: "High-Performance Environments for Omics & Digital Health",
    igcoreTitle: "iGCORE HPC Environment",
    daikoTitle: "Daiko Campus Computing Resources",
    deviceTitle: "Digital Health Sensing Infrastructure"
  },
  devices: {
    list: [
      {
        id: "mocap",
        name: "Optical Motion Capture",
        productName: "Professional Motion Capture System",
        location: "South Bldg 1F Training Room",
        description: "High-precision 3D motion analysis system (OptiTrack).",
        notes: ["Requires specialized marker bundle"]
      },
      {
        id: "kinect",
        name: "Azure Kinect",
        productName: "Azure Kinect DK",
        location: "South Bldg 1F Training Room",
        description: "Depth camera and microphone array for AI vision and speech models. We own 2 units.",
        link: "https://azure.microsoft.com/en-us/products/kinect-dk",
        notes: ["Production ended", "Requires GPU for body tracking"]
      },
      {
        id: "biosignal",
        name: "Biosignal Plux",
        productName: "biosignal plux",
        location: "South Bldg 2F Rm 233",
        description: "Wireless biosignal acquisition hub. We possess both standard and Hybrid-8 hubs with a comprehensive suite of sensors for physiological monitoring.",
        link: "https://www.creact.co.jp/measure/bio/biosignalsplux/",
        sensors: ["EMG (Muscle)", "ECG (Heart)", "EEG (Brain)", "fNIRS (Brain O2)", "SpO2", "EGG (Gastric)", "EOG (Eye)", "BVP Ear", "RIP (Respiration)", "Force", "Temperature", "EDA (Skin)", "Lux", "Accelerometer"]
      },
      {
        id: "arglasses",
        name: "AR Glasses",
        productName: "XREAL Air2 & Air2 Pro",
        location: "South Bldg 2F Rm 233",
        description: "Augmented Reality glasses for immersive visual experiments and mobile display.",
        link: "https://jp.shop.xreal.com/collections/ar-glassess",
        notes: ["Can connect wirelessly via Beam", "Prescription lens inserts available"]
      },
      {
        id: "gloves",
        name: "Smart Gloves",
        productName: "Rokoko Smartgloves",
        location: "South Bldg 2F Rm 233",
        description: "Finger tracking solution for precise hand motion capture.",
        link: "https://www.rokoko.com/ja/products/smartgloves",
        notes: ["Size M"]
      }
    ]
  },
  dataScience: {
    title: "Data Science Environment",
    subtitle: "Integrated Analytics Platform: Develop, Scale, Share",
    description: "We utilize Posit (formerly RStudio) commercial products to standardize our data analysis workflow, ensuring reproducibility and scalability.",
    workbench: {
      title: "Posit Workbench",
      desc: "The premier development environment for R and Python data science.",
      features: ["Multi-Session RStudio Pro", "VS Code & Jupyter Support", "Centralized High-Power Compute", "Collaborative Project Sharing"]
    },
    pipelines: {
      title: "Scalable Omics Pipelines",
      desc: "Distributed computing using OpenPBS & Nextflow, leveraging nf-core standards.",
      features: ["OpenPBS Job Scheduling", "Nextflow Distributed Execution", "nf-core Standard Pipelines", "Containerized Analysis (Singularity)"]
    },
    connect: {
      title: "Posit Connect",
      desc: "The publishing platform for all your data products.",
      features: ["Deploy Shiny, Streamlit & Dash Apps", "Automated RMarkdown/Quarto Reports", "API Hosting (Plumber/FastAPI)", "Scheduled Execution & Emailing"]
    }
  },
  publications: {
    title: "Achievements"
  },
  members: {
    title: "Team Members",
    subtitle: "Experts in dry-lab analysis and wet-lab experiments.",
    list: MEMBERS
  },
  footer: {
    rights: "Matsui Laboratory. Data-Driven Knowledge Generation.",
    system: "System: Online"
  },
  contact: {
    title: "Join the Future of Health Science",
    subtitle: "We are actively recruiting Ph.D. students and Postdocs."
  },
  locations: LOCATIONS,
  nav: [
    { id: SectionId.HOME, label: 'Home' },
    { id: SectionId.RESEARCH, label: 'Research' },
    { id: SectionId.COMPUTING, label: 'Computing' },
    { id: SectionId.MEMBERS, label: 'Members' },
    { id: SectionId.PUBLICATIONS, label: 'Publications' },
    { id: SectionId.NEWS, label: 'News' },
    { id: SectionId.CONTACT, label: 'Contact' },
  ]
};

export const contentJP: LabContent = {
  labName: "松井研究室",
  labSubtitle: "Biomedical & Health Informatics",
  affiliation: "名古屋大学大学院 医学系研究科 / 糖鎖生命コア研究所 (iGCORE)",
  hero: {
    titlePrefix: "計算",
    titleOmics: "健康",
    titleTwin: "科学",
    subtitle: "名古屋大学 医学系研究科 iGCOREにて、マルチオミクス、バイオインフォマティクス、AI・機械学習を駆使した計算健康科学により、分子から身体までをつなぐ「データ駆動型ヘルスサイエンス」を開拓しています。",
    ctaResearch: "研究内容を見る",
    ctaJoin: "研究室に参加する",
    keywords: [
      { label: 'Computational Biology', val: 'Omics' },
      { label: 'Digital Health', val: 'Sensing' },
      { label: 'AI & Machine Learning', val: 'Models' },
      { label: 'Data Integration', val: 'Systems' },
    ]
  },
  mission: {
    label: "Our Mission",
    title: "多層データで",
    highlight: "生命を解読する",
    description: "人体は、分子のダイナミクス(Micro)と身体行動(Macro)が相互作用する複雑系です。私たちはAIを用いてこれらの階層を統合し、ヘルスケアのための精密な「デジタルツイン」を構築します。",
    bioCard: {
      title: "計算生物学 (Bioinformatics)",
      desc: "大規模オミクス解析（ゲノム・プロテオーム・糖鎖）により、疾患メカニズムを解明します。"
    },
    healthCard: {
      title: "デジタル健康学 (Digital Health)",
      desc: "センシング技術（3Dカメラ・ウェアラブル・脳波/筋電）で身体機能を定量化し、デジタルツインを実現します。"
    }
  },
  research: {
    title: "Research Projects",
    subtitle: "ドメインを選択してデータストリームを表示",
    domains: [
      {
        id: 'comp-bio',
        title: '計算生物学 (Computational Biology)',
        description: '大規模オミクス解析やネットワーク理論を駆使し、がん・認知症・加齢筋などの複雑な生命現象をシステム的に解明します。近年は、新たなオミクスであるグライコミクス（糖鎖解析）にも積極的に取り組んでいます。',
        projects: [
          {
            id: 'cb-1',
            title: "Deep Learning Integration for Alzheimer’s Disease",
            subtitle: "深層学習によるアルツハイマー病の分子標的探索",
            description: "Aβ-タウ相互作用がAD進行に関わるが、その制御因子は未解明。深層学習ベースのネットワーク統合手法「BIONIC」を用い、ROSMAP由来のプロテオーム＋PPIデータを統合解析しました。",
            image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
            tags: ["Alzheimer's", "Deep Learning", "Network Medicine"]
          },
          {
            id: 'cb-2',
            title: "Exercise-Induced Anti-Aging Mechanisms",
            subtitle: "運動によるアンチエイジングメカニズム",
            description: "加齢筋ではスプライシング異常（イントロン保持; IR）が増加します。骨格筋のトランスクリプトーム解析から、運動がIRを減少させ、ミトコンドリア機能遺伝子群の回復を誘導することを発見しました。",
            image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
            tags: ["Aging", "Splicing", "Exercise"]
          },
          {
            id: 'cb-3',
            title: "Network Medicine for Aging Muscle",
            subtitle: "加齢筋の脂肪蓄積を抑えるネットワーク機構",
            description: "マウス骨格筋データで身体活動条件間の遺伝子ネットワークを比較し、PGC-1αが脂肪分化抑制ネットワークの中核因子として機能していることを特定しました。",
            image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
            tags: ["Network Analysis", "Metabolism"]
          },
          {
            id: 'cb-4',
            title: "Cytokine Drivers in Osteoarthritis",
            subtitle: "膝関節炎（OA）の炎症ドライバー解析",
            description: "IL6ファミリーに属するOncostatin M（OSM）が加齢性OAを進行させる主要因子であることを発見し、炎症主導型OAへの薬剤リポジショニング候補を提示しました。",
            image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800",
            tags: ["Osteoarthritis", "Drug Repositioning"]
          },
          {
            id: 'cb-5',
            title: "Human Tissue-Ageing Atlas – HuTAge",
            subtitle: "加齢アトラス「HuTAge」の構築",
            description: "GTExとTabula Sapiensデータを統合し、ヒト組織・細胞特異的な加齢依存性遺伝子発現を網羅。R Shinyアプリとして公開し、加齢研究の共通基盤を提供しました。",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            tags: ["Database", "Web Tool", "Aging"]
          },
          {
            id: 'cb-6',
            title: "PhyC: Clustering Cancer Evolutionary Trees",
            subtitle: "がん進化系統樹クラスタリングアルゴリズム「phyC」",
            description: "系統樹のトポロジーとエッジ長に基づくクラスタリング手法を開発。腎細胞がん・肺がんで、サブクローン進化パターンを同定しました。",
            image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800",
            tags: ["Algorithm", "Cancer Evolution"]
          },
          {
            id: 'cb-7',
            title: "Robust Co-Expression Analysis by Copula",
            subtitle: "タンパク質共発現解析アルゴリズム「RoDiCE」",
            description: "共発現変動をコピュラ理論で検定し、がんプロテオミクスにおいてノイズに強い差分共発現解析を実現しました。",
            image: "https://images.unsplash.com/photo-1509266272358-7701da638078?auto=format&fit=crop&q=80&w=800",
            tags: ["Algorithm", "Proteomics", "Statistics"]
          },
          {
            id: 'cb-8',
            title: "Explainable AI for Omics Embedding",
            subtitle: "非線形次元削減結果の解釈手法",
            description: "t-SNE/UMAP埋め込み空間の構造を生物学的機能と対応づけるフレームワークを提案。GTExやC. elegans胚発生データで可視化・説明可能AIを実証しました。",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
            tags: ["XAI", "Visualization"]
          },
          {
            id: 'cb-9',
            title: "D3M: Distributional Differential Methylation",
            subtitle: "メチル化変動検出アルゴリズム「D3M」",
            description: "ワッサースタイン距離を用いた分布差検定で多峰性を検出。Glioma解析で新規エピジェネティック変化を同定しました。",
            image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800",
            tags: ["Epigenetics", "Algorithm"]
          },
          {
            id: 'cb-10',
            title: "Maternal cfRNA Biomarkers",
            subtitle: "後期子癇前症バイオマーカー研究",
            description: "cfRNA-seqを用い、遅発性PEの診断精度をAUC 0.9超で実証。HLA-G, IL17RB, KLRC4を主要シグネチャーとして抽出しました。",
            image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800",
            tags: ["Biomarker", "cfRNA", "Obstetrics"]
          },
          {
            id: 'cb-11',
            title: "Sleep & Resilience in AD",
            subtitle: "アルツハイマー病における睡眠とレジリエンスの分子機構",
            description: "睡眠介入マウスデータとADヒト脳解析を統合。TAMM41, KALRN, SREK1をレジリエンス関連遺伝子として同定しました。",
            image: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?auto=format&fit=crop&q=80&w=800",
            tags: ["Sleep", "Alzheimer's"]
          },
          {
            id: 'cb-12',
            title: "Personalized Proteogenomics in AD",
            subtitle: "遺伝的背景を考慮したペプチドマーカー探索",
            description: "個人ゲノム情報を反映したプロテオゲノム解析で変異ペプチドを特定。新規AD関連ペプチドを19個同定しました。",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
            tags: ["Proteogenomics", "Personalized Medicine"]
          },
          {
            id: 'cb-13',
            title: "Supervised Pseudotime Modeling",
            subtitle: "教師付き擬似時間推定による病態進行モデル",
            description: "AD重症度を教師信号としたモデルを開発。FAAH・GPX1を早期バイオマーカー候補として抽出しました。",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            tags: ["Machine Learning", "Trajectory Analysis"]
          },
          {
            id: 'cb-14',
            title: "Microbiome–Host Interaction Modeling",
            subtitle: "腸内細菌−宿主転写制御相互作用のモデル化",
            description: "腸内細菌による転写因子制御ネットワークを推定。ARNTとFLI1を介した予後関連転写経路を同定しました。",
            image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
            tags: ["Microbiome", "Network"]
          },
          {
            id: 'cb-15',
            title: "Pan-Cancer Enzyme Network Analysis",
            subtitle: "翻訳後修飾酵素のPan-Cancer解析",
            description: "32腫瘍の発現異常とCRISPRスクリーニングを統合。ALG14, CDC7, PLK4, TTKを主要酵素標的として同定しました。",
            image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800",
            tags: ["Cancer", "Enzymes"]
          }
        ]
      },
      {
        id: 'digital-health',
        title: 'デジタル健康学 (Digital Health Science)',
        description: '3D深度カメラ・モーションキャプチャ・脳波・筋電図などのセンサーデータを解析し、身体機能の数値化とデジタルツイン化を目指します。臨床現場や生活空間での「身体の見える化」を通じて、リハビリ・健康支援・DX基盤構築に貢献します。',
        projects: [
          {
            id: 'dh-1',
            title: "Large-Scale 2D Video Gait Analysis",
            subtitle: "大規模2Dビデオ歩行解析",
            description: "OpenPoseによる骨格推定を用い、実環境データでの異常補正・品質管理ワークフローを確立。未制御環境下でも高精度な歩行解析を実現しました。",
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800",
            tags: ["Computer Vision", "Gait Analysis"]
          },
          {
            id: 'dh-2',
            title: "3D Depth Camera Balance Analysis",
            subtitle: "三次元深度カメラによるバランス評価",
            description: "Functional Balance Scaleと比較し、体幹動揺をスパースロジスティック回帰で定量化。微細なバランス変化を非侵襲で検出可能です。",
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
            tags: ["Sensing", "Rehabilitation"]
          },
          {
            id: 'dh-3',
            title: "Pregnancy Motion Simulation",
            subtitle: "妊婦の立ち上がり動作解析",
            description: "模擬ジャケット実験とEMG・重心解析により、妊娠期特有の腰部負荷を定量化。リハビリ・生活指導支援への応用を目指します。",
            image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=800",
            tags: ["Biomechanics", "Women's Health"]
          },
          {
            id: 'dh-4',
            title: "Box and Block Test Motion Analysis",
            subtitle: "上肢リハビリ動作の3D動作解析",
            description: "MediaPipeによる手指関節の動作分解とPCA解析を組み合わせ、主観に依らない定量的な運動評価を実現しました。",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
            tags: ["Rehabilitation", "Motion Capture"]
          },
          {
            id: 'dh-5',
            title: "Cortico-Muscular Coupling",
            subtitle: "リズム聴覚刺激下の歩行における皮質-筋制御解析",
            description: "脳波＋筋電図同時計測により、リズム聴覚刺激(RAS)が歩行中の皮質-筋結合を変化させることを明らかにしました。",
            image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
            tags: ["EEG", "EMG", "Neuroscience"]
          },
          {
            id: 'dh-6',
            title: "Group-Level Motor Module Analysis",
            subtitle: "運動モジュール推定手法の開発",
            description: "関数データ解析に基づく新アルゴリズムを開発し、ノイズ耐性と推定精度を向上。解析手法の標準化を行いました。",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            tags: ["Algorithm", "Statistics"]
          },
          {
            id: 'dh-7',
            title: "Dynamic EMG Module Modeling",
            subtitle: "動的運動モジュール解析",
            description: "PCAとウェーブレット解析を用いて、歩行位相ごとの筋間ネットワークを抽出。歩行制御のダイナミクスを解明しました。",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800",
            tags: ["Signal Processing", "Biomechanics"]
          },
          {
            id: 'dh-8',
            title: "Web-Based EMG Analysis Tool",
            subtitle: "歩行筋電図解析Webツール",
            description: "前処理、筋シナジー、コヒーレンス解析を自動化するWebアプリを開発。研究・臨床双方で利用可能な解析基盤を構築しました。",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
            tags: ["Software Dev", "Web App"]
          }
        ]
      }
    ]
  },
  computing: {
    title: "Computing Infrastructure",
    subtitle: "オミクス解析とデジタルヘルスのための高性能計算環境",
    igcoreTitle: "iGCORE HPC Environment",
    daikoTitle: "大幸キャンパス 計算機リソース",
    deviceTitle: "デジタルヘルス 計測インフラ"
  },
  devices: {
    list: [
      {
        id: "mocap",
        name: "Optical Motion Capture",
        productName: "Professional Motion Capture System",
        location: "South Bldg 1F Training Room",
        description: "高精度3D動作解析システム（OptiTrack）。",
        notes: ["要マーカーセット"]
      },
      {
        id: "kinect",
        name: "Azure Kinect",
        productName: "Azure Kinect DK",
        location: "South Bldg 1F Training Room",
        description: "AIビジョンおよび音声モデル用の深度カメラとマイクアレイ。2台所有。",
        link: "https://azure.microsoft.com/en-us/products/kinect-dk",
        notes: ["生産終了品", "骨格追跡にはGPUが必要"]
      },
      {
        id: "biosignal",
        name: "Biosignal Plux",
        productName: "biosignal plux",
        location: "South Bldg 2F Rm 233",
        description: "ワイヤレス生体信号収集ハブ。StandardとHybrid-8ハブ、および生理学的モニタリング用の包括的なセンサーセットを所有しています。",
        link: "https://www.creact.co.jp/measure/bio/biosignalsplux/",
        sensors: ["EMG (Muscle)", "ECG (Heart)", "EEG (Brain)", "fNIRS (Brain O2)", "SpO2", "EGG (Gastric)", "EOG (Eye)", "BVP Ear", "RIP (Respiration)", "Force", "Temperature", "EDA (Skin)", "Lux", "Accelerometer"]
      },
      {
        id: "arglasses",
        name: "AR Glasses",
        productName: "XREAL Air2 & Air2 Pro",
        location: "South Bldg 2F Rm 233",
        description: "没入型視覚実験およびモバイルディスプレイ用のARグラス。",
        link: "https://jp.shop.xreal.com/collections/ar-glassess",
        notes: ["Beam経由でワイヤレス接続可能", "視力矯正レンズあり"]
      },
      {
        id: "gloves",
        name: "Smart Gloves",
        productName: "Rokoko Smartgloves",
        location: "South Bldg 2F Rm 233",
        description: "精密な手指モーションキャプチャのためのフィンガートラッキングソリューション。",
        link: "https://www.rokoko.com/ja/products/smartgloves",
        notes: ["サイズ M"]
      }
    ]
  },
  dataScience: {
    title: "Data Science Environment",
    subtitle: "統合解析プラットフォーム",
    description: "Posit (旧RStudio) 商用製品群を活用し、データ解析ワークフローを標準化。再現性と拡張性を担保します。",
    workbench: {
      title: "Posit Workbench",
      desc: "R/Pythonデータサイエンスのための最高峰の開発環境。",
      features: ["Multi-Session RStudio Pro", "VS Code & Jupyter Support", "Centralized High-Power Compute", "Collaborative Project Sharing"]
    },
    pipelines: {
      title: "Scalable Omics Pipelines",
      desc: "OpenPBSとNextflowによる分散コンピューティング。",
      features: ["OpenPBS Job Scheduling", "Nextflow Distributed Execution", "nf-core Standard Pipelines", "Containerized Analysis (Singularity)"]
    },
    connect: {
      title: "Posit Connect",
      desc: "データプロダクトの公開・共有プラットフォーム。",
      features: ["Deploy Shiny, Streamlit & Dash Apps", "Automated RMarkdown/Quarto Reports", "API Hosting (Plumber/FastAPI)", "Scheduled Execution & Emailing"]
    }
  },
  publications: {
    title: "Achievements"
  },
  members: {
    title: "Team Members",
    subtitle: "ドライ解析とウェット実験の専門家チーム。",
    list: MEMBERS
  },
  footer: {
    rights: "Matsui Laboratory. Data-Driven Knowledge Generation.",
    system: "System: Online"
  },
  contact: {
    title: "Join the Future of Health Science",
    subtitle: "博士課程学生・ポスドクを積極的に募集しています。"
  },
  locations: LOCATIONS,
  nav: [
    { id: SectionId.HOME, label: 'ホーム' },
    { id: SectionId.RESEARCH, label: '研究内容' },
    { id: SectionId.COMPUTING, label: '設備・環境' },
    { id: SectionId.MEMBERS, label: 'メンバー' },
    { id: SectionId.PUBLICATIONS, label: '業績' },
    { id: SectionId.NEWS, label: 'ニュース' },
    { id: SectionId.CONTACT, label: '連絡先' },
  ]
};

export const CONTENT = {
  en: contentEN,
  jp: contentJP
};
