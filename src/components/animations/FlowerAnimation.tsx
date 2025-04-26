'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function FlowerAnimation() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Create a timeline for the flower animation
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    // Animate the petals
    tl.to(svgRef.current.querySelectorAll('.petal'), {
      scale: 1.05,
      duration: 1.5,
      stagger: 0.1,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: 1,
      transformOrigin: 'center center',
    });

    // Animate the leaves
    tl.to(
      svgRef.current.querySelectorAll('.leaf'),
      {
        rotation: 5,
        duration: 2,
        stagger: 0.2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: 1,
        transformOrigin: 'bottom center',
      },
      '<'
    );

    // Subtle continuous floating animation
    gsap.to(svgRef.current, {
      y: '-5px',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      className="w-20 h-20 absolute top-10 right-10 opacity-70 pointer-events-none"
    >
      {/* Flower stem */}
      <path d="M50 80V50" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />

      {/* Leaves */}
      <path
        className="leaf"
        d="M50 65C50 65 40 60 45 50"
        stroke="#4CAF50"
        strokeWidth="2"
        fill="#E8F5E9"
        strokeLinecap="round"
      />
      <path
        className="leaf"
        d="M50 70C50 70 60 65 55 55"
        stroke="#4CAF50"
        strokeWidth="2"
        fill="#E8F5E9"
        strokeLinecap="round"
      />

      {/* Flower petals */}
      <circle className="petal" cx="50" cy="40" r="8" fill="#FF80AB" opacity="0.9" />
      <circle className="petal" cx="42" cy="45" r="8" fill="#FF80AB" opacity="0.8" />
      <circle className="petal" cx="58" cy="45" r="8" fill="#FF80AB" opacity="0.8" />
      <circle className="petal" cx="45" cy="35" r="8" fill="#FF80AB" opacity="0.8" />
      <circle className="petal" cx="55" cy="35" r="8" fill="#FF80AB" opacity="0.8" />

      {/* Flower center */}
      <circle cx="50" cy="40" r="5" fill="#FFC107" />
    </svg>
  );
}
