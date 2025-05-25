'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import * as motion from 'motion/react-client';

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  replace?: boolean;
  scroll?: boolean;
}

export default function TransitionLink({
  href,
  children,
  className = '',
  onClick,
  replace = false,
  scroll = true,
}: TransitionLinkProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (onClick) {
      onClick();
    }

    setIsClicked(true);

    // Add a small delay for visual feedback
    setTimeout(() => {
      startTransition(() => {
        if (replace) {
          router.replace(href, { scroll });
        } else {
          router.push(href, { scroll });
        }
      });
    }, 150);

    // Reset clicked state after animation
    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        href={href}
        onClick={handleClick}
        className={`${className} ${
          isPending || isClicked ? 'opacity-75 pointer-events-none' : ''
        } transition-opacity duration-200`}
      >
        <motion.div
          initial={false}
          animate={isClicked ? { opacity: 0.8, scale: 0.98 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
      </Link>
    </motion.div>
  );
}
