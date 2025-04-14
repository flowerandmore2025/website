"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function PhoneAnimation() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });

    // Animate the phone ringing
    tl.to(svgRef.current.querySelector("#phone"), {
      rotation: -15,
      transformOrigin: "center",
      duration: 0.1,
      ease: "power1.inOut",
    })
      .to(svgRef.current.querySelector("#phone"), {
        rotation: 15,
        transformOrigin: "center",
        duration: 0.2,
        ease: "power1.inOut",
        repeat: 3,
        yoyo: true,
      })
      .to(svgRef.current.querySelector("#phone"), {
        rotation: 0,
        transformOrigin: "center",
        duration: 0.1,
        ease: "power1.inOut",
      });

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
      <g id="phone">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </g>
    </svg>
  );
}
