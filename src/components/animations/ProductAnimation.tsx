"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ProductAnimation() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    // Shine effect across the package
    tl.fromTo(
      svgRef.current.querySelector("#shine"),
      {
        x: -100,
        y: -100,
        opacity: 0,
      },
      {
        x: 100,
        y: 100,
        opacity: 0.7,
        duration: 1.5,
        ease: "power2.inOut",
      }
    ).to(svgRef.current.querySelector("#shine"), {
      opacity: 0,
      duration: 0.5,
    });

    // Subtle float effect for the gift
    gsap.to(svgRef.current.querySelector("#gift"), {
      y: -3,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => {
      tl.kill();
      if (svgRef.current) {
        gsap.killTweensOf(svgRef.current.querySelector("#gift"));
      }
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      className="w-full h-full"
    >
      <g id="gift">
        <rect x="25" y="40" width="50" height="40" rx="2" fill="#bfa094" />
        <rect x="45" y="40" width="10" height="40" fill="#a18072" />
        <rect x="25" y="25" width="50" height="15" rx="2" fill="#e0cec7" />
        <rect x="45" y="25" width="10" height="15" fill="#d2bab0" />
        <rect x="40" y="15" width="20" height="10" rx="5" fill="#a18072" />
      </g>
      <circle
        id="shine"
        cx="50"
        cy="50"
        r="10"
        fill="white"
        opacity="0"
        filter="blur(5px)"
      />
    </svg>
  );
}
