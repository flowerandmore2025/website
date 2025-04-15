"use client";

import { useState, useEffect } from "react";
import * as motion from "motion/react-client";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  align?: "left" | "center";
}

export default function PageHeader({
  title,
  subtitle,
  backgroundImage,
  align = "center",
}: PageHeaderProps) {
  const [currentBgImage, setCurrentBgImage] = useState<string | undefined>(backgroundImage);
  const [prevBgImage, setPrevBgImage] = useState<string | undefined>(undefined);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle background image transitions
  useEffect(() => {
    // Initial load - just set the image without transition
    if (!currentBgImage && backgroundImage) {
      setCurrentBgImage(backgroundImage);
      return;
    }

    if (backgroundImage !== currentBgImage) {
      // Keep the previous image for cross-fade
      setPrevBgImage(currentBgImage);

      // Update to new image immediately
      setCurrentBgImage(backgroundImage);

      // Start transition
      setIsTransitioning(true);

      // Reset transition state after animation completes
      const resetTimer = setTimeout(() => {
        setIsTransitioning(false);
        setPrevBgImage(undefined);
      }, 3100); // Match this with the CSS transition duration + small buffer

      return () => {
        clearTimeout(resetTimer);
      };
    }
  }, [backgroundImage, currentBgImage]);
  return (
    <div className="relative overflow-hidden bg-primary-100">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {currentBgImage ? (
          <>
            {/* Both images are always present, with the top one fading out */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Bottom layer: Current image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${currentBgImage})`,
                  zIndex: 0
                }}
              >
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
              </div>

              {/* Top layer: Previous image that fades out */}
              {prevBgImage && (
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${prevBgImage})`,
                    opacity: isTransitioning ? 0 : 1,
                    transition: 'opacity 3000ms cubic-bezier(0.22, 0.61, 0.36, 1)', // Very gentle easing
                    zIndex: 1
                  }}
                >
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Abstract pattern background when no image */}
            <div className="absolute inset-0 opacity-10">
              <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="smallGrid"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-primary-600"
                    />
                  </pattern>
                  <pattern
                    id="grid"
                    width="80"
                    height="80"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect width="80" height="80" fill="url(#smallGrid)" />
                    <circle
                      cx="40"
                      cy="40"
                      r="5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-primary-600"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div
        className={`relative py-20 sm:py-32 px-6 ${
          align === "center" ? "text-center" : "text-left"
        }`}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tight text-primary-400">
              {title}
            </h1>
            {subtitle && (
              <motion.p
                className="mt-4 max-w-3xl mx-auto text-lg text-primary-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Decorative curved bottom edge */}
      <div className="absolute bottom-[-1px] left-0 right-0">
        <svg
          viewBox="0 0 1440 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto text-white"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L48 8.53333C96 17.0667 192 34.1333 288 32C384 29.8667 480 8.53333 576 5.33333C672 2.13333 768 17.0667 864 29.8667C960 42.6667 1056 53.3333 1152 48C1248 42.6667 1344 21.3333 1392 10.6667L1440 0V64H1392C1344 64 1248 64 1152 64C1056 64 960 64 864 64C768 64 672 64 576 64C480 64 384 64 288 64C192 64 96 64 48 64H0V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
