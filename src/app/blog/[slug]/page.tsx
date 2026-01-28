import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeftIcon, CalendarIcon, UserIcon } from '@heroicons/react/24/outline';
import blog from '@/data/blog';
import { baseUrl } from '@/constants';
import HtmlContent from '@/components/ui/HtmlContent';

// Helper function to format date
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Helper function to get related posts
const getRelatedPosts = (currentSlug: string, category: string) => {
  return blog.posts
    .filter(post => post.slug !== currentSlug && post.category === category)
    .slice(0, 2);
};

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return blog.posts.map(post => ({
    slug: post.slug,
  }));
}

// Generate metadata for the blog post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blog.posts.find(p => p.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: 'Post Not Found | Phuket Flower Shop',
      description: 'The requested blog post could not be found.',
    };
  }

  const category = blog.categories.find(c => c.id === post.category);
  const categoryName = category ? category.name : '';

  // Construct absolute URL for the image
  const imageUrl = post.image ? new URL(post.image, baseUrl).toString() : undefined;

  return {
    title: `${post.title} | Flower & More`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : undefined,
      locale: 'th_TH',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: [categoryName],
      siteName: 'Phuket Flower Shop',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blog.posts.find(p => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const category = blog.categories.find(c => c.id === post.category);
  const relatedPosts = getRelatedPosts(post.slug, post.category);

  return (
    <div className="bg-white pb-10 sm:py-16">
      {/* Hero section with image */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] bg-primary-100 mb-10 overflow-hidden">
        {post.image ? (
          <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <span className="text-8xl font-display text-primary-600">{post.title.charAt(0)}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white">
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
          </div>
        </div>
      </div>

      {/* Article content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
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
        </div>

        {/* Article intro */}
        <div className="mb-10">
          <p className="text-xl leading-8 text-gray-700 font-medium">{post.excerpt}</p>
        </div>

        {/* Article content */}
        <div className="prose prose-lg prose-primary max-w-none">
          <HtmlContent content={post.content} />
        </div>

        {/* Author bio */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
              <span className="text-xl font-medium text-primary-700">{post.author.charAt(0)}</span>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">{post.author}</h3>
              <p className="text-sm text-gray-600">ผู้หลงใหลในการจัดแต่งดอกไม้</p>
            </div>
          </div>
        </div>

        {/* Related posts section */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
              บทความที่เกี่ยวข้อง
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {relatedPosts.map(relatedPost => (
                <article
                  key={relatedPost.slug}
                  className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl"
                >
                  {relatedPost.image && (
                    <Link href={`/blog/${relatedPost.slug}`} className="flex-shrink-0">
                      <Image
                        className="h-48 w-full object-cover"
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        width={400}
                        height={200}
                      />
                    </Link>
                  )}
                  <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-primary-600">
                        <Link
                          href={`/blog?category=${relatedPost.category}`}
                          className="hover:underline"
                        >
                          {blog.categories.find(c => c.id === relatedPost.category)?.name}
                        </Link>
                      </p>
                      <Link href={`/blog/${relatedPost.slug}`} className="mt-2 block">
                        <p className="text-xl font-semibold text-gray-900">{relatedPost.title}</p>
                        <p className="mt-3 text-base text-gray-500 line-clamp-3">
                          {relatedPost.excerpt}
                        </p>
                      </Link>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <span className="sr-only">{relatedPost.author}</span>
                        {/* Placeholder for author image if available */}
                      </div>
                      <div className="ml-0">
                        {' '}
                        {/* Removed ml-3 to align with designs that might not have author image */}
                        <p className="text-sm font-medium text-gray-900">{relatedPost.author}</p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <time dateTime={relatedPost.date}>{formatDate(relatedPost.date)}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
