import ProductSearchPage from '@/app/feature/product/components/ProductSearchPage';
import { getProductsAndCategories } from '@/service/googleSheetsService';
import { Metadata } from 'next';
import { baseUrl } from '@/constants';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: `ค้นหาดอกไม้สด ดอกไม้ประดิษฐ์ ดอกไม้ไทย พานพุ่ม ราคาถูก | ส่งเร็วทั่วไทย | Phuket Flower Shop`,
  description:
    'ค้นหาดอกไม้สด ดอกไม้ประดิษฐ์ ดอกไม้ไทย พานไหว้ครู พานพุ่ม แจกันดอกไม้ ช่อดอกไม้ พร้อมส่งด่วนทั่วไทย สั่งง่าย ราคาคุ้มสุดๆ',
  openGraph: {
    title: `ค้นหาดอกไม้สด ดอกไม้ประดิษฐ์ ดอกไม้ไทย พานพุ่ม ราคาถูก | ส่งเร็วทั่วไทย | Phuket Flower Shop`,
    description:
      'ค้นหาดอกไม้สด ดอกไม้ประดิษฐ์ ดอกไม้ไทย พานไหว้ครู พานพุ่ม แจกันดอกไม้ ช่อดอกไม้ พร้อมส่งด่วนทั่วไทย สั่งง่าย ราคาคุ้มสุดๆ',
    url: new URL('/products', baseUrl).toString(),
    siteName: 'Flower & More shop',
    locale: 'th_TH',
    type: 'website',
  },
};

export default async function ProductsPage() {
  const { products, categories } = await getProductsAndCategories();

  return (
    // <ProductSearchPageSkeleton />
    <Suspense fallback={<ProductSearchPageSkeleton />}>
      <ProductSearchPage products={products} categories={categories} />
    </Suspense>
  );
}

const ProductSearchPageSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero section skeleton */}
      <div className="mb-8">
        <div className="h-[30px] bg-gray-200 rounded-lg animate-pulse w-full mb-4"></div>
      </div>

      {/* Search bar skeleton */}
      <div className="mb-8">
        <div className="h-12 bg-gray-200 rounded-lg animate-pulse w-full max-w-md mb-4"></div>
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="h-8 bg-gray-200 rounded-full animate-pulse w-24"></div>
          ))}
        </div>
      </div>

      {/* Filters skeleton */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="h-10 bg-gray-200 rounded-md animate-pulse w-40 mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-6 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>

          <div className="h-10 bg-gray-200 rounded-md animate-pulse w-40 mt-8 mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-6 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        </div>

        {/* Products grid skeleton */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="aspect-square bg-gray-200 animate-pulse"></div>
                <div className="p-4 space-y-3">
                  <div className="h-5 bg-gray-200 rounded animate-pulse w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                  <div className="h-6 bg-gray-200 rounded animate-pulse w-1/3"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination skeleton */}
          <div className="mt-8 flex justify-center">
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="h-10 w-10 bg-gray-200 rounded-md animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
