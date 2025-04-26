'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HeroAnimation() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    // Animate the flower
    tl.to(svgRef.current.querySelectorAll('.petal'), {
      scale: 1.05,
      duration: 1.5,
      stagger: 0.1,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: 1,
      transformOrigin: 'center center',
    }).to(
      svgRef.current.querySelector('#stem'),
      {
        scaleY: 1.02,
        duration: 2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: 1,
        transformOrigin: 'bottom center',
      },
      '<'
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      fill="none"
      className="w-full h-full"
    >
      <g id="flower">
        <path id="stem" d="M100 180V120" stroke="#4CAF50" strokeWidth="4" strokeLinecap="round" />
        <circle className="petal" cx="100" cy="80" r="20" fill="#FF80AB" opacity="0.8" />
        <circle className="petal" cx="70" cy="100" r="20" fill="#FF80AB" opacity="0.8" />
        <circle className="petal" cx="130" cy="100" r="20" fill="#FF80AB" opacity="0.8" />
        <circle className="petal" cx="100" cy="120" r="20" fill="#FF80AB" opacity="0.8" />
        <circle className="petal" cx="80" cy="80" r="20" fill="#FF80AB" opacity="0.8" />
        <circle className="petal" cx="120" cy="80" r="20" fill="#FF80AB" opacity="0.8" />
        <circle className="petal" cx="120" cy="120" r="20" fill="#FF80AB" opacity="0.8" />
        <circle className="petal" cx="80" cy="120" r="20" fill="#FF80AB" opacity="0.8" />
        <circle cx="100" cy="100" r="15" fill="#FFEB3B" />
      </g>
    </svg>
  );
}
