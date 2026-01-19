import React, { useRef, useEffect } from 'react';

interface EmailImageProps {
  className?: string;
  height?: number;
  color?: string;
}

export const EmailImage: React.FC<EmailImageProps> = ({
  className = '',
  height = 20,
  color = '#e5e7eb'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Draw email as image - no text in DOM, no mailto link
    const parts = [
      String.fromCharCode(109, 97, 116, 115, 117, 105, 46),  // matsui.
      String.fromCharCode(121, 117, 115, 117, 107, 101),     // yusuke
      String.fromCharCode(46, 100, 52, 64),                   // .d4@
      String.fromCharCode(102, 46, 109, 97, 105, 108, 46),   // f.mail.
      String.fromCharCode(110, 97, 103, 111, 121, 97),       // nagoya
      String.fromCharCode(45, 117, 46, 97, 99, 46, 106, 112) // -u.ac.jp
    ];
    const text = parts.join('');

    const fontSize = height * 0.8;
    ctx.font = `${fontSize}px system-ui, -apple-system, sans-serif`;

    const textWidth = ctx.measureText(text).width;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = textWidth * dpr + 10;
    canvas.height = height * dpr;
    canvas.style.width = `${textWidth + 10}px`;
    canvas.style.height = `${height}px`;

    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${fontSize}px system-ui, -apple-system, sans-serif`;
    ctx.fillStyle = color;
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 0, height / 2);
  }, [height, color]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', userSelect: 'none' }}
      aria-label="Email address image"
    />
  );
};

export default EmailImage;
