"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ProductDetailAnimation() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Create a timeline for the animation
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });

    // Animate the petals
    tl.to(svgRef.current.querySelectorAll(".petal"), {
      scale: 1.1,
      duration: 1.5,
      stagger: 0.1,
      ease: "sine.inOut",
      yoyo: true,
      repeat: 1,
      transformOrigin: "center center",
    });

    // Animate the sparkles
    gsap.to(svgRef.current.querySelectorAll(".sparkle"), {
      scale: 0.5,
      opacity: 0.2,
      duration: 1.5,
      stagger: 0.3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      transformOrigin: "center center",
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
      className="w-full h-full absolute inset-0 pointer-events-none opacity-30"
      style={{ maxHeight: "300px" }}
    >
      {/* Sparkles */}
      <circle className="sparkle" cx="20" cy="20" r="2" fill="#FFC107" />
      <circle className="sparkle" cx="80" cy="30" r="2" fill="#FFC107" />
      <circle className="sparkle" cx="65" cy="15" r="2" fill="#FFC107" />
      <circle className="sparkle" cx="35" cy="85" r="2" fill="#FFC107" />
      <circle className="sparkle" cx="85" cy="75" r="2" fill="#FFC107" />
      
      {/* Flower petals */}
      <circle className="petal" cx="50" cy="50" r="8" fill="#FF80AB" opacity="0.2" />
      <circle className="petal" cx="42" cy="55" r="8" fill="#FF80AB" opacity="0.2" />
      <circle className="petal" cx="58" cy="55" r="8" fill="#FF80AB" opacity="0.2" />
      <circle className="petal" cx="45" cy="45" r="8" fill="#FF80AB" opacity="0.2" />
      <circle className="petal" cx="55" cy="45" r="8" fill="#FF80AB" opacity="0.2" />
    </svg>
  );
}
