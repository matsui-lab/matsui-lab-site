

import React, { useEffect, useState, useMemo, useRef } from 'react';
import Navbar from './components/Navbar';
import GeminiAssistant from './components/GeminiAssistant';
import { CONTENT, PUBLICATIONS, IGCORE_SPECS, DAIKO_SERVERS, DEFAULT_DARK_THEME, DEFAULT_LIGHT_THEME } from './constants';
import { SectionId, Language, Theme, ServerSpec, ThemeMode } from './types';
import { generateThemeFromMood } from './services/geminiService';
import { ArrowRight, Mail, MapPin, ExternalLink, Calendar, ChevronRight, Layers, Database, Cpu, Dna, Laptop, Smartphone, BookOpen, FileText, Monitor, Activity, Network, HeartPulse, ScanLine, Wand2, RefreshCw, X, Server, Terminal, HardDrive, Share2, Code2, Globe, Workflow, Glasses, Hand, Camera, Sparkles, Loader2, ImagePlus } from 'lucide-react';

/**
 * ScrollReveal Component
 * Triggers animation when children enter viewport
 */
interface ScrollRevealProps {
  children?: React.ReactNode;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className} transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {children}
    </div>
  );
};

/**
 * ElegantBackground Component
 * Renders sophisticated, conceptual animations for different sections.
 */
const ElegantBackground = ({ type }: { type: 'molecules' | 'circuit' | 'streams' | 'timeline' | 'network' | 'matrix' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: any[] = [];
    
    // Get theme colors
    const style = getComputedStyle(document.documentElement);
    const accent = style.getPropertyValue('--color-accent').trim() || '#10B981';
    const tech = style.getPropertyValue('--color-tech').trim() || '#06B6D4';
    // Use text color for network nodes in light mode
    const textColor = style.getPropertyValue('--color-text').trim() || '#f8fafc';
    
    const init = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      particles = [];

      // Initialize based on type
      if (type === 'molecules') {
        // Research: Floating Hexagons (Chemical/Bio structures)
        for (let i = 0; i < 20; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 20 + 10,
            angle: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.2 + 0.1,
            rotation: (Math.random() - 0.5) * 0.01
          });
        }
      } else if (type === 'circuit') {
        // Computing: Grid nodes
        const gap = 50;
        for (let x = 0; x < canvas.width; x += gap) {
          for (let y = 0; y < canvas.height; y += gap) {
            if (Math.random() > 0.8) {
              particles.push({
                x, y,
                active: false,
                timer: Math.random() * 100
              });
            }
          }
        }
      } else if (type === 'streams') {
         // Data Science: Flowing curves
         for (let i = 0; i < 5; i++) {
            particles.push({
               y: (canvas.height / 5) * i + 50,
               offset: Math.random() * 100,
               speed: Math.random() * 0.5 + 0.2,
               color: i % 2 === 0 ? accent : tech
            });
         }
      } else if (type === 'timeline') {
         // Publications: Rising particles
         for (let i=0; i<30; i++) {
            particles.push({
               x: Math.random() * canvas.width,
               y: Math.random() * canvas.height + canvas.height,
               speed: Math.random() * 0.5 + 0.2,
               size: Math.random() * 2 + 1
            });
         }
      } else if (type === 'network') {
         // Members: Connected nodes
         for (let i=0; i<40; i++) {
            particles.push({
               x: Math.random() * canvas.width,
               y: Math.random() * canvas.height,
               vx: (Math.random() - 0.5) * 0.5,
               vy: (Math.random() - 0.5) * 0.5
            });
         }
      } else if (type === 'matrix') {
          // Digital Health: Matrix-style rain
          const fontSize = 16;
          const columns = Math.ceil(canvas.width / fontSize);
          
          for (let i = 0; i < columns; i++) {
              particles.push({
                  x: i * fontSize,
                  y: Math.random() * -canvas.height, // Start above screen
                  speed: Math.random() * 2 + 1,
                  chars: Array.from({length: 15}, () => Math.random() > 0.5 ? '1' : '0')
              });
          }
      }
    };

    const draw = () => {
       ctx.clearRect(0, 0, canvas.width, canvas.height);
       const time = Date.now() * 0.001;

       if (type === 'molecules') {
          ctx.strokeStyle = accent;
          ctx.lineWidth = 1;
          particles.forEach(p => {
             p.angle += p.rotation;
             p.y -= p.speed;
             if(p.y < -50) p.y = canvas.height + 50;

             ctx.save();
             ctx.translate(p.x, p.y);
             ctx.rotate(p.angle);
             ctx.globalAlpha = 0.1;
             ctx.beginPath();
             for (let i = 0; i < 6; i++) {
                ctx.lineTo(p.size * Math.cos(i * Math.PI / 3), p.size * Math.sin(i * Math.PI / 3));
             }
             ctx.closePath();
             ctx.stroke();
             // Connections
             ctx.beginPath();
             ctx.moveTo(0,0);
             ctx.lineTo(p.size * Math.cos(0), p.size * Math.sin(0));
             ctx.stroke();
             ctx.restore();
          });
       } else if (type === 'circuit') {
          ctx.fillStyle = tech;
          particles.forEach(p => {
             p.timer++;
             if (p.timer > 200) {
                p.active = !p.active;
                p.timer = 0;
             }
             ctx.globalAlpha = p.active ? 0.4 : 0.05;
             ctx.beginPath();
             ctx.arc(p.x, p.y, 1.5, 0, Math.PI*2);
             ctx.fill();
          });
       } else if (type === 'streams') {
          ctx.lineWidth = 1.5;
          particles.forEach(p => {
             ctx.strokeStyle = p.color;
             ctx.globalAlpha = 0.1;
             ctx.beginPath();
             for (let x = 0; x < canvas.width; x+=10) {
                const y = p.y + Math.sin(x * 0.01 + time * p.speed + p.offset) * 30;
                if (x===0) ctx.moveTo(x,y);
                else ctx.lineTo(x,y);
             }
             ctx.stroke();
          });
       } else if (type === 'timeline') {
          ctx.fillStyle = accent;
          particles.forEach(p => {
             p.y -= p.speed;
             if (p.y < 0) p.y = canvas.height;
             ctx.globalAlpha = 0.15;
             ctx.beginPath();
             ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
             ctx.fill();
             // Trail
             ctx.globalAlpha = 0.05;
             ctx.beginPath();
             ctx.moveTo(p.x, p.y);
             ctx.lineTo(p.x, p.y + 20);
             ctx.stroke();
          });
       } else if (type === 'network') {
          ctx.strokeStyle = textColor; // Use text color so it is visible on both dark/light
          ctx.fillStyle = textColor;
          particles.forEach(p => {
             p.x += p.vx; p.y += p.vy;
             if(p.x < 0 || p.x > canvas.width) p.vx *= -1;
             if(p.y < 0 || p.y > canvas.height) p.vy *= -1;
             
             ctx.globalAlpha = 0.1;
             ctx.beginPath();
             ctx.arc(p.x, p.y, 1.5, 0, Math.PI*2);
             ctx.fill();
          });
          
          for(let i=0; i<particles.length; i++) {
             for(let j=i+1; j<particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < 100) {
                   ctx.globalAlpha = 0.1 * (1 - dist/100);
                   ctx.beginPath();
                   ctx.moveTo(particles[i].x, particles[i].y);
                   ctx.lineTo(particles[j].x, particles[j].y);
                   ctx.stroke();
                }
             }
          }
       } else if (type === 'matrix') {
           ctx.font = '14px monospace';
           ctx.fillStyle = tech;
           
           particles.forEach(p => {
               p.y += p.speed;
               // Draw the string
               p.chars.forEach((char: string, index: number) => {
                   // Fade out tail
                   const alpha = 1 - (index / p.chars.length);
                   ctx.globalAlpha = alpha * 0.3;
                   // Randomly flip bits
                   if (Math.random() > 0.95) p.chars[index] = Math.random() > 0.5 ? '1' : '0';
                   ctx.fillText(char, p.x, p.y - index * 14);
               });
               
               // Reset
               if (p.y - (p.chars.length * 14) > canvas.height) {
                   p.y = Math.random() * -100;
                   p.speed = Math.random() * 2 + 1;
               }
           });
       }

       animationId = requestAnimationFrame(draw);
    };
    
    // Resize Observer to handle container size changes
    const resizeObserver = new ResizeObserver(() => {
       init();
    });
    if (canvas.parentElement) {
       resizeObserver.observe(canvas.parentElement);
    }
    
    window.addEventListener('resize', init);
    // Observe theme changes (attribute changes on root)
    const observer = new MutationObserver(() => init());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['style'] });

    init();
    draw();
    
    return () => {
       window.removeEventListener('resize', init);
       resizeObserver.disconnect();
       observer.disconnect();
       cancelAnimationFrame(animationId);
    }
  }, [type]);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />;
};


