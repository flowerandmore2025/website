"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import blog from "@/data/blog";
import {
  ChevronLeftIcon,
  CalendarIcon,
  UserIcon,
  BookmarkIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import * as motion from "motion/react-client";

// Helper function to get related posts
const getRelatedPosts = (currentId: string, category: string) => {
  return blog.posts
    .filter((post) => post.id !== currentId && post.category === category)
    .slice(0, 2);
};

// Helper function to format date
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const [isSaved, setIsSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  const post = blog.posts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  const category = blog.categories.find((c) => c.id === post.category);
  const relatedPosts = getRelatedPosts(post.id, post.category);

  // Assume content is a long string, we'll split it into paragraphs for better formatting
  const contentParagraphs = post.content
    .split("...")
    .map((p) => p.trim())
    .filter((p) => p.length > 0);

  // Handle share functionality
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
        .catch((error) => console.log("Error sharing", error));
    } else {
      // Fallback for browsers that don't support navigator.share
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div
      className="bg-white py-10 sm:py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero section with image */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] bg-primary-100 mb-10 overflow-hidden">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <motion.span
              className="text-8xl font-display text-primary-600"
              initial={{ scale: 0.9, opacity: 0.5 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              {post.title.charAt(0)}
            </motion.span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-medium text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ChevronLeftIcon className="w-4 h-4 mr-1" />
              กลับไปที่บทความทั้งหมด
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white">
              {post.title}
            </h1>
            {post.titleInThai && (
              <p className="mt-2 text-xl text-white/90 font-light">
                {post.titleInThai}
              </p>
            )}
          </div>
        </motion.div>
      </div>

      {/* Article content */}
      <motion.div
        className="max-w-4xl mx-auto px-6 lg:px-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {/* Meta information */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-8 text-sm text-gray-600 border-b border-gray-200 pb-6">
          <div className="flex items-center">
            <CalendarIcon className="w-4 h-4 mr-1.5" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <div className="flex items-center">
            <UserIcon className="w-4 h-4 mr-1.5" />
            <span>{post.author}</span>
          </div>
          {category && (
            <Link
              href={`/blog?category=${category.id}`}
              className="flex items-center bg-primary-50 text-primary-700 px-3 py-1 rounded-full hover:bg-primary-100 transition-colors"
            >
              {category.name}
            </Link>
          )}
          <div className="ml-auto flex items-center gap-3">
            <button
              onClick={() => setIsSaved(!isSaved)}
              className={`flex items-center transition-colors ${
                isSaved
                  ? "text-primary-600"
                  : "text-gray-600 hover:text-primary-600"
              }`}
              aria-label={isSaved ? "Unsave article" : "Save article"}
            >
              <BookmarkIcon
                className={`w-5 h-5 ${isSaved ? "fill-current" : ""}`}
              />
            </button>
            <div className="relative">
              <button
                onClick={handleShare}
                className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="Share article"
              >
                <ShareIcon className="w-5 h-5" />
              </button>
              {copied && (
                <motion.div
                  className="absolute -bottom-10 -right-3 bg-gray-800 text-white text-xs px-2 py-1 rounded"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  Link copied!
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Article intro */}
        <div className="mb-10">
          <p className="text-xl leading-8 text-gray-700 font-medium">
            {post.excerpt}
          </p>
        </div>

        {/* Article content */}
        <div className="prose prose-lg prose-primary max-w-none">
          {contentParagraphs.length > 0 ? (
            contentParagraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                {paragraph}...
              </motion.p>
            ))
          ) : (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {post.content}
            </motion.p>
          )}
        </div>

        {/* Author bio */}
        <motion.div
          className="mt-16 border-t border-gray-200 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex items-center">
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
              <span className="text-xl font-medium text-primary-700">
                {post.author.charAt(0)}
              </span>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">
                {post.author}
              </h3>
              <p className="text-sm text-gray-600">Flower Arrangement Expert</p>
            </div>
          </div>
        </motion.div>

        {/* Related posts section */}
        {relatedPosts.length > 0 && (
          <motion.div
            className="mt-16 border-t border-gray-200 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
              บทความที่เกี่ยวข้อง
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={`/blog/${relatedPost.id}`}
                    className="group block"
                  >
                    <div className="aspect-[16/9] w-full rounded-lg bg-primary-100 overflow-hidden mb-3">
                      {relatedPost.image ? (
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          width={400}
                          height={225}
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                          <span className="text-3xl font-display text-primary-600">
                            {relatedPost.title.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <h3 className="font-medium text-lg text-gray-900 group-hover:text-primary-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {formatDate(relatedPost.date)}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Newsletter sign-up */}
        {/* <motion.div
          className="mt-16 bg-primary-50 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
            อัพเดตข่าวสำหรับคุณ
          </h3>
          <p className="text-gray-600 mb-6">
            สมัครรับข่าวสำหรับคุณ
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="กรอกอีเมลของคุณ"
              className="flex-1 min-w-0 px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              required
            />
            <motion.button
              type="submit"
              className="bg-primary-600 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-primary-700 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              สมัครรับข่าว
            </motion.button>
          </form>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
}
