import { Metadata } from "next";
import { notFound } from "next/navigation";
import blog from "@/data/blog";
import BlogPostClient from "./components/BlogPostClient";
import { baseUrl } from "@/constants";

// Helper function to get related posts
const getRelatedPosts = (currentSlug: string, category: string) => {
  return blog.posts
    .filter((post) => post.slug !== currentSlug && post.category === category)
    .slice(0, 2);
};

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return blog.posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for the blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blog.posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found | Phuket Flower Shop",
      description: "The requested blog post could not be found.",
    };
  }

  const category = blog.categories.find((c) => c.id === post.category);
  const categoryName = category ? category.name : "";

  // Construct absolute URL for the image
  const imageUrl = post.image ? new URL(post.image, baseUrl).toString() : undefined;

  return {
    title: `${post.title} | Flower & More`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: imageUrl ? [{
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: post.title,
      }] : undefined,
      locale: "th_TH",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: [categoryName],
      siteName: "Phuket Flower Shop",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blog.posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const category = blog.categories.find((c) => c.id === post.category);
  const relatedPosts = getRelatedPosts(post.slug, post.category);

  return (
    <BlogPostClient
      post={post}
      category={category}
      relatedPosts={relatedPosts}
    />
  );
}
