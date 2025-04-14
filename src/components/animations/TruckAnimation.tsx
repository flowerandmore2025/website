"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function TruckAnimation() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    // Animate the truck
    tl.to(svgRef.current.querySelector("#truck-body"), {
      x: 5,
      duration: 0.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: 1,
    })
      .to(
        svgRef.current.querySelector("#truck-wheel1"),
        {
          rotate: 360,
          transformOrigin: "center",
          duration: 0.8,
          ease: "none",
        },
        "<"
      )
      .to(
        svgRef.current.querySelector("#truck-wheel2"),
        {
          rotate: 360,
          transformOrigin: "center",
          duration: 0.8,
          ease: "none",
        },
        "<"
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
      <g id="truck-body">
        <rect x="1" y="3" width="15" height="10" />
        <path d="M16 8h6l-1 5H16z" />
        <path d="M2 13h15" />
      </g>
      <circle id="truck-wheel1" cx="5" cy="17" r="2" />
      <circle id="truck-wheel2" cx="14" cy="17" r="2" />
    </svg>
  );
}
