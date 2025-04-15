"use client";

import { ReactNode } from "react";
import * as motion from "motion/react-client"

interface SectionContainerProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  background?: "white" | "light" | "primary";
  withPattern?: boolean;
}

export default function SectionContainer({
  children,
  title,
  subtitle,
  className = "",
  background = "white",
  withPattern = false,
}: SectionContainerProps) {
  const bgClasses = {
    white: "bg-white",
    light: "bg-gray-50",
    primary: "bg-primary-50",
  };

  return (
    <section
      className={`relative py-16 sm:py-24 ${bgClasses[background]} ${className}`}
    >
      {/* Optional background pattern */}
      {withPattern && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="sectionPattern"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M0 20 A 20 20 0 0 1 20 0 A 20 20 0 0 1 40 20 A 20 20 0 0 1 20 40 A 20 20 0 0 1 0 20 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-primary-500"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#sectionPattern)" />
            </svg>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        {(title || subtitle) && (
          <div className="max-w-3xl mx-auto text-center mb-16">
            {title && (
              <motion.h2
                className="text-3xl tracking-tight text-gray-900 sm:text-4xl"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                className="mt-4 text-lg leading-8 text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}

        {/* Section content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