/**
 * BioFlow Background Component
 * Visualizes the flow: DNA (Central Dogma) -> Molecular Networks -> Physiological Systems -> Digital Output
 * Updates: 
 * - Emphasized background complex network in Zone 2/3.
 * - Expanded Zone 4 to include 14 distinct physiological waveforms.
 */
const BioFlowBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    
    interface Particle {
      x: number;
      y: number;
      vx: number;
      baseY: number;
      amplitude: number;
      phase: number;
      type: string;
      color: string;
      size: number;
      strand: number; // 0 or 1 for double helix
      laneIndex?: number; // For Zone 4 lane tracking (0-13)
    }

    interface BgNode {
      x: number;
      y: number;
      vx: number;
      vy: number;
    }
    
    let particles: Particle[] = [];
    let bgNodes: BgNode[] = []; 
    
    // Cache colors (will be updated in init/resize)
    let colorAccent = '#10B981';
    let colorTech = '#06B6D4';
    let colorDark = '#020617';
    let colorText = '#f8fafc';

    // 14 Distinct Signals
    const SIGNAL_TYPES = [
      { label: 'EMG', color: '#F59E0B' },    // Surface Electromyography
      { label: 'ECG', color: '#EF4444' },    // Electrocardiogram
      { label: 'fNIRS', color: '#8B5CF6' },  // Functional Near-Infrared Spectroscopy
      { label: 'EEG', color: '#10B981' },    // Electroencephalogram
      { label: 'SpO2', color: '#3B82F6' },   // Oxygen Saturation
      { label: 'EGG', color: '#EC4899' },    // Electrogastrogram
      { label: 'EOG', color: '#14B8A6' },    // Electrooculogram
      { label: 'BVP', color: '#F43F5E' },    // Blood Volume Pulse
      { label: 'RIP', color: '#6366F1' },    // Respiratory
      { label: 'FORCE', color: '#84CC16' },  // Force Sensor
      { label: 'TEMP', color: '#F97316' },   // Temperature
      { label: 'EDA', color: '#06B6D4' },    // Electrodermal Activity
      { label: 'LUX', color: '#EAB308' },    // Illuminance
      { label: 'ACC', color: '#64748B' },    // Accelerometer
    ];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const style = getComputedStyle(document.documentElement);
      colorAccent = style.getPropertyValue('--color-accent').trim() || '#10B981';
      colorTech = style.getPropertyValue('--color-tech').trim() || '#06B6D4';
      colorDark = style.getPropertyValue('--color-dark').trim() || '#020617';
      colorText = style.getPropertyValue('--color-text').trim() || '#f8fafc';
      
      particles = [];
      bgNodes = [];

      // Initialize Background Network Nodes
      const bgNodeCount = Math.floor(canvas.width / 20);
      for (let i = 0; i < bgNodeCount; i++) {
        bgNodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
        });
      }
      
      // Initialize Active Flow Particles
      const count = Math.min(canvas.width / 5, 250); 
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: Math.random() * 0.5 + 0.5,
          baseY: Math.random() * canvas.height, 
          amplitude: 20 + Math.random() * 20,
          phase: Math.random() * Math.PI * 2,
          type: 'dot',
          color: colorAccent,
          size: Math.random() * 2 + 1,
          strand: i % 2,
          laneIndex: Math.floor(Math.random() * SIGNAL_TYPES.length) 
        });
      }
    };

    // Waveform Logic Functions
    const getSignalY = (type: number, x: number, baseY: number, time: number) => {
      let offset = 0;
      // Moving wave factor (scrolling right to left visually)
      const t = x * 0.05 - time * 5; 

      switch (type) {
        case 0: // EMG: Noise Bursts
            const emgEnv = Math.sin(t * 0.3);
            const noise = (Math.random() - 0.5) * 12;
            offset = (emgEnv > 0.6) ? noise : (Math.random()-0.5) * 2;
            break;
        case 1: // ECG: P-QRS-T
            const cycle = t % (Math.PI * 2);
            const nCycle = cycle < 0 ? cycle + Math.PI * 2 : cycle;
            offset = Math.sin(nCycle) * 3; 
            const dist = Math.abs(nCycle - 4.0);
            if (dist < 0.5) {
              offset -= Math.exp(-Math.pow(dist * 10, 2)) * 40; // R
              offset += Math.exp(-Math.pow((dist - 0.2) * 10, 2)) * 10; // S
            }
            break;
        case 2: // fNIRS: Slow Hemodynamic
            offset = Math.sin(t * 0.05) * 10;
            break;
        case 3: // EEG: Fast Alpha/Beta
            offset = Math.sin(t * 2) * 4 + Math.sin(t * 5) * 2 + (Math.random() - 0.5) * 2;
            break;
        case 4: // SpO2: PPG Wave (Dicrotic Notch)
            const ppgT = t % (Math.PI * 2);
            const ppgCycle = ppgT < 0 ? ppgT + Math.PI*2 : ppgT;
            // Approximation of systolic peak + notch
            offset = -12 * Math.exp(-Math.pow(ppgCycle - 2, 2) * 2) - 4 * Math.exp(-Math.pow(ppgCycle - 3.5, 2) * 2);
            break;
        case 5: // EGG: Very Slow (3 cpm)
            offset = Math.sin(t * 0.02) * 8;
            break;
        case 6: // EOG: Saccadic Steps
            offset = Math.sign(Math.sin(t * 0.15)) * 8;
            // Smooth transition slightly
            // offset handled by particle movement smoothing usually, but raw calculation here
            break;
        case 7: // BVP: Pulse (Sharper than SpO2)
            const bvpCycle = t % 4;
            const bvpNorm = bvpCycle < 0 ? bvpCycle + 4 : bvpCycle;
            offset = (bvpNorm < 0.5 ? -15 * Math.sin(bvpNorm * Math.PI) : 0);
            break;
        case 8: // RIP: Respiratory Sine
            offset = Math.sin(t * 0.1) * 10;
            break;
        case 9: // FORCE: Plateau / Hold
             offset = Math.max(0, Math.sin(t * 0.2)) * 10;
             break;
        case 10: // TEMP: Flat with drift
             offset = Math.sin(t * 0.01) * 2 + (Math.random() - 0.5);
             break;
        case 11: // EDA: Skin Conductance Response (Rise fast, decay slow)
             const edaT = t % 15;
             const edaNorm = edaT < 0 ? edaT + 15 : edaT;
             if (edaNorm < 2) offset = -edaNorm * 8;
             else offset = -16 * Math.exp(-(edaNorm - 2) * 0.5);
             break;
        case 12: // LUX: Ambient steps
             offset = Math.floor(t * 0.05) % 2 === 0 ? 5 : -5;
             break;
        case 13: // ACC: High Freq Noise
             offset = (Math.random() - 0.5) * 8;
             break;
        default:
             offset = Math.sin(t) * 5;
      }
      
      return baseY + offset;
    };

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const time = Date.now() * 0.001;

      // 1. Clear & Fade
      ctx.fillStyle = colorDark;
      ctx.globalAlpha = 0.2; // Trails
      ctx.fillRect(0, 0, w, h);
      ctx.globalAlpha = 1.0;

      // 2. Draw Background "Complex System" Network
      ctx.lineWidth = 0.5;
      
      bgNodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;

        const xPct = node.x / w;
        let nodeOpacity = 0.05;
        if (xPct > 0.25 && xPct < 0.8) {
           nodeOpacity = 0.25; 
        }

        // Connect BG nodes
        for (let j = i + 1; j < bgNodes.length; j++) {
          const other = bgNodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const distSq = dx*dx + dy*dy;
          
          if (distSq < 22500) { 
             ctx.beginPath();
             ctx.strokeStyle = colorText; // Use text color so it works on light/dark
             ctx.globalAlpha = nodeOpacity * (1 - Math.sqrt(distSq)/150);
             ctx.moveTo(node.x, node.y);
             ctx.lineTo(other.x, other.y);
             ctx.stroke();
          }
        }
        
        ctx.globalAlpha = nodeOpacity;
        ctx.beginPath();
        ctx.arc(node.x, node.y, xPct > 0.25 && xPct < 0.8 ? 2 : 1.5, 0, Math.PI*2);
        ctx.fillStyle = colorText;
        ctx.fill();
      });
      ctx.globalAlpha = 1.0;


      // 3. Draw Zone 4 (Digital) Waveforms BACKGROUND
      const zone4Start = w * 0.8;
      if (w > zone4Start) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(zone4Start, 0, w - zone4Start, h);
        ctx.clip();

        // Distribute lanes vertically
        const laneHeight = h / SIGNAL_TYPES.length;

        SIGNAL_TYPES.forEach((signal, idx) => {
           const laneY = laneHeight * idx + laneHeight/2;
           
           ctx.beginPath();
           ctx.strokeStyle = signal.color;
           ctx.lineWidth = 1;
           ctx.globalAlpha = 0.3;
           
           // Draw waveform
           for (let x = zone4Start; x < w; x+=3) {
              const y = getSignalY(idx, x, laneY, time);
              if (x === zone4Start) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
           }
           ctx.stroke();

           // Draw Label
           ctx.font = '9px monospace';
           ctx.fillStyle = signal.color;
           ctx.globalAlpha = 0.8;
           ctx.fillText(signal.label, zone4Start + 5, laneY - 8);
        });
        ctx.restore();
      }


      // 4. Update & Draw Flow Particles
      particles.forEach(p => {
        const pct = p.x / w;
        
        // ZONE 1: Genomic Layer (0-25%)
        if (pct < 0.25) {
           p.type = ['A', 'T', 'C', 'G'][Math.floor(Math.abs(p.phase) * 10) % 4];
           p.color = colorAccent;
           p.vx = 0.5;
           const freq = 0.015;
           const strandPhase = p.strand === 0 ? 0 : Math.PI;
           p.y = p.baseY + Math.sin(p.x * freq + time + strandPhase) * p.amplitude;
           
           ctx.font = '10px monospace';
           ctx.fillStyle = p.color;
           ctx.fillText(p.type, p.x, p.y);
        }
        
        // ZONE 2: Network Biology (25-55%)
        else if (pct < 0.55) {
           p.type = 'dot';
           p.color = colorAccent; 
           p.vx = 0.8; 
           const transitionPct = (pct - 0.25) / 0.30;
           const currentAmp = p.amplitude * (1 - transitionPct);
           p.y = p.baseY + Math.sin(p.x * 0.015 + time) * currentAmp;
           
           ctx.beginPath();
           ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
           ctx.fillStyle = p.color;
           ctx.fill();
        }
        
        // ZONE 3: Network Physiology (55-80%)
        else if (pct < 0.80) {
           p.type = 'dot';
           p.vx = 1.2;
           p.color = colorTech;
           // Synchronize into "System Lanes" (grouping particles)
           const laneGroup = Math.round(p.baseY / (h/5)) * (h/5) + (h/10); 
           const syncStrength = (pct - 0.55) / 0.25; 
           p.y = p.y * (1 - syncStrength * 0.2) + laneGroup * (syncStrength * 0.2); 
           p.size = 2 + Math.sin(time * 5 + p.x * 0.01) * 1.5; 
           
           ctx.beginPath();
           ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
           ctx.fillStyle = p.color;
           ctx.fill();
        }
        
        // ZONE 4: Digital/Neural Signals (80-100%)
        else {
           p.type = 'signal';
           const laneIdx = p.laneIndex || 0;
           p.color = SIGNAL_TYPES[laneIdx].color;
           p.vx = 2.5; 
           
           const laneHeight = h / SIGNAL_TYPES.length;
           const targetBaseY = laneHeight * laneIdx + laneHeight/2;
           
           // Calculate Y based on the specific signal function
           const signalY = getSignalY(laneIdx, p.x, targetBaseY, time);
           
           // Snap to signal line
           p.y = p.y * 0.7 + signalY * 0.3;

           ctx.beginPath();
           ctx.arc(p.x, p.y, 2, 0, Math.PI*2);
           ctx.fillStyle = p.color;
           ctx.fill();
        }

        // Move
        p.x += p.vx;
        if (p.x > w) {
          p.x = -10;
          p.baseY = Math.random() * h;
          // Reassign random lane for next pass
          p.laneIndex = Math.floor(Math.random() * SIGNAL_TYPES.length); 
        }
        
        // Mouse Interaction
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 150) {
           ctx.beginPath();
           ctx.strokeStyle = p.color;
           ctx.globalAlpha = 0.4 * (1 - dist/150);
           ctx.moveTo(p.x, p.y);
           ctx.lineTo(mx, my);
           ctx.stroke();
           ctx.globalAlpha = 1.0;
           p.y += dy * 0.05;
           p.x += dx * 0.01;
        }
      });
      
      // 5. Draw Foreground Network Edges (Zone 2 & 3)
      ctx.lineWidth = 0.5;
      for (let i=0; i<particles.length; i++) {
         const p1 = particles[i];
         if (p1.x/w < 0.25 || p1.x/w > 0.8) continue;
         
         // Optimization: limit check count or distance
         for (let j=i+1; j<particles.length; j++) {
            const p2 = particles[j];
            if (p2.x/w < 0.25 || p2.x/w > 0.8) continue;
            if (Math.abs(p1.x - p2.x) > 100) continue;
            
            const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
            if (dist < 80) {
               ctx.beginPath();
               ctx.strokeStyle = p1.color; 
               ctx.globalAlpha = 0.3 * (1 - dist/80);
               ctx.moveTo(p1.x, p1.y);
               ctx.lineTo(p2.x, p2.y);
               ctx.stroke();
               ctx.globalAlpha = 1.0;
            }
         }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => init();
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Watch for theme changes
    const observer = new MutationObserver(() => init());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['style'] });
    
    init();
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-70" />;
};

