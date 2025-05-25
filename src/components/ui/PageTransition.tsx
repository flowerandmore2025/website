'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import * as motion from 'motion/react-client';

export default function PageTransition() {
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!isInitialized) {
      setIsInitialized(true);
      return;
    }

    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname, isInitialized]);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm"
    >
      <div className="flex flex-col items-center">
        {/* Flower loading animation */}
        <motion.div
          className="relative w-16 h-16"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-primary-600"
          >
            <motion.circle
              cx="50"
              cy="20"
              r="8"
              fill="currentColor"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
            />
            <motion.circle
              cx="20"
              cy="50"
              r="8"
              fill="currentColor"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
            />
            <motion.circle
              cx="50"
              cy="80"
              r="8"
              fill="currentColor"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
            />
            <motion.circle
              cx="80"
              cy="50"
              r="8"
              fill="currentColor"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
            />
            <circle cx="50" cy="50" r="6" fill="currentColor" />
          </svg>
        </motion.div>

        {/* Loading text */}
        <motion.p
          className="mt-4 text-sm text-primary-600 font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          กำลังโหลด...
        </motion.p>
      </div>
    </motion.div>
  );
}
