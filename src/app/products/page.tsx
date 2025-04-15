"use client";

import { useState, useEffect } from "react";
import * as motion from "motion/react-client"
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import products from "@/data/products";
import PageHeader from "@/components/ui/PageHeader";
import SectionContainer from "@/components/ui/SectionContainer";
import CtaSection from "@/components/ui/CtaSection";
import AnimatedCard from "@/components/ui/AnimatedCard";

function ProductCard({ product, index }: { product: any; index: number }) {
  return (
    <AnimatedCard
      title={product.name}
      subtitle={`Crafted by ${product.craftedBy}`}
      imageSrc={
        product.images && product.images.length > 0
          ? product.images[0]
          : undefined
      }
      imageAlt={product.name}
      href={`/products/${product.id}`}
      index={index}
      className="h-full"
    />
  );
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([
    100,
    products.maxPrice,
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredProducts = products.products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesPrice && matchesSearch;
  });

  // Get the highest price for range input max
  const maxPrice = Math.max(...products.products.map((p) => p.price));

  if (!isClient) {
    return null; // Avoid hydration issues by not rendering until client-side
  }

  return (
    <div>
      <PageHeader
        title="สินค้าของเรา"
        subtitle="สำรวจคอลเลกชันการจัดดอกไม้และของขวัญสุดสวยของเรา"
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
              {mobileFiltersOpen ? "ซ่อนตัวกรอง" : "แสดงตัวกรอง"}
            </button>
          </div>

          {/* Filters - Sidebar */}
          <aside
            className={`${mobileFiltersOpen ? "block" : "hidden"} lg:block`}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="sticky top-24 space-y-8 divide-y divide-gray-200 bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              {/* Search */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-4">
                  ค้นหา
                </h3>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon
                      className="h-4 w-4 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="search"
                    name="search"
                    id="search"
                    className="block w-full rounded-md border-0 py-2 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm"
                    placeholder="ค้นหาสินค้า..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="pt-8">
                <h3 className="text-sm font-medium text-gray-900 mb-4">
                  หมวดหมู่
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      id="category-all"
                      name="category"
                      type="radio"
                      checked={selectedCategory === "all"}
                      onChange={() => setSelectedCategory("all")}
                      className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-600"
                    />
                    <label
                      htmlFor="category-all"
                      className="ml-3 text-sm text-gray-600"
                    >
                      ทั้งหมด
                    </label>
                  </div>
                  {products.categories.map((category) => (
                    <div key={category.id} className="flex items-center">
                      <input
                        id={`category-${category.id}`}
                        name="category"
                        type="radio"
                        checked={selectedCategory === category.id}
                        onChange={() => setSelectedCategory(category.id)}
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
                      onChange={(e) =>
                        setPriceRange([priceRange[0], Number(e.target.value)])
                      }
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
                    setSelectedCategory("all");
                    setPriceRange([0, maxPrice]);
                    setSearchQuery("");
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
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">
                {`พบ ${filteredProducts.length} สินค้า`}
              </h2>
              <div className="text-sm text-gray-500">
                {selectedCategory !== "all" && (
                  <span className="inline-flex items-center rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 mr-2">
                    {
                      products.categories.find((c) => c.id === selectedCategory)
                        ?.name
                    }
                  </span>
                )}
                {(priceRange[0] > 0 || priceRange[1] < maxPrice) && (
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                    ราคา {priceRange[0]} บาท - {priceRange[1]} บาท
                  </span>
                )}
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                  />
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
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  ไม่พบสินค้า
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  ลองปรับปรุงตัวกรองหรือค้นหาสินค้าใหม่
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => {
                      setSelectedCategory("all");
                      setPriceRange([0, maxPrice]);
                      setSearchQuery("");
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
