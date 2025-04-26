'use client';

import React from 'react';

interface HtmlContentProps {
  content: string;
  className?: string;
}

/**
 * A component that safely renders HTML content
 * Use this component when you need to render content that contains HTML markup
 */
export default function HtmlContent({ content, className = '' }: HtmlContentProps) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: content }} />;
}
