'use client';

import { ReactNode } from 'react';
import * as motion from 'motion/react-client';
import TransitionLink from '@/components/ui/TransitionLink';

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
  primaryButtonLink = '/contact',
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
              className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30"
              style={{ backgroundImage: `url(${bgImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-700/90 to-primary-600/90" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-primary-500" />
        )}
      </div>

      {/* Decorative elements */}
      {withFlower && (
        <>
          <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 lg:w-60 lg:h-60 opacity-10">
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-white"
            >
              <circle cx="50" cy="20" r="18" fill="currentColor" />
              <circle cx="20" cy="50" r="18" fill="currentColor" />
              <circle cx="50" cy="80" r="18" fill="currentColor" />
              <circle cx="80" cy="50" r="18" fill="currentColor" />
              <circle cx="35" cy="35" r="18" fill="currentColor" />
              <circle cx="65" cy="35" r="18" fill="currentColor" />
              <circle cx="35" cy="65" r="18" fill="currentColor" />
              <circle cx="65" cy="65" r="18" fill="currentColor" />
              <circle cx="50" cy="50" r="12" fill="currentColor" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 lg:w-60 lg:h-60 opacity-10 transform rotate-45">
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-white"
            >
              <circle cx="50" cy="20" r="18" fill="currentColor" />
              <circle cx="20" cy="50" r="18" fill="currentColor" />
              <circle cx="50" cy="80" r="18" fill="currentColor" />
              <circle cx="80" cy="50" r="18" fill="currentColor" />
              <circle cx="35" cy="35" r="18" fill="currentColor" />
              <circle cx="65" cy="35" r="18" fill="currentColor" />
              <circle cx="35" cy="65" r="18" fill="currentColor" />
              <circle cx="65" cy="65" r="18" fill="currentColor" />
              <circle cx="50" cy="50" r="12" fill="currentColor" />
            </svg>
          </div>
        </>
      )}

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          {icon && (
            <motion.div
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="h-10 w-10 text-white">{icon}</div>
            </motion.div>
          )}

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {title}
          </motion.h2>

          {subtitle && (
            <motion.p
              className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl leading-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {subtitle}
            </motion.p>
          )}

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {primaryButtonText && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <TransitionLink
                  href={primaryButtonLink}
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary-600 shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
                >
                  {primaryButtonText}
                </TransitionLink>
              </motion.div>
            )}
            {secondaryButtonText && secondaryButtonLink && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <TransitionLink
                  href={secondaryButtonLink}
                  className="inline-flex w-full sm:w-auto items-center justify-center text-base font-semibold leading-6 text-white hover:text-white/80 transition-colors duration-300 group"
                >
                  {secondaryButtonText}
                  <span
                    aria-hidden="true"
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </TransitionLink>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