/**
 * Mission Canvas Component
 * Renders dynamic visualizations for Bioinformatics (DNA/Omics) and Digital Health (Sensing/Signals)
 */
const MissionCanvas = ({ mode }: { mode: 'bio' | 'health' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const getVarColor = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    
    let accentColor = getVarColor('--color-accent') || '#10B981';
    let techColor = getVarColor('--color-tech') || '#06B6D4';
    let surfaceColor = getVarColor('--color-surface') || '#0F172A';

    let animationId: number;
    let frame = 0;

    // Bio: Gene particles
    const bioParticles = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      char: ['A', 'T', 'C', 'G'][Math.floor(Math.random() * 4)],
      speed: Math.random() * 1 + 0.5,
      opacity: Math.random()
    }));

    const draw = () => {
      frame++;
      // Trail effect
      ctx.fillStyle = surfaceColor; 
      ctx.globalAlpha = 0.2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1.0;

      if (mode === 'bio') {
        // --- BIO MODE: DNA Strands & Code ---
        
        // 1. Draw Double Helix (Sine waves)
        const centerY = canvas.height / 2;
        const amplitude = 60;
        const frequency = 0.02;
        const speed = frame * 0.05;

        for (let x = 0; x < canvas.width; x += 10) {
          // Strand 1
          const y1 = centerY + Math.sin(x * frequency + speed) * amplitude;
          ctx.beginPath();
          ctx.arc(x, y1, 3, 0, Math.PI * 2);
          ctx.fillStyle = accentColor; 
          ctx.fill();

          // Strand 2
          const y2 = centerY + Math.sin(x * frequency + speed + Math.PI) * amplitude;
          ctx.beginPath();
          ctx.arc(x, y2, 3, 0, Math.PI * 2);
          ctx.fillStyle = accentColor; 
          ctx.fill();

          // Base pairs connection
          if (x % 20 === 0) {
            ctx.beginPath();
            ctx.strokeStyle = accentColor;
            ctx.globalAlpha = 0.3;
            ctx.moveTo(x, y1);
            ctx.lineTo(x, y2);
            ctx.stroke();
            ctx.globalAlpha = 1.0;
          }
        }

        // 2. Floating Genetic Code
        ctx.font = '12px "JetBrains Mono"';
        bioParticles.forEach(p => {
          p.y += p.speed;
          if (p.y > canvas.height) p.y = -20;
          
          ctx.fillStyle = accentColor;
          ctx.globalAlpha = p.opacity;
          ctx.fillText(p.char, p.x, p.y);
          ctx.globalAlpha = 1.0;
        });

      } else {
        // --- HEALTH MODE: Digital Twin & Signals ---

        // 1. Background Grid (Scanning)
        ctx.strokeStyle = techColor;
        ctx.globalAlpha = 0.1;
        ctx.lineWidth = 1;
        const gridSize = 50;
        
        // Standard Grid
        for(let x=0; x<canvas.width; x+=gridSize) { 
            ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,canvas.height); ctx.stroke(); 
        }
        for(let y=0; y<canvas.height; y+=gridSize) { 
            ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(canvas.width,y); ctx.stroke(); 
        }
        ctx.globalAlpha = 1.0;

        // 2. ECG Waveform
        ctx.beginPath();
        ctx.strokeStyle = techColor; 
        ctx.lineWidth = 3;
        ctx.shadowBlur = 10;
        ctx.shadowColor = techColor;
        
        const centerY = canvas.height / 2;
        for (let x = 0; x < canvas.width; x+=2) {
           let y = centerY;
           
           // Simulated heartbeat pattern
           const t = (x + frame * 4) % canvas.width;
           
           // Basic noise
           y += Math.sin(x * 0.1 + frame * 0.1) * 5;

           // Heartbeat spike logic (simplified)
           const phase = (x - frame * 3) % 400; 
           
           if (phase > 180 && phase < 220) {
              // QRS complex approximation
              if (phase < 190) y -= 10;
              else if (phase < 200) y += 60; // R
              else if (phase < 210) y -= 20; // S
           }
           
           if (x === 0) ctx.moveTo(x, y);
           else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        // 3. Scanning Bar
        const scanY = (frame * 3) % canvas.height;
        // Gradient fallback
        ctx.fillStyle = techColor;
        ctx.fillRect(0, scanY, canvas.width, 2);
        
        // 4. Data Points overlay
        ctx.fillStyle = techColor;
        ctx.font = '10px "JetBrains Mono"';
        ctx.fillText(`HR: ${Math.floor(60 + Math.sin(frame*0.05)*10)} BPM`, 20, 40);
        ctx.fillText(`SPO2: 99%`, 20, 55);
        ctx.fillText(`Gait Velocity: 1.2 m/s`, 20, 70);
      }

      animationId = requestAnimationFrame(draw);
    };
    
    // Watch for theme changes
    const observer = new MutationObserver(() => {
        accentColor = getVarColor('--color-accent') || '#10B981';
        techColor = getVarColor('--color-tech') || '#06B6D4';
        surfaceColor = getVarColor('--color-surface') || '#0F172A';
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['style'] });
    
    const resize = () => {
        if (canvas.parentElement) {
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
        }
    };
    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
        window.removeEventListener('resize', resize);
        observer.disconnect();
        cancelAnimationFrame(animationId);
    }
  }, [mode]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};


