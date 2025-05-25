'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

interface ImageHoverEffectProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  isDesktop?: boolean;
}

export default function ImageHoverEffect({
  src,
  alt,
  width,
  height,
  className = '',
  isDesktop = false,
}: ImageHoverEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !isDesktop ||
      !containerRef.current ||
      !imageRef.current ||
      !overlayRef.current ||
      !shineRef.current
    )
      return;

    const container = containerRef.current;
    const image = imageRef.current;
    const overlay = overlayRef.current;
    const shine = shineRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      const posX = (x / width) * 100;
      const posY = (y / height) * 100;

      // Move the shine effect
      gsap.to(shine, {
        opacity: 0.15,
        x: `${posX}%`,
        y: `${posY}%`,
        duration: 0.3,
        ease: 'power2.out',
      });

      // Subtle tilt effect
      gsap.to(image, {
        transform: `scale(1.05) translate(${(posX - 50) / 20}px, ${(posY - 50) / 20}px)`,
        duration: 0.5,
        ease: 'power1.out',
      });
    };

    const handleMouseEnter = () => {
      gsap.to(shine, { opacity: 0.15, duration: 0.3 });
      gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
      gsap.to(image, { scale: 1.05, duration: 0.5 });
    };

    const handleMouseLeave = () => {
      gsap.to(shine, { opacity: 0, duration: 0.3 });
      gsap.to(overlay, { opacity: 0, duration: 0.3 });
      gsap.to(image, { scale: 1, x: 0, y: 0, duration: 0.5 });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isDesktop]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover transition-transform duration-500"
      />

      {/* Gradient overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300"
      />

      {/* Shine effect */}
      <div
        ref={shineRef}
        className="absolute inset-0 pointer-events-none opacity-0 z-10"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 50%)',
          width: '100px',
          height: '100px',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
        }}
      />
    </div>
  );
}
