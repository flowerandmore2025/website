'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CartAnimation() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    // Animate the cart
    tl.to(svgRef.current.querySelector('#cart-body'), {
      x: 5,
      duration: 0.3,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: 1,
    })
      .to(
        svgRef.current.querySelector('#cart-wheel1'),
        {
          rotate: 360,
          transformOrigin: 'center',
          duration: 0.6,
          ease: 'none',
        },
        '<'
      )
      .to(
        svgRef.current.querySelector('#cart-wheel2'),
        {
          rotate: 360,
          transformOrigin: 'center',
          duration: 0.6,
          ease: 'none',
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
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-full h-full"
    >
      <g id="cart-body">
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </g>
      <circle id="cart-wheel1" cx="9" cy="20" r="1" />
      <circle id="cart-wheel2" cx="20" cy="20" r="1" />
    </svg>
  );
}
