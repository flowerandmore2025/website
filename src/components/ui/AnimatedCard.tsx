"use client";

import { ReactNode } from "react";
import * as motion from "motion/react-client"
import Image from "next/image";
import Link from "next/link";

interface AnimatedCardProps {
  title: string;
  subtitle?: string;
  content?: string;
  imageSrc?: string;
  imageAlt?: string;
  icon?: ReactNode;
  href?: string;
  index?: number;
  className?: string;
}

export default function AnimatedCard({
  title,
  subtitle,
  content,
  imageSrc,
  imageAlt = "Card image",
  icon,
  href,
  index = 0,
  className = "",
}: AnimatedCardProps) {
  const cardContent = (
    <motion.div
      className={`group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -4 }}
    >
      {/* Image or Icon */}
      {imageSrc ? (
        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={400}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ) : icon ? (
        <div className="pt-6 pb-2 flex justify-center">
          <div className="h-12 w-12 text-primary-600 flex items-center justify-center">
            {icon}
          </div>
        </div>
      ) : null}

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
          {title}
        </h3>
        {subtitle && <p className="mt-1 text-sm text-gray-600">{subtitle}</p>}
        {content && <p className="mt-3 text-gray-700">{content}</p>}
      </div>

      {/* Hover effect for linked cards */}
      {href && (
        <div className="absolute inset-0 pointer-events-none bg-primary-600/0 group-hover:bg-primary-600/5 transition-colors duration-300" />
      )}
    </motion.div>
  );

  // Wrap with Link if href is provided
  if (href) {
    return (
      <Link href={href} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
