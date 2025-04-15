"use client";

import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import React from "react";

// Note: If MotionPathPlugin is not available, we'll use a simpler animation fallback

interface ProductHoverFlowersProps {
    containerRef: React.RefObject<HTMLElement>;
    count?: number;
    colors?: string[];
}

export default function ProductHoverFlowers({
                                                containerRef,
                                                count = 5,
                                                colors = ["#FF9AA2", "#FFB7B2", "#FFDAC1", "#E2F0CB", "#B5EAD7"],
                                            }: ProductHoverFlowersProps) {
    const flowersRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !flowersRef.current) return;

        const container = containerRef.current;
        const flowersContainer = flowersRef.current;

        // Create flower elements
        const flowers: HTMLElement[] = [];

        for (let i = 0; i < count; i++) {
            const flower = document.createElement("div");
            flower.className = "absolute pointer-events-none opacity-0";
            flower.style.zIndex = "20";

            // Create flower SVG
            const color = colors[Math.floor(Math.random() * colors.length)];
            const flowerSize = 12 + Math.floor(Math.random() * 12); // Random size between 12-24px

            // Choose between different flower designs
            const flowerType = Math.floor(Math.random() * 3);
            let svgContent = '';

            if (flowerType === 0) {
                // Simple flower design
                svgContent = `
          <svg width="${flowerSize}" height="${flowerSize}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C12 5.5 14.5 8 18 8C14.5 8 12 10.5 12 14C12 10.5 9.5 8 6 8C9.5 8 12 5.5 12 2Z" fill="${color}" />
            <circle cx="12" cy="14" r="2" fill="#FFCE00" />
          </svg>
        `;
            } else if (flowerType === 1) {
                // Rounded petals flower
                svgContent = `
          <svg width="${flowerSize}" height="${flowerSize}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="7" r="5" fill="${color}" />
            <circle cx="7" cy="12" r="5" fill="${color}" />
            <circle cx="17" cy="12" r="5" fill="${color}" />
            <circle cx="12" cy="17" r="5" fill="${color}" />
            <circle cx="12" cy="12" r="3" fill="#FFCE00" />
          </svg>
        `;
            } else {
                // Pointed petals flower
                svgContent = `
          <svg width="${flowerSize}" height="${flowerSize}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L14 10H10L12 2Z" fill="${color}" />
            <path d="M2 12L10 10V14L2 12Z" fill="${color}" />
            <path d="M22 12L14 14V10L22 12Z" fill="${color}" />
            <path d="M12 22L10 14H14L12 22Z" fill="${color}" />
            <circle cx="12" cy="12" r="2" fill="#FFCE00" />
          </svg>
        `;
            }

            flower.innerHTML = svgContent;

            // Position flowers more strategically around the container
            // Divide the container into sections to ensure better distribution
            let x = 0
            let y = 0;

            // Create a grid-like distribution with some randomness
            const section = i % 4; // 4 sections: top-left, top-right, bottom-left, bottom-right

            switch (section) {
                case 0: // top-left
                    x = 10 + Math.random() * 30;
                    y = 10 + Math.random() * 30;
                    break;
                case 1: // top-right
                    x = 60 + Math.random() * 30;
                    y = 10 + Math.random() * 30;
                    break;
                case 2: // bottom-left
                    x = 10 + Math.random() * 30;
                    y = 60 + Math.random() * 30;
                    break;
                case 3: // bottom-right
                    x = 60 + Math.random() * 30;
                    y = 60 + Math.random() * 30;
                    break;
            }

            // Add some randomness to avoid perfect grid
            x += (Math.random() - 0.5) * 10;
            y += (Math.random() - 0.5) * 10;

            flower.style.left = `${x}%`;
            flower.style.top = `${y}%`;

            flowersContainer.appendChild(flower);
            flowers.push(flower);

            // Initial state
            gsap.set(flower, {
                opacity: 0,
                scale: 0.5,
                rotation: Math.random() * 360
            });
        }

        // Animation functions
        const animateFlowersIn = () => {
            flowers.forEach((flower, index) => {
                // Initial appearance animation
                gsap.to(flower, {
                    opacity: 1,
                    scale: 0.8 + Math.random() * 0.4,
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: "back.out"
                });

                // Create a random path for each flower
                const randomPath = () => {
                    // Create a more complex path with multiple points
                    const startX = parseFloat(flower.style.left);
                    const startY = parseFloat(flower.style.top);

                    // Create a curved path upward and outward
                    const endX = startX + (Math.random() - 0.5) * 30;
                    const endY = startY - 20 - Math.random() * 30;

                    // Control points for the curve
                    const ctrl1X = startX + (Math.random() - 0.5) * 40;
                    const ctrl1Y = startY - 10 - Math.random() * 15;
                    const ctrl2X = endX + (Math.random() - 0.5) * 40;
                    const ctrl2Y = endY + 10 + Math.random() * 15;

                    return [
                        {x: startX, y: startY},
                        {x: ctrl1X, y: ctrl1Y},
                        {x: ctrl2X, y: ctrl2Y},
                        {x: endX, y: endY}
                    ];
                };

                const path = randomPath();

                // Create a timeline for this flower
                const tl = gsap.timeline({delay: index * 0.05});

                // Try to use motionPath if available, otherwise use a simpler animation
                try {
                    // Add floating animation along the path
                    tl.to(flower, {
                        motionPath: {
                            path: path,
                            curviness: 2,
                            autoRotate: true,
                            alignOrigin: [0.5, 0.5]
                        },
                        rotation: 180 + Math.random() * 360,
                        duration: 1.2 + Math.random() * 0.8,
                        ease: "power1.inOut"
                    });
                } catch (error) {
                    // Fallback animation if MotionPath plugin is not available
                    tl.to(flower, {
                        x: path[3].x - path[0].x,
                        y: path[3].y - path[0].y,
                        rotation: 180 + Math.random() * 360,
                        duration: 1.2 + Math.random() * 0.8,
                        ease: "power1.inOut"
                    });
                }

                // Add a slight pulsing effect
                gsap.to(flower, {
                    scale: "-=0.2",
                    duration: 0.8,
                    repeat: 1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: index * 0.05 + 0.2
                });
            });
        };

        const animateFlowersOut = () => {
            flowers.forEach((flower, index) => {
                // Clear any existing animations
                gsap.killTweensOf(flower);

                // Fade out animation
                gsap.to(flower, {
                    opacity: 0,
                    scale: 0.5,
                    y: "-=10",
                    duration: 0.3,
                    delay: index * 0.03,
                    ease: "power2.in"
                });
            });
        };

        // Event listeners
        const handleMouseEnter = () => {
            animateFlowersIn();
        };

        const handleMouseLeave = () => {
            animateFlowersOut();
        };

        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            container.removeEventListener("mouseenter", handleMouseEnter);
            container.removeEventListener("mouseleave", handleMouseLeave);

            // Clean up flowers
            flowers.forEach(flower => {
                if (flowersContainer.contains(flower)) {
                    flowersContainer.removeChild(flower);
                }
            });
        };
    }, [containerRef, count, colors]);

    return (
        <div
            ref={flowersRef}
            className="absolute inset-0 overflow-hidden pointer-events-none z-20"
        />
    );
}
