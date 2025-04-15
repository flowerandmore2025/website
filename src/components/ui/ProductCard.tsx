"use client";

import { useEffect, useRef } from "react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { gsap } from "gsap";
import ImageHoverEffect from "@/components/animations/ImageHoverEffect";

interface EnhancedProductCardProps {
  product: any;
  index: number;
}

export default function ProductCard({ product, index }: EnhancedProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  // Handle shine effect on hover
  useEffect(() => {
    if (!cardRef.current || !shineRef.current) return;

    const card = cardRef.current;
    const shine = shineRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      const posX = (x / width) * 100;
      const posY = (y / height) * 100;
      
      gsap.to(shine, {
        opacity: 0.15,
        x: `${posX}%`,
        y: `${posY}%`,
        duration: 0.3,
        ease: "power2.out"
      });
    };
    
    const handleMouseEnter = () => {
      gsap.to(shine, { opacity: 0.15, duration: 0.3 });
    };
    
    const handleMouseLeave = () => {
      gsap.to(shine, { opacity: 0, duration: 0.3 });
    };
    
    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Link href={`/products/${product.id}`} className="block h-full">
      <motion.div
        ref={cardRef}
        className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.4 }}
        whileHover={{ y: -4 }}
      >
        {/* Shine effect overlay */}
        <div 
          ref={shineRef}
          className="absolute inset-0 pointer-events-none opacity-0 z-10"
          style={{
            background: "radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 50%)",
            width: "100px",
            height: "100px",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%"
          }}
        />
        
        {/* Popular badge */}
        {product.isPopular && (
          <div className="absolute top-3 right-3 z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
              className="bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded-full"
            >
              ยอดนิยม
            </motion.div>
          </div>
        )}

        {/* Image */}
        <div className="h-[400px] overflow-hidden">
          {product.images && product.images.length > 0 ? (
            <ImageHoverEffect
              src={product.images[0]}
              alt={product.name}
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="h-full w-full bg-primary-100 flex items-center justify-center">
              <span className="text-4xl text-primary-600 font-display">
                {product.name.charAt(0)}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
            {product.name}
          </h3>
          {/*<p className="mt-1 text-sm text-gray-600">*/}
          {/*  Crafted by {product.craftedBy}*/}
          {/*</p>*/}
          <p className="mt-2 font-medium text-primary-600">
            THB {product.price.toLocaleString()}
          </p>
        </div>
        
        {/* Hover effect overlay */}
        <div className="absolute inset-0 pointer-events-none bg-primary-600/0 group-hover:bg-primary-600/5 transition-colors duration-300" />
      </motion.div>
    </Link>
  );
}
