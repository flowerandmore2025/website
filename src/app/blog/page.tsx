import Link from "next/link";
import { Metadata } from "next";
import blog from "@/data/blog";
import { baseUrl } from "@/constants";

// Generate metadata for the blog page
export const metadata: Metadata = {
  title: "Blog | Phuket Flower Shop",
  description: "Read our latest articles about flowers, arrangements, and more.",
  openGraph: {
    title: "Blog | Phuket Flower Shop",
    description: "Read our latest articles about flowers, arrangements, and more.",
    url: new URL("/blog", baseUrl).toString(),
    siteName: "Phuket Flower Shop",
    locale: "th_TH",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            บทความ
          </h2>
          <div className="w-24 h-1 bg-primary-300 mx-auto mb-6"></div>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            เรียนรู้เกี่ยวกับดอกไม้, การจัดดอกไม้, และข่าวล่าสุดของเรา
          </p>
        </div>
        {/* Featured Post - Flower Post */}
        {blog.posts.filter(post => post.title.includes('🌷')).length > 0 && (
          <div className="mx-auto mt-16 max-w-7xl">
            {blog.posts.filter(post => post.title.includes('🌷')).map((post) => (
              <article
                key={post.slug}
                className="flex flex-col md:flex-row items-start justify-between group hover:shadow-md rounded-2xl p-6 transition-shadow duration-300 bg-primary-50 border border-primary-100"
              >
                <div className="relative w-full md:w-1/3 mb-8 md:mb-0 md:mr-8">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="aspect-[16/9] w-full rounded-2xl bg-white sm:aspect-[2/1] lg:aspect-[3/2] overflow-hidden group-hover:bg-primary-100 transition-colors duration-300">
                      <div className="h-full w-full flex items-center justify-center">
                        <span className="text-6xl font-display text-primary-600 group-hover:scale-110 transition-transform duration-300">
                          🌷
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex items-center gap-x-4 text-xs mb-4">
                    <time dateTime={post.date} className="text-gray-500">
                      {new Date(post.date).toLocaleDateString("th-TH", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span className="relative z-10 rounded-full bg-primary-100 px-3 py-1.5 font-medium text-primary-600 hover:bg-primary-200">
                      {blog.categories.find(cat => cat.id === post.category)?.nameInThai || post.category}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="text-2xl font-bold leading-tight text-gray-900 group-hover:text-primary-600 font-display mb-4">
                      <Link href={`/blog/${post.slug}`} className="hover:underline decoration-primary-300">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-base leading-relaxed text-gray-600 mb-6">
                      {post.excerpt}
                    </p>
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700">
                      อ่านเพิ่มเติม
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <div className="h-10 w-10 rounded-full bg-primary-200 flex items-center justify-center">
                      <span className="text-sm font-medium text-primary-800">
                        {post.author.split(' ')[0].charAt(0)}
                      </span>
                    </div>
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        {post.author}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Other Posts */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {[...blog.posts].filter(post => !post.title.includes('🌷')).map((post) => (
            <article
              key={post.slug}
              className="flex flex-col items-start justify-between group hover:shadow-md rounded-2xl p-4 transition-shadow duration-300"
            >
              <div className="relative w-full">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="aspect-[16/9] w-full rounded-2xl bg-primary-50 sm:aspect-[2/1] lg:aspect-[3/2] overflow-hidden group-hover:bg-primary-100 transition-colors duration-300">
                    <div className="h-full w-full flex items-center justify-center">
                      <span className="text-4xl font-display text-primary-600 group-hover:scale-110 transition-transform duration-300">
                        {post.title.includes('🌷') ? '🌷' : post.title.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </Link>
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {new Date(post.date).toLocaleDateString("th-TH", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {blog.categories.find(cat => cat.id === post.category)?.nameInThai || post.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary-600 font-display">
                    <Link href={`/blog/${post.slug}`} className="hover:underline decoration-primary-300">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 min-h-[4.5rem]">
                    {post.excerpt}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="h-8 w-8 rounded-full bg-primary-200 flex items-center justify-center">
                    <span className="text-xs font-medium text-primary-800">
                      {post.author.split(' ')[0].charAt(0)}
                    </span>
                  </div>
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      {post.author}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
