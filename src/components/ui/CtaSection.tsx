"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface CtaSectionProps {
  title: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  bgImage?: string;
  icon?: ReactNode;
  withFlower?: boolean;
}

export default function CtaSection({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink = "/contact",
  secondaryButtonText,
  secondaryButtonLink,
  bgImage,
  icon,
  withFlower = false,
}: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary-600">
        {bgImage ? (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20"
              style={{ backgroundImage: `url(${bgImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-primary-600 opacity-80" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-primary-500" />
        )}
      </div>

      {/* Decorative elements */}
      {withFlower && (
        <>
          <div className="absolute top-0 left-0 w-40 h-40 md:w-60 md:h-60 opacity-10">
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-white"
            >
              <circle cx="50" cy="20" r="20" fill="currentColor" />
              <circle cx="20" cy="50" r="20" fill="currentColor" />
              <circle cx="50" cy="80" r="20" fill="currentColor" />
              <circle cx="80" cy="50" r="20" fill="currentColor" />
              <circle cx="35" cy="35" r="20" fill="currentColor" />
              <circle cx="65" cy="35" r="20" fill="currentColor" />
              <circle cx="35" cy="65" r="20" fill="currentColor" />
              <circle cx="65" cy="65" r="20" fill="currentColor" />
              <circle cx="50" cy="50" r="15" fill="currentColor" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-40 h-40 md:w-60 md:h-60 opacity-10 transform rotate-45">
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-white"
            >
              <circle cx="50" cy="20" r="20" fill="currentColor" />
              <circle cx="20" cy="50" r="20" fill="currentColor" />
              <circle cx="50" cy="80" r="20" fill="currentColor" />
              <circle cx="80" cy="50" r="20" fill="currentColor" />
              <circle cx="35" cy="35" r="20" fill="currentColor" />
              <circle cx="65" cy="35" r="20" fill="currentColor" />
              <circle cx="35" cy="65" r="20" fill="currentColor" />
              <circle cx="65" cy="65" r="20" fill="currentColor" />
              <circle cx="50" cy="50" r="15" fill="currentColor" />
            </svg>
          </div>
        </>
      )}

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          {icon && (
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 mb-6">
              <div className="h-8 w-8 text-white">{icon}</div>
            </div>
          )}

          <h2 className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>

          {subtitle && (
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-white/80">
              {subtitle}
            </p>
          )}

          <div className="mt-8 flex items-center justify-center gap-x-6">
            {primaryButtonText && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={primaryButtonLink}
                  className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-100 transition-colors duration-300"
                >
                  {primaryButtonText}
                </Link>
              </motion.div>
            )}
            {secondaryButtonText && secondaryButtonLink && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={secondaryButtonLink}
                  className="text-sm font-semibold leading-6 text-white flex items-center"
                >
                  {secondaryButtonText}
                  <span aria-hidden="true" className="ml-1">
                    →
                  </span>
                </Link>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
