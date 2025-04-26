'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function AbstractFlowerBg() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Animate the flower elements
    const flowers = svgRef.current.querySelectorAll('.abstract-flower');

    flowers.forEach((flower, index) => {
      // Random rotation and scale animation for each flower
      gsap.to(flower, {
        rotation: `random(${index % 2 === 0 ? '+' : '-'}45, ${index % 2 === 0 ? '+' : '-'}180)`,
        scale: gsap.utils.random(0.9, 1.1),
        duration: gsap.utils.random(3, 6),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        transformOrigin: 'center center',
        delay: index * 0.1,
      });
    });

    // Animate the connecting lines
    const lines = svgRef.current.querySelectorAll('.connector');

    lines.forEach(line => {
      gsap.to(line, {
        strokeDashoffset: 0,
        duration: 10,
        ease: 'none',
        repeat: -1,
      });
    });

    return () => {
      gsap.killTweensOf(flowers);
      gsap.killTweensOf(lines);
    };
  }, []);

  // Create a pattern of abstract flower elements
  const createPattern = () => {
    const patterns = [];
    const gridSize = 6; // Increased grid size for denser pattern
    const colors = ['#FF80AB', '#F8BBD0', '#FFECB3', '#E1BEE7', '#D7CCC8'];

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const x = i * 16 + (j % 2 === 0 ? 0 : 8); // Smaller spacing for denser pattern
        const y = j * 16;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 6 + 2; // Smaller flowers for denser pattern

        patterns.push(
          <g
            key={`flower-${i}-${j}`}
            className="abstract-flower"
            transform={`translate(${x}, ${y})`}
          >
            <circle cx="0" cy="0" r={size} fill={color} opacity="0.4" />
            {i < gridSize - 1 && (
              <line
                className="connector"
                x1="0"
                y1="0"
                x2="16"
                y2={j % 2 === 0 ? -8 : 8}
                stroke={color}
                strokeWidth="0.5"
                strokeDasharray="1 3"
                strokeDashoffset="40"
                opacity="0.3"
              />
            )}
            {j < gridSize - 1 && (
              <line
                className="connector"
                x1="0"
                y1="0"
                x2={i % 2 === 0 ? 8 : -8}
                y2="16"
                stroke={color}
                strokeWidth="0.5"
                strokeDasharray="1 3"
                strokeDashoffset="40"
                opacity="0.3"
              />
            )}
          </g>
        );
      }
    }

    return patterns;
  };

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="w-full h-full"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background:
          'linear-gradient(to bottom right, rgba(242,232,229,0.7), rgba(255,255,255,0.3))',
      }}
    >
      <pattern
        id="flowerPattern"
        x="0"
        y="0"
        width="100"
        height="100"
        patternUnits="userSpaceOnUse"
        patternTransform="scale(1.5)" // Scale up the pattern to fill more space
      >
        {createPattern()}
      </pattern>

      <rect x="0" y="0" width="100%" height="100%" fill="url(#flowerPattern)" />
    </svg>
  );
}
