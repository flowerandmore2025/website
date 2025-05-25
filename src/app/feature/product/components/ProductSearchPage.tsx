'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import * as motion from 'motion/react-client';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import type { Product } from '@/types/product';
import type { Category } from '@/types/category';
import PageHeader from '@/components/ui/PageHeader';
import SectionContainer from '@/components/ui/SectionContainer';
import CtaSection from '@/components/ui/CtaSection';
import ProductCard from '@/components/ui/ProductCard';
import debounce from 'lodash/debounce';

interface ProductSearchPageProps {
  products: Product[];
  categories: Category[];
}

export default function ProductSearchPage({ products, categories }: ProductSearchPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get category from URL or default to "all"
  const categoryParam = searchParams.get('category');
  const initialCategory = useMemo(() => {
    return categoryParam && categories?.some((c: Category) => c.id === categoryParam)
      ? categoryParam
      : 'all';
  }, [categoryParam, categories]);

  // Get price range from URL or default values
  const minPriceParam = searchParams.get('minPrice');
  const maxPriceParam = searchParams.get('maxPrice');
  const initialMinPrice =
    minPriceParam && !isNaN(Number(minPriceParam)) ? Number(minPriceParam) : 100;
  const initialMaxPrice = useMemo(() => {
    return maxPriceParam && !isNaN(Number(maxPriceParam))
      ? Number(maxPriceParam)
      : products && products.length > 0
        ? Math.max(...products.map((p: Product) => p.price))
        : 10000;
  }, [products]);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    initialMinPrice,
    initialMaxPrice,
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [debouncedFilteredProducts, setDebouncedFilteredProducts] = useState<Product[]>(products);

  // Function to update URL with current filters
  const updateURL = useCallback(() => {
    if (!isClient) return;

    const params = new URLSearchParams();

    // Add category parameter if not "all"
    if (selectedCategory !== 'all') {
      params.set('category', selectedCategory);
    }

    // Add price range parameters if they differ from defaults
    if (priceRange[0] !== 100) {
      params.set('minPrice', priceRange[0].toString());
    }

    if (
      products &&
      priceRange[1] !==
        (products.length > 0 ? Math.max(...products.map((p: Product) => p.price)) : 10000)
    ) {
      params.set('maxPrice', priceRange[1].toString());
    }

    // Create the URL path with query parameters
    const queryString = params.toString();
    const url = queryString ? `/products?${queryString}` : '/products';

    // Use replace instead of push and set scroll to false to prevent scrolling to top
    router.replace(url, { scroll: false });
  }, [isClient, router, selectedCategory, priceRange[0], priceRange[1], products]);

  const debouncedUpdateURL = useMemo(() => debounce(updateURL, 300), [updateURL]);

  // Avoid hydration mismatch and sync URL with filters
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Update URL when filters change (category, but NOT price)
  useEffect(() => {
    if (isClient) {
      updateURL();
    }
  }, [isClient, selectedCategory]);

  // Debounced update for priceRange
  useEffect(() => {
    if (isClient) {
      debouncedUpdateURL();
    }
    // Cleanup debounce on unmount
    return () => {
      debouncedUpdateURL.cancel();
    };
  }, [isClient, priceRange[0], priceRange[1], debouncedUpdateURL]);

  useEffect(() => {
    const handler = debounce(() => {
      setDebouncedFilteredProducts(
        products.filter((product: Product) => {
          const matchesCategory =
            selectedCategory === 'all' || product.categoryId === selectedCategory;
          const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
          const matchesSearch =
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase());
          return matchesCategory && matchesPrice && matchesSearch;
        })
      );
    }, 300);
    handler();
    return () => handler.cancel();
  }, [products, selectedCategory, priceRange[0], priceRange[1], searchQuery]);

  if (!products || !categories) return null;

  // Get the highest price for range input max
  const maxPrice = products.length > 0 ? Math.max(...products.map((p: Product) => p.price)) : 10000;

  if (!isClient) {
    return null; // Avoid hydration issues by not rendering until client-side
  }

  // Get the appropriate background image based on selected category
  const getBackgroundImage = () => {
    if (selectedCategory === 'all') {
      return '/images/hero/bouquet.jpeg'; // Default image for all categories
    }

    // Map category IDs to their respective background images
    const categoryImages: Record<string, string> = {
      bouquets: '/images/hero/bouquet.jpeg',
      nature_inspired_floral_creation: '/images/hero/nature_inspired_floral_creation.jpeg',
      velvet_wire_floral_art: '/images/hero/velvet_wire_floral_art.jpeg',
      thai_floral_craft: '/images/hero/thai_floral_craft.jpeg',
    };

    return categoryImages[selectedCategory] || '/images/hero/bouquets.png';
  };

  return (
    <div>
      <PageHeader
        title="สินค้าของเรา"
        backgroundImage={getBackgroundImage()}
        subtitle="สำรวจคอลเลกชันการจัดดอกไม้และของขวัญสุดสวยของเรา"
        titleColor="text-white"
        subtitleColor="text-white"
      />

      <SectionContainer background="white">
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          {/* Filters - Mobile Toggle */}
          <div className="flex items-center justify-between lg:hidden mb-6">
            <h2 className="text-lg font-medium text-gray-900">ตัวกรอง</h2>
            <button
              type="button"
              className="flex items-center text-sm text-gray-700 hover:text-primary-600"
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            >
              <AdjustmentsHorizontalIcon className="w-5 h-5 mr-1" />
              {mobileFiltersOpen ? 'ซ่อนตัวกรอง' : 'แสดงตัวกรอง'}
            </button>
          </div>

          {/* Filters - Sidebar */}
          <aside className={`${mobileFiltersOpen ? 'block' : 'hidden'} lg:block`}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="sticky top-24 space-y-8 divide-y divide-gray-200 bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              {/* Search */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-4">ค้นหา</h3>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="search"
                    name="search"
                    id="search"
                    className="block w-full rounded-md border-0 py-2 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm"
                    placeholder="ค้นหาสินค้า..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="pt-8">
                <h3 className="text-sm font-medium text-gray-900 mb-4">หมวดหมู่</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      id="category-all"
                      name="category"
                      type="radio"
                      checked={selectedCategory === 'all'}
                      onChange={() => {
                        setSelectedCategory('all');
                        // URL will be updated by the useEffect
                      }}
                      className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-600"
                    />
                    <label htmlFor="category-all" className="ml-3 text-sm text-gray-600">
                      ทั้งหมด
                    </label>
                  </div>
                  {categories.map((category: Category) => (
                    <div key={category.id} className="flex items-center">
                      <input
                        id={`category-${category.id}`}
                        name="category"
                        type="radio"
                        checked={selectedCategory === category.id}
                        onChange={() => {
                          setSelectedCategory(category.id);
                          // URL will be updated by the useEffect
                        }}
                        className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-600"
                      />
                      <label
                        htmlFor={`category-${category.id}`}
                        className="ml-3 text-sm text-gray-600"
                      >
                        {category.nameInThai}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="pt-8">
                <h3 className="text-sm font-medium text-gray-900 mb-4">ราคา</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">
                        {priceRange[0].toLocaleString()} บาท
                      </span>
                      <span className="text-sm text-gray-500">
                        {priceRange[1].toLocaleString()} บาท
                      </span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      step="10"
                      max={maxPrice}
                      value={priceRange[1]}
                      onChange={e => {
                        setPriceRange([priceRange[0], Number(e.target.value)]);
                      }}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                    />
                  </div>
                  {/* <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) =>
                        setPriceRange([Number(e.target.value), priceRange[1]])
                      }
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm"
                    />
                    <span className="text-gray-500">-</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], Number(e.target.value)])
                      }
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm"
                    />
                  </div> */}
                </div>
              </div>

              {/* Reset Filters */}
              <div className="pt-8">
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange([100, maxPrice]);
                    setSearchQuery('');
                    // Reset URL when resetting filters without scrolling to top
                    router.replace('/products', { scroll: false });
                  }}
                  className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700"
                >
                  รีเซ็ตตัวกรอง
                </button>
              </div>
            </motion.div>
          </aside>

          {/* Product grid */}
          <div className="lg:col-span-2 lg:mt-0 xl:col-span-3">
            <div className="mb-6 space-y-4">
              {/* Product count with styled badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <h2 className="text-lg font-medium text-gray-900">พบ</h2>
                  <span className="ml-2 inline-flex items-center justify-center rounded-full bg-primary-600 px-3 py-1 text-sm font-medium text-white shadow-sm">
                    {debouncedFilteredProducts.length}
                  </span>
                  <h2 className="ml-2 text-lg font-medium text-gray-900">สินค้า</h2>
                </div>
              </div>

              {/* Active filters section */}
              {(selectedCategory !== 'all' || priceRange[0] > 100 || priceRange[1] < maxPrice) && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">ตัวกรองที่ใช้:</span>

                  {/* Category filter tag */}
                  {selectedCategory !== 'all' && (
                    <div className="inline-flex items-center rounded-full bg-primary-200 px-3 py-1.5 text-sm font-medium text-primary-800 shadow-sm">
                      <span>
                        {categories.find((c: Category) => c.id === selectedCategory)?.nameInThai}
                      </span>
                      <button
                        onClick={() => setSelectedCategory('all')}
                        className="ml-2 -mr-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-200 hover:bg-primary-300 focus:outline-none"
                      >
                        <span className="sr-only">Remove filter</span>
                        <svg
                          className="h-3 w-3 text-primary-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  )}

                  {/* Price range filter tag */}
                  {(priceRange[0] > 100 || priceRange[1] < maxPrice) && (
                    <div className="inline-flex items-center rounded-full bg-primary-200 px-3 py-1.5 text-sm font-medium text-primary-800 shadow-sm">
                      <span>
                        ราคา {priceRange[0].toLocaleString()} บาท - {priceRange[1].toLocaleString()}{' '}
                        บาท
                      </span>
                      <button
                        onClick={() => setPriceRange([100, maxPrice])}
                        className="ml-2 -mr-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-200 hover:bg-primary-300 focus:outline-none"
                      >
                        <span className="sr-only">Remove filter</span>
                        <svg
                          className="h-3 w-3 text-primary-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  )}

                  {/* Search query filter tag */}
                  {searchQuery && (
                    <div className="inline-flex items-center rounded-full bg-primary-200 px-3 py-1.5 text-sm font-medium text-primary-800 shadow-sm">
                      <span>ค้นหา: {searchQuery}</span>
                      <button
                        onClick={() => setSearchQuery('')}
                        className="ml-2 -mr-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-200 hover:bg-primary-300 focus:outline-none"
                      >
                        <span className="sr-only">Remove filter</span>
                        <svg
                          className="h-3 w-3 text-primary-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  )}

                  {/* Clear all filters button */}
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setPriceRange([100, maxPrice]);
                      setSearchQuery('');
                      router.replace('/products', { scroll: false });
                    }}
                    className="inline-flex items-center rounded-md border border-primary-300 bg-white px-3 py-1.5 text-sm font-medium text-primary-700 shadow-sm hover:bg-primary-50 focus:outline-none"
                  >
                    รีเซ็ตทั้งหมด
                  </button>
                </div>
              )}
            </div>

            {debouncedFilteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
                {debouncedFilteredProducts.map((product: Product, index: number) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-gray-50 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="mx-auto h-12 w-12 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">ไม่พบสินค้า</h3>
                <p className="mt-1 text-sm text-gray-500">ลองปรับปรุงตัวกรองหรือค้นหาสินค้าใหม่</p>
                <div className="mt-6">
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setPriceRange([100, maxPrice]);
                      setSearchQuery('');
                      // Reset URL when resetting filters without scrolling to top
                      router.replace('/products', { scroll: false });
                    }}
                    className="inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500"
                  >
                    รีเซ็ตตัวกรอง
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </SectionContainer>

      {/* Call to action */}
      <CtaSection
        title="ไม่เจอสิ่งที่คุณต้องการใช่ไหม?"
        subtitle="ติดต่อเราสำหรับการจัดดอกไม้ที่กำหนดเองตามความต้องการของคุณ"
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        withFlower={true}
      />
    </div>
  );
}