function App() {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.HOME);
  const [activeDomain, setActiveDomain] = useState<string>('comp-bio');
  const [missionMode, setMissionMode] = useState<'bio' | 'health'>('bio');
  const [lang, setLang] = useState<Language>('en'); // Default language
  
  // Theme State
  const [themeMode, setThemeMode] = useState<ThemeMode>('auto');
  const [showThemeGen, setShowThemeGen] = useState(false);
  const [moodInput, setMoodInput] = useState('');
  const [isGeneratingTheme, setIsGeneratingTheme] = useState(false);
  const [theme, setTheme] = useState<Theme | null>(null);

  // Selected Server for Modal/Details
  const [selectedServer, setSelectedServer] = useState<ServerSpec | null>(null);

  const content = CONTENT[lang];

  // Logic to resolve and apply theme
  useEffect(() => {
    const applyTheme = (targetTheme: Theme) => {
      const root = document.documentElement;
      root.style.setProperty('--color-primary', targetTheme.colors.primary);
      root.style.setProperty('--color-primary-dark', targetTheme.colors.primaryDark);
      root.style.setProperty('--color-accent', targetTheme.colors.accent);
      root.style.setProperty('--color-tech', targetTheme.colors.tech);
      root.style.setProperty('--color-dark', targetTheme.colors.dark);
      root.style.setProperty('--color-surface', targetTheme.colors.surface);
      root.style.setProperty('--color-text', targetTheme.colors.text);
      root.style.setProperty('--color-text-muted', targetTheme.colors.textMuted);
      root.style.setProperty('--color-border', targetTheme.colors.border);
    };

    if (theme) {
       // AI Generated Theme takes precedence if active
       applyTheme(theme);
    } else {
       // Standard Modes
       let mode = themeMode;
       if (mode === 'auto') {
         const hour = new Date().getHours();
         mode = (hour >= 6 && hour < 18) ? 'light' : 'dark';
       }
       
       if (mode === 'light') applyTheme(DEFAULT_LIGHT_THEME);
       else applyTheme(DEFAULT_DARK_THEME);
    }
  }, [themeMode, theme]);

  const handleGenerateTheme = async () => {
    if (!moodInput.trim()) return;
    setIsGeneratingTheme(true);
    const newTheme = await generateThemeFromMood(moodInput);
    if (newTheme) {
      setTheme(newTheme);
      setShowThemeGen(false);
      setMoodInput('');
    }
    setIsGeneratingTheme(false);
  };

  const resetTheme = () => {
    setTheme(null);
  };

  // Mission Mode Auto-Cycle
  useEffect(() => {
    const interval = setInterval(() => {
        setMissionMode(prev => prev === 'bio' ? 'health' : 'bio');
    }, 8000); // Switch every 8 seconds
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-20% 0px -20% 0px" }
    );

    Object.values(SectionId).forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Group publications by year
  const groupedPublications = useMemo(() => {
    const years = Array.from(new Set(PUBLICATIONS.map(p => p.year))).sort((a, b) => b - a);
    return years.map(year => ({
      year,
      pubs: PUBLICATIONS.filter(p => p.year === year)
    }));
  }, []);

  return (
    <div className="min-h-screen bg-nu-dark text-nu-text font-sans selection:bg-nu-accent selection:text-white transition-colors duration-700">
      <Navbar 
        activeSection={activeSection} 
        lang={lang} 
        setLang={setLang} 
        themeMode={themeMode}
        setThemeMode={setThemeMode}
      />

      {/* Hero Section */}
      <section id={SectionId.HOME} className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
        {/* REPLACED BACKGROUND */}
        <BioFlowBackground />
        
        {/* Overlay Gradients for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nu-dark/80 to-nu-dark pointer-events-none z-0"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-nu-accent via-nu-tech to-nu-accent opacity-50"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nu-surface/80 border border-nu-border backdrop-blur-md mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nu-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-nu-accent"></span>
            </span>
            <span className="text-nu-textMuted text-xs font-mono tracking-widest uppercase">
              {content.labName} · Nagoya University
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6 text-nu-text drop-shadow-2xl">
            {content.hero.titlePrefix} <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nu-accent to-emerald-300">{content.hero.titleOmics}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nu-tech to-blue-400">{content.hero.titleTwin}</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-nu-textMuted leading-relaxed mb-10 font-light">
            {content.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
             <button onClick={() => document.getElementById(SectionId.RESEARCH)?.scrollIntoView({behavior:'smooth'})} 
               className="w-full sm:w-auto px-8 py-4 bg-nu-primary hover:bg-nu-accent text-white font-semibold rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-2 group border border-transparent">
               <Activity className="w-5 h-5 group-hover:animate-pulse"/> 
               {content.hero.ctaResearch}
             </button>
             <button onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({behavior:'smooth'})}
               className="w-full sm:w-auto px-8 py-4 bg-transparent border border-nu-textMuted/30 hover:border-nu-text text-nu-textMuted hover:text-nu-text font-semibold rounded-lg transition-all flex items-center justify-center">
               {content.hero.ctaJoin}
             </button>
          </div>

          {/* Stats / Keywords HUD */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl border-t border-nu-border pt-8">
            {content.hero.keywords.map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-4 rounded-xl bg-nu-surface/50 border border-nu-border hover:border-nu-textMuted transition-colors backdrop-blur-sm group cursor-default">
                <div className="mb-2 p-2 rounded-full bg-nu-dark group-hover:bg-nu-surface transition-colors">
                  {i === 0 && <Dna className="text-nu-accent w-6 h-6"/>}
                  {i === 1 && <Smartphone className="text-nu-tech w-6 h-6"/>}
                  {i === 2 && <Cpu className="text-purple-400 w-6 h-6"/>}
                  {i === 3 && <Network className="text-orange-400 w-6 h-6"/>}
                </div>
                <div className="text-2xl font-mono font-bold text-nu-text">{item.val}</div>
                <div className="text-xs text-nu-textMuted uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Mission Section */}
      <section className="py-24 bg-nu-surface relative overflow-hidden transition-colors duration-700">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex items-center gap-2 mb-8">
             <div className="h-px w-8 bg-nu-text/50"></div>
             <span className="text-nu-text/70 font-mono text-sm tracking-widest uppercase">{content.mission.label}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Interactive Selector */}
            <ScrollReveal className="order-2 lg:order-1 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-nu-text leading-tight">
                {content.mission.title}<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-nu-accent to-nu-tech">{content.mission.highlight}</span>
              </h2>
              <p className="text-nu-textMuted text-lg leading-relaxed">
                {content.mission.description}
              </p>

              <div className="space-y-4">
                {/* Bioinformatics Selectable Card */}
                <div 
                   onClick={() => setMissionMode('bio')}
                   className={`relative p-6 rounded-xl border transition-all duration-300 cursor-pointer group ${
                     missionMode === 'bio' 
                       ? 'bg-nu-primary/20 border-nu-accent/50 shadow-[0_0_20px_rgba(16,185,129,0.1)]' 
                       : 'bg-nu-dark/30 border-nu-border hover:bg-nu-dark/50'
                   }`}
                >
                   {missionMode === 'bio' && <div className="absolute left-0 top-0 bottom-0 w-1 bg-nu-accent rounded-l-xl"></div>}
                   <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${missionMode === 'bio' ? 'bg-nu-accent/20 text-nu-accent' : 'bg-nu-surface text-nu-textMuted'}`}>
                         <Dna className="w-6 h-6" />
                      </div>
                      <div>
                         <h4 className={`text-lg font-bold ${missionMode === 'bio' ? 'text-nu-text' : 'text-nu-textMuted'}`}>{content.mission.bioCard.title}</h4>
                         <p className="text-sm text-nu-textMuted mt-1">
                           {content.mission.bioCard.desc}
                         </p>
                      </div>
                   </div>
                </div>

                {/* Digital Health Selectable Card */}
                <div 
                   onClick={() => setMissionMode('health')}
                   className={`relative p-6 rounded-xl border transition-all duration-300 cursor-pointer group ${
                     missionMode === 'health' 
                       ? 'bg-nu-tech/20 border-nu-tech/50 shadow-[0_0_20px_rgba(6,182,212,0.1)]' 
                       : 'bg-nu-dark/30 border-nu-border hover:bg-nu-dark/50'
                   }`}
                >
                   {missionMode === 'health' && <div className="absolute left-0 top-0 bottom-0 w-1 bg-nu-tech rounded-l-xl"></div>}
                   <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${missionMode === 'health' ? 'bg-nu-tech/20 text-nu-tech' : 'bg-nu-surface text-nu-textMuted'}`}>
                         <HeartPulse className="w-6 h-6" />
                      </div>
                      <div>
                         <h4 className={`text-lg font-bold ${missionMode === 'health' ? 'text-nu-text' : 'text-nu-textMuted'}`}>{content.mission.healthCard.title}</h4>
                         <p className="text-sm text-nu-textMuted mt-1">
                           {content.mission.healthCard.desc}
                         </p>
                      </div>
                   </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column: Dynamic Visual Canvas */}
            <ScrollReveal className="order-1 lg:order-2">
               <div className="relative aspect-video lg:aspect-square w-full bg-nu-dark rounded-2xl overflow-hidden border border-nu-border shadow-2xl transition-colors duration-700">
                  {/* The Dynamic Canvas */}
                  <MissionCanvas mode={missionMode} />
                  
                  {/* Overlay UI Elements (HUD style) */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                     <span className={`w-2 h-2 rounded-full animate-pulse ${missionMode === 'bio' ? 'bg-nu-accent' : 'bg-nu-tech'}`}></span>
                     <span className="text-xs font-mono text-nu-textMuted uppercase tracking-widest">
                       {missionMode === 'bio' ? 'SEQ_ANALYSIS_RUNNING' : 'REALTIME_SENSING_ACTIVE'}
                     </span>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 bg-nu-surface/80 backdrop-blur px-3 py-1 rounded border border-nu-border">
                     <span className="text-xs font-mono text-nu-textMuted">
                       MODE: <span className={missionMode === 'bio' ? 'text-nu-accent' : 'text-nu-tech'}>{missionMode.toUpperCase()}</span>
                     </span>
                  </div>
               </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Research Dashboard */}
      <section id={SectionId.RESEARCH} className="py-24 bg-nu-dark relative transition-colors duration-700 overflow-hidden">
        <ElegantBackground type={activeDomain === 'comp-bio' ? 'molecules' : 'matrix'} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <ScrollReveal>
             <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-nu-border pb-8">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold text-nu-text mb-2">{content.research.title}</h2>
                  <p className="text-nu-textMuted font-mono text-sm">{content.research.subtitle}</p>
                </div>
                
                <div className="flex bg-nu-surface p-1 rounded-lg border border-nu-border mt-6 md:mt-0">
                   {content.research.domains.map(domain => (
                     <button
                       key={domain.id}
                       onClick={() => setActiveDomain(domain.id)}
                       className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${
                         activeDomain === domain.id
                           ? (domain.id === 'comp-bio' ? 'bg-nu-accent/20 text-nu-accent border border-nu-accent/50' : 'bg-nu-tech/20 text-nu-tech border border-nu-tech/50')
                           : 'text-nu-textMuted hover:text-nu-text hover:bg-nu-dark'
                       }`}
                     >
                       {domain.id === 'comp-bio' ? <Dna className="w-4 h-4"/> : <Smartphone className="w-4 h-4"/>}
                       <span className="hidden sm:inline">{domain.title.split(' ')[0]}</span>
                       <span className="sm:hidden">{domain.id === 'comp-bio' ? 'Bio' : 'Digital'}</span>
                     </button>
                   ))}
                </div>
             </div>
           </ScrollReveal>

           {content.research.domains.map(domain => (
             <div key={domain.id} className={`${activeDomain === domain.id ? 'block animate-fade-in-up' : 'hidden'}`}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {domain.projects.map((project) => (
                    <div key={project.id} className="group relative bg-nu-surface rounded-xl overflow-hidden border border-nu-border hover:border-nu-textMuted transition-all duration-300 h-[400px] flex flex-col">
                      
                      {/* Image Area with "Data View" overlay */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-nu-surface to-transparent"></div>
                        
                        {/* Scanning Line Effect on Hover */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-white/30 shadow-[0_0_10px_white] -translate-y-full group-hover:animate-scan opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        {/* Badge */}
                        <div className="absolute top-4 left-4">
                           <span className={`text-[10px] font-mono border px-2 py-1 rounded bg-black/50 backdrop-blur-sm ${
                             domain.id === 'comp-bio' ? 'border-nu-accent text-nu-accent' : 'border-nu-tech text-nu-tech'
                           }`}>
                             {project.tags?.[0] || 'RESEARCH'}
                           </span>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="p-6 flex-1 flex flex-col relative z-10">
                        <h5 className="font-bold text-lg text-nu-text leading-tight mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-colors">
                          {project.title}
                        </h5>
                        <p className={`text-xs font-bold mb-3 ${domain.id === 'comp-bio' ? 'text-nu-accent' : 'text-nu-tech'}`}>
                          {project.subtitle}
                        </p>
                        
                        <p className="text-nu-textMuted text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mt-auto pt-4">
                          {project.tags?.slice(1).map((tag, idx) => (
                            <span key={idx} className="px-2 py-1 bg-nu-dark text-nu-textMuted text-[10px] uppercase font-bold tracking-wider rounded border border-nu-border">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Tech Border Accent */}
                      <div className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ${domain.id === 'comp-bio' ? 'bg-nu-accent' : 'bg-nu-tech'}`}></div>

                    </div>
                  ))}
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* COMPUTING RESOURCES SECTION */}
      <section id={SectionId.COMPUTING} className="py-24 bg-nu-surface border-t border-nu-border transition-colors duration-700 relative overflow-hidden">
        <ElegantBackground type="circuit" />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-nu-dark/30 skew-x-12 transform origin-top-right pointer-events-none z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-nu-text mb-4">{content.computing.title}</h2>
            <p className="text-nu-textMuted font-mono text-sm max-w-2xl">
              {content.computing.subtitle}
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            {/* Left: iGCORE HPC Dashboard */}
            <ScrollReveal className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <Database className="text-nu-accent w-6 h-6" />
                <h3 className="text-2xl font-bold text-nu-text">{content.computing.igcoreTitle}</h3>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {IGCORE_SPECS.stats.map((stat, i) => (
                  <div key={i} className="bg-nu-dark/50 border border-nu-border p-4 rounded-lg text-center backdrop-blur-sm">
                    <div className="text-2xl font-bold text-nu-accent font-mono">{stat.value}</div>
                    <div className="text-xs text-nu-textMuted uppercase tracking-wider mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Visual Server Racks */}
              <div className="bg-nu-dark border border-nu-border rounded-xl p-6 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-2 text-[10px] font-mono text-nu-textMuted">SYSTEM_STATUS: ONLINE</div>
                 <div className="space-y-4">
                    {IGCORE_SPECS.nodes.map((node, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-nu-surface rounded flex items-center justify-center border border-nu-border group-hover:border-nu-accent/50 transition-colors">
                           <Server className="w-6 h-6 text-nu-textMuted group-hover:text-nu-accent" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-baseline">
                            <h4 className="font-bold text-sm text-nu-text">{node.type}</h4>
                            <span className="text-xs font-mono text-nu-accent">{node.count} Nodes</span>
                          </div>
                          <div className="text-xs text-nu-textMuted font-mono mt-1">{node.specs}</div>
                          <div className="mt-2 w-full bg-nu-surface h-1 rounded-full overflow-hidden">
                            <div className="h-full bg-nu-accent/50 w-3/4 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
            </ScrollReveal>

            {/* Right: Daiko Terminal */}
            <ScrollReveal className="flex flex-col h-full delay-100">
               <div className="flex items-center gap-3 mb-6">
                <Terminal className="text-nu-tech w-6 h-6" />
                <h3 className="text-2xl font-bold text-nu-text">{content.computing.daikoTitle}</h3>
              </div>
              
              <div className="flex-1 bg-black/80 rounded-xl border border-nu-border font-mono text-sm shadow-2xl overflow-hidden flex flex-col">
                {/* Terminal Header */}
                <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="ml-2 text-xs text-slate-400">admin@matsui-lab:~</span>
                </div>

                {/* Terminal Content */}
                <div className="p-4 flex-1 overflow-y-auto space-y-4">
                  <div className="text-slate-400">$ ./list-servers.sh</div>
                  
                  <div className="space-y-2">
                    {DAIKO_SERVERS.map((server) => (
                      <div 
                        key={server.id} 
                        onClick={() => setSelectedServer(selectedServer?.id === server.id ? null : server)}
                        className={`cursor-pointer p-2 rounded hover:bg-white/5 border border-transparent hover:border-slate-700 transition-all ${selectedServer?.id === server.id ? 'bg-white/10 border-nu-tech/50' : ''}`}
                      >
                         <div className="flex justify-between items-center text-nu-tech">
                           <span>[{server.id.toUpperCase()}]</span>
                           <span className={`text-[10px] px-1.5 py-0.5 rounded ${server.ip === '-' ? 'bg-slate-700 text-slate-300' : 'bg-green-900/30 text-green-400'}`}>
                             {server.ip === '-' ? 'OFFLINE' : 'ONLINE'}
                           </span>
                         </div>
                         <div className="text-white font-bold">{server.name}</div>
                         <div className="text-xs text-slate-500">{server.role}</div>

                         {/* Expandable Details */}
                         {selectedServer?.id === server.id && (
                           <div className="mt-3 pl-2 border-l-2 border-slate-600 text-xs text-slate-300 space-y-1 animate-fade-in-up">
                              <div><span className="text-purple-400">OS:</span> {server.os}</div>
                              <div><span className="text-blue-400">CPU:</span> {server.specs.cpu}</div>
                              <div><span className="text-green-400">RAM:</span> {server.specs.memory}</div>
                              <div><span className="text-yellow-400">DISK:</span> {server.specs.storage}</div>
                              {server.specs.gpu && <div><span className="text-red-400">GPU:</span> {server.specs.gpu}</div>}
                           </div>
                         )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4 animate-pulse">
                    <span className="text-green-500">➜</span>
                    <span className="text-blue-400">~</span>
                    <span className="w-2 h-4 bg-slate-400"></span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* DIGITAL HEALTH DEVICES SUBSECTION */}
          <ScrollReveal className="border-t border-nu-border pt-16">
             <div className="flex items-center gap-3 mb-8">
               <Glasses className="text-nu-tech w-8 h-8" />
               <h3 className="text-2xl md:text-3xl font-bold text-nu-text">{content.computing.deviceTitle}</h3>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.devices.list.map((device) => (
                  <div key={device.id} className="bg-nu-dark border border-nu-border rounded-xl p-6 hover:border-nu-tech/50 transition-all group relative overflow-hidden">
                    {/* Tech Decoration */}
                    <div className="absolute top-0 right-0 p-2">
                      <div className="w-2 h-2 bg-nu-tech rounded-full animate-pulse"></div>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-nu-tech/10 text-nu-tech border border-nu-tech/20">
                        {device.id === 'arglasses' && <Glasses className="w-6 h-6" />}
                        {device.id === 'gloves' && <Hand className="w-6 h-6" />}
                        {device.id === 'kinect' && <Camera className="w-6 h-6" />}
                        {device.id === 'mocap' && <Activity className="w-6 h-6" />}
                        {device.id === 'biosignal' && <HeartPulse className="w-6 h-6" />}
                      </div>
                      <div>
                        <h4 className="font-bold text-nu-text leading-tight">{device.name}</h4>
                        <span className="text-xs text-nu-textMuted block">{device.productName}</span>
                      </div>
                    </div>

                    <p className="text-sm text-nu-textMuted mb-4 line-clamp-3">
                      {device.description}
                    </p>
                    
                    {/* Location & Notes */}
                    <div className="space-y-2 text-xs font-mono text-nu-textMuted border-t border-nu-border pt-4">
                       <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3" />
                          <span>{device.location}</span>
                       </div>
                       {device.notes && device.notes.map((note, idx) => (
                         <div key={idx} className="flex items-center gap-2 text-orange-400/80">
                            <span className="w-1 h-1 bg-orange-400 rounded-full"></span>
                            <span>{note}</span>
                         </div>
                       ))}
                    </div>
                    
                    {/* Special Section for Biosignal Sensors */}
                    {device.sensors && (
                      <div className="mt-4 pt-4 border-t border-nu-border">
                        <span className="text-xs font-bold text-nu-tech block mb-2">SENSORS_DETECTED:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {device.sensors.map((sensor, idx) => (
                            <span key={idx} className="px-1.5 py-0.5 bg-nu-surface text-[10px] text-nu-textMuted rounded border border-nu-border">
                              {sensor}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
             </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DATA SCIENCE ENVIRONMENT SECTION */}
      <section className="py-24 bg-nu-dark relative transition-colors duration-700 overflow-hidden">
         <ElegantBackground type="streams" />
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-nu-text mb-4">{content.dataScience.title}</h2>
              <p className="text-nu-textMuted text-lg max-w-3xl mx-auto">{content.dataScience.subtitle}</p>
              <p className="text-sm text-nu-textMuted mt-4 max-w-2xl mx-auto">{content.dataScience.description}</p>
           </ScrollReveal>

           {/* Workflow Grid */}
           <div className="grid lg:grid-cols-3 gap-8 items-stretch relative">
             
             {/* 1. Develop (Workbench) */}
             <ScrollReveal className="bg-nu-surface/50 border border-nu-border p-8 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition-all group flex flex-col h-full z-10 relative">
                <div className="w-16 h-16 bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30 group-hover:scale-110 transition-transform">
                   <Code2 className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-nu-text mb-2">{content.dataScience.workbench.title}</h3>
                <p className="text-nu-textMuted mb-6 text-sm flex-grow">{content.dataScience.workbench.desc}</p>
                <ul className="space-y-2">
                   {content.dataScience.workbench.features.map((feat, i) => (
                     <li key={i} className="flex items-center gap-2 text-xs text-nu-textMuted">
                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                        {feat}
                     </li>
                   ))}
                </ul>
                
                {/* Connector Arrow (Desktop) */}
                <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-20">
                   <ChevronRight className="w-8 h-8 text-nu-textMuted animate-pulse" />
                </div>
             </ScrollReveal>

             {/* 2. Scale (Pipelines) */}
             <ScrollReveal className="bg-nu-surface/50 border border-nu-border p-8 rounded-2xl backdrop-blur-sm hover:border-purple-500/50 transition-all group flex flex-col h-full z-10 delay-100 relative">
                <div className="w-16 h-16 bg-purple-900/30 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/30 group-hover:scale-110 transition-transform">
                   <Workflow className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-nu-text mb-2">{content.dataScience.pipelines.title}</h3>
                <p className="text-nu-textMuted mb-6 text-sm flex-grow">{content.dataScience.pipelines.desc}</p>
                <ul className="space-y-2">
                   {content.dataScience.pipelines.features.map((feat, i) => (
                     <li key={i} className="flex items-center gap-2 text-xs text-nu-textMuted">
                        <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                        {feat}
                     </li>
                   ))}
                </ul>

                {/* Connector Arrow (Desktop) */}
                <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 z-20">
                   <ChevronRight className="w-8 h-8 text-nu-textMuted animate-pulse" />
                </div>
             </ScrollReveal>

             {/* 3. Deploy (Connect) */}
             <ScrollReveal className="bg-nu-surface/50 border border-nu-border p-8 rounded-2xl backdrop-blur-sm hover:border-orange-500/50 transition-all group flex flex-col h-full z-10 delay-200">
                <div className="w-16 h-16 bg-orange-900/30 rounded-2xl flex items-center justify-center mb-6 border border-orange-500/30 group-hover:scale-110 transition-transform">
                   <Share2 className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-nu-text mb-2">{content.dataScience.connect.title}</h3>
                <p className="text-nu-textMuted mb-6 text-sm flex-grow">{content.dataScience.connect.desc}</p>
                <ul className="space-y-2">
                   {content.dataScience.connect.features.map((feat, i) => (
                     <li key={i} className="flex items-center gap-2 text-xs text-nu-textMuted">
                        <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                        {feat}
                     </li>
                   ))}
                </ul>
             </ScrollReveal>

           </div>

           {/* Frameworks Bar */}
           <ScrollReveal className="mt-16 pt-8 border-t border-nu-border flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {['R', 'Python', 'Nextflow', 'nf-core', 'Quarto', 'Shiny', 'Jupyter'].map((tool, i) => (
                 <span key={i} className="text-xl font-bold text-nu-textMuted hover:text-nu-text transition-colors cursor-default">{tool}</span>
              ))}
           </ScrollReveal>
         </div>
      </section>

      {/* Publications: Timeline Style */}
      <section id={SectionId.PUBLICATIONS} className="py-24 bg-nu-surface border-t border-nu-border transition-colors duration-700 relative overflow-hidden">
         <ElegantBackground type="timeline" />
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-nu-text mb-12 flex items-center gap-4">
              <span className="w-2 h-8 bg-gradient-to-b from-nu-accent to-nu-tech rounded-full"></span>
              {content.publications.title}
            </h2>
            
            <div className="relative border-l border-nu-border ml-4 space-y-12">
               {groupedPublications.map(({ year, pubs }) => (
                 <div key={year} className="relative pl-8 md:pl-12">
                   {/* Timeline Dot */}
                   <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-600 ring-4 ring-nu-surface"></div>
                   
                   <h3 className="text-4xl font-bold text-slate-500/20 absolute -top-4 -left-4 -z-10 select-none opacity-50">{year}</h3>
                   <div className="text-xl font-bold text-nu-accent mb-6 font-mono">{year}</div>
                   
                   <div className="grid gap-4">
                     {pubs.map((pub) => (
                       <div key={pub.id} className="group flex flex-col md:flex-row gap-4 p-4 rounded-lg hover:bg-nu-dark transition-colors border border-transparent hover:border-nu-border bg-nu-dark/30 backdrop-blur-sm">
                          <div className="flex-shrink-0 pt-1">
                             {pub.tag === 'Journal' && <FileText className="w-5 h-5 text-emerald-500" />}
                             {pub.tag === 'Preprint' && <Layers className="w-5 h-5 text-blue-500" />}
                             {pub.tag === 'Conference' && <Monitor className="w-5 h-5 text-amber-500" />}
                             {pub.tag === 'Book' && <BookOpen className="w-5 h-5 text-purple-500" />}
                          </div>
                          <div className="flex-grow">
                             <h3 className="text-base font-semibold text-nu-text mb-1 group-hover:text-nu-primary transition-colors leading-snug">
                               {pub.title}
                             </h3>
                             <p className="text-nu-textMuted text-sm mb-2">{pub.authors}</p>
                             <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-nu-textMuted">
                                <span className="text-nu-tech">{pub.journal}</span>
                                {pub.citation && <span className="bg-nu-dark px-1 rounded">{pub.citation}</span>}
                             </div>
                          </div>
                          <div className="hidden md:flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                             <ExternalLink className="w-4 h-4 text-nu-textMuted hover:text-nu-text cursor-pointer" />
                          </div>
                       </div>
                     ))}
                   </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Members: Grid */}
      <section id={SectionId.MEMBERS} className="py-24 bg-nu-dark transition-colors duration-700 relative overflow-hidden">
        <ElegantBackground type="network" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-nu-text">{content.members.title}</h2>
            <p className="text-nu-textMuted mt-2">{content.members.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.members.list.map((member) => (
              <ScrollReveal key={member.id} className="group bg-nu-surface rounded-xl overflow-hidden border border-nu-border hover:border-nu-accent/50 transition-all duration-300">
                <div className="relative aspect-square overflow-hidden bg-nu-dark">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nu-dark via-transparent to-transparent opacity-80"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                     <p className="text-nu-accent font-mono text-xs mb-1">{member.role}</p>
                     <h3 className="font-bold text-lg text-white">{member.name}</h3>
                  </div>
                </div>
                <div className="p-4 border-t border-nu-border">
                  <p className="text-nu-textMuted text-xs leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
                    {member.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Access */}
      <footer className="bg-nu-surface py-12 border-t border-nu-border text-nu-textMuted text-sm font-mono transition-colors duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-8 mb-12">
             <div className="space-y-4">
                <h4 className="text-nu-text font-bold text-lg">{content.labName}</h4>
                <p>{content.affiliation}</p>
                <div className="flex gap-2 items-center">
                   <Mail className="w-4 h-4"/>
                   <a href="mailto:contact@matsui-lab.nagoya" className="hover:text-nu-text transition-colors">contact@matsui-lab.nagoya</a>
                </div>
             </div>
             <div className="space-y-4">
                {content.locations.map((loc, idx) => (
                  <div key={idx} className="flex gap-3">
                     <MapPin className="w-5 h-5 text-nu-tech flex-shrink-0 mt-1"/>
                     <div>
                        <strong className="text-nu-text block">{loc.name}</strong>
                        <span className="block">{loc.address}</span>
                        <span className="text-xs opacity-70 block">{loc.detail}</span>
                     </div>
                  </div>
                ))}
             </div>
           </div>

           <div className="border-t border-nu-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="flex gap-6 items-center">
               <span className="w-2 h-2 rounded-full bg-nu-accent animate-pulse"></span>
               <span>{content.footer.system}</span>
             </div>
             <div className="text-center md:text-right text-xs text-nu-textMuted">
               © {new Date().getFullYear()} {content.footer.rights}
             </div>
           </div>
        </div>
      </footer>
      
      {/* Contact floating area or linked in text (CTA at bottom) */}
      <section id={SectionId.CONTACT} className="py-24 bg-gradient-to-b from-nu-dark to-black transition-colors duration-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-nu-text mb-6">{content.contact.title}</h2>
          <p className="text-nu-textMuted mb-8">{content.contact.subtitle}</p>
          <a href="mailto:contact@matsui-lab.nagoya" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all backdrop-blur-md">
            <Mail className="w-5 h-5" />
            <span>contact@matsui-lab.nagoya</span>
          </a>
              </div>
            </section>

            {/* Hidden SEO Text Block for JP/EN Keywords */}
            <section style={{display: 'none'}} aria-hidden="true">
              <h2>松井佑介研究室 / Matsui Laboratory</h2>
              <p>
                名古屋大学 医学系研究科 総合保健学専攻 iGCORE（糖鎖生命コア研究所）に所属し、
                マルチオミクス解析、バイオインフォマティクス、情報科学、統計科学、AI、機械学習、
                ニューロインフォマティクス、リハビリテーション科学、計算健康科学の研究を推進しています。
          
                The Matsui Laboratory at Nagoya University's Graduate School of Medicine and iGCORE specializes in
                Computational Health Sciences, Multi-omics, Bioinformatics, Machine Learning, AI, Neuroinformatics,
                Digital Health, Rehabilitation Science, and Statistical Science.
              </p>
            </section>

            {/* --- THEME GENERATOR UI --- */}
      <div className="fixed bottom-6 left-6 z-50">
        {showThemeGen ? (
          <div className="bg-white rounded-2xl shadow-2xl p-4 w-72 mb-4 animate-fade-in-up border border-slate-200">
             <div className="flex justify-between items-center mb-3">
               <h3 className="font-bold text-slate-800 flex items-center gap-2">
                 <Wand2 className="w-4 h-4 text-purple-500" /> 
                 {lang === 'jp' ? 'AIテーマ生成' : 'AI Theme Gen'}
               </h3>
               <button onClick={() => setShowThemeGen(false)} className="text-slate-400 hover:text-slate-600">
                 <X className="w-4 h-4" />
               </button>
             </div>
             
             <p className="text-xs text-slate-500 mb-3">
               {lang === 'jp' ? '今日の気分は？(例: 桜, サイバーパンク)' : 'How are you feeling? (e.g., Sakura, Cyberpunk)'}
             </p>
             
             <div className="flex gap-2 mb-2">
               <input 
                 type="text" 
                 value={moodInput}
                 onChange={(e) => setMoodInput(e.target.value)}
                 className="flex-1 bg-slate-100 border-none rounded-lg px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-purple-500 outline-none"
                 placeholder="Mood..."
               />
               <button 
                 onClick={handleGenerateTheme}
                 disabled={isGeneratingTheme || !moodInput}
                 className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 disabled:opacity-50 transition-colors"
               >
                 {isGeneratingTheme ? <RefreshCw className="w-4 h-4 animate-spin"/> : <ArrowRight className="w-4 h-4"/>}
               </button>
             </div>
             
             {theme && (
               <div className="mt-3 pt-3 border-t border-slate-100">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-purple-600">{theme.name}</span>
                    <button onClick={resetTheme} className="text-xs text-slate-400 hover:text-red-500 underline">Reset</button>
                  </div>
               </div>
             )}
          </div>
        ) : (
          <button 
            onClick={() => setShowThemeGen(true)}
            className="group relative flex items-center justify-center w-12 h-12 bg-white text-purple-600 rounded-full shadow-lg hover:bg-purple-50 transition-all hover:scale-110 border border-slate-200"
            title="Customize Theme"
          >
             <Wand2 className="w-6 h-6" />
          </button>
        )}
      </div>

      <GeminiAssistant lang={lang} />
    </div>
  );
}

export default App;
