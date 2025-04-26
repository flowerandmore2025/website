'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowPathIcon, ShareIcon } from '@heroicons/react/24/outline';

interface ProductClientProps {
  product: any;
  category: any;
  relatedProducts: any[];
  productImages: string[];
}

export default function ProductClient({
  product,
  category,
  relatedProducts,
  productImages,
}: ProductClientProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  // Set current URL on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  // Handle share functionality
  const handleShare = () => {
    if (typeof window === 'undefined') return;

    // Copy URL to clipboard regardless of sharing method
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    // If Web Share API is available, also use it
    if (navigator.share) {
      navigator
        .share({
          title: product.name,
          text: product.description || 'Check out this product!',
          url: currentUrl,
        })
        .catch(error => console.log('Error sharing', error));
    }
  };

  // Handle social media share clicks
  const handleSocialShare = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window === 'undefined') return;

    // Copy URL to clipboard
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        {/* Breadcrumbs */}
        <nav className="text-sm font-medium text-gray-500 mb-8" aria-label="Breadcrumb">
          {/* Mobile breadcrumbs - simplified version */}
          <div className="md:hidden">
            <div className="flex items-center mb-2">
              <Link href="/products" className="text-primary-600 hover:text-primary-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1 inline"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                กลับไปหน้าสินค้า
              </Link>
            </div>
            <div className="flex flex-wrap items-center">
              <span className="text-xs text-gray-400 mr-1">หมวดหมู่:</span>
              {category && (
                <Link
                  href={`/products?category=${category.id}`}
                  className="text-primary-600 hover:text-primary-700 text-xs"
                >
                  {category.nameInThai}
                </Link>
              )}
            </div>
          </div>

          {/* Desktop breadcrumbs - full version */}
          <ol className="hidden md:flex items-center flex-wrap">
            <li className="flex items-center">
              <Link href="/" className="hover:text-primary-600">
                หน้าหลัก
              </Link>
              <span className="mx-2 text-gray-400">/</span>
            </li>
            <li className="flex items-center">
              <Link href="/products" className="hover:text-primary-600">
                สินค้า
              </Link>
              <span className="mx-2 text-gray-400">/</span>
            </li>
            {category && (
              <li className="flex items-center">
                <Link href={`/products?category=${category.id}`} className="hover:text-primary-600">
                  {category.nameInThai}
                </Link>
                <span className="mx-2 text-gray-400">/</span>
              </li>
            )}
            <li className="text-gray-900 truncate max-w-[200px]">{product.name}</li>
          </ol>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <div className="flex flex-col">
            <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg border border-gray-200">
              {productImages && productImages.length > 0 ? (
                <Image
                  src={productImages[activeImage]}
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                  width={600}
                  height={600}
                  priority
                />
              ) : (
                <div className="h-96 w-full bg-primary-100 flex items-center justify-center">
                  <div className="text-7xl text-primary-600 font-display">
                    {product.name.charAt(0)}
                  </div>
                </div>
              )}
            </div>

            {/* Thumbnail gallery */}
            {productImages && productImages.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-2">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative aspect-square rounded-md overflow-hidden border ${
                      activeImage === idx
                        ? 'border-primary-500 ring-2 ring-primary-500'
                        : 'border-gray-200'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      className="h-full w-full object-cover object-center"
                      width={100}
                      height={100}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            {category && (
              <Link
                href={`/products?category=${category.id}`}
                className="text-sm font-medium text-primary-600 hover:text-primary-700"
              >
                {category.name} / {category.nameInThai}
              </Link>
            )}

            <h1 className="mt-2 text-3xl font-display font-bold tracking-tight text-gray-900">
              {product.name}
            </h1>

            <div className="mt-4">
              <p className="text-3xl font-semibold tracking-tight text-gray-900">
                THB {product.price.toLocaleString()}
              </p>
              <p className="mt-1 text-sm text-primary-600">
                ส่งฟรีทุกวันในเขตภูเก็ตเมื่อสั่งซื้อครบ 1,000 บาท
              </p>
            </div>

            {/*<div className="mt-6 border-t border-gray-200 pt-6">*/}
            {/*  <h3 className="text-lg font-medium text-gray-900">*/}
            {/*    คำอธิบายสินค้า*/}
            {/*  </h3>*/}
            {/*  <div className="mt-2 space-y-6 text-base text-gray-700">*/}
            {/*    {product.description}*/}
            {/*  </div>*/}
            {/*</div>*/}

            <div className="mt-6 border-t border-gray-200 pt-6">
              {/*<div className="flex items-center">*/}
              {/*  <h2 className="text-sm font-medium text-gray-900">สร้างโดย</h2>*/}
              {/*  <p className="ml-2 text-sm text-gray-600 font-medium">*/}
              {/*    {product.craftedBy}*/}
              {/*  </p>*/}
              {/*</div>*/}
              <div className="mt-2 flex items-center">
                <h2 className="text-sm font-medium text-gray-900">สินค้าในคลัง</h2>
                <p
                  className={`ml-2 text-sm font-medium ${
                    product.inStock ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {product.inStock ? 'มีสินค้า' : 'สินค้าหมด'}
                </p>
              </div>
              <div className="mt-4">
                <h2 className="text-sm font-medium text-gray-900 mb-2">แชร์สินค้านี้</h2>
                <div className="relative">
                  <div className="flex flex-wrap gap-2">
                    {/* General Share Button */}
                    <button
                      onClick={handleShare}
                      className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors rounded-full border border-gray-300 hover:border-primary-600 px-3 py-1"
                      aria-label="Share product"
                    >
                      <ShareIcon className="w-4 h-4" />
                      <span className="text-sm">Share</span>
                    </button>

                    {/* Facebook */}
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white bg-[#1877F2] hover:bg-[#0E65D9] transition-colors rounded-full px-3 py-1"
                      aria-label="Share on Facebook"
                      onClick={handleSocialShare}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                      <span className="text-sm">Facebook</span>
                    </a>

                    {/* Line */}
                    <a
                      href={`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(currentUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white bg-[#06C755] hover:bg-[#05A847] transition-colors rounded-full px-3 py-1"
                      aria-label="Share on Line"
                      onClick={handleSocialShare}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 10.6c0-4.1-4.1-7.5-9.2-7.5-5.1 0-9.2 3.4-9.2 7.5 0 3.7 3.3 6.8 7.8 7.4.3.1.7.2.8.5.1.2.1.5 0 .8-.1.5-.3 1.8-.3 2 0 .2.1.5.5.3 2.7-1.4 5.2-3.3 7.3-5.6 1.5-1.6 2.3-3.3 2.3-5.4z" />
                      </svg>
                      <span className="text-sm">Line</span>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(product.name + ' - ' + currentUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white bg-[#25D366] hover:bg-[#20BD5C] transition-colors rounded-full px-3 py-1"
                      aria-label="Share on WhatsApp"
                      onClick={handleSocialShare}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span className="text-sm">WhatsApp</span>
                    </a>

                    {/* Twitter/X */}
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(product.name)}&url=${encodeURIComponent(currentUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white bg-black hover:bg-gray-800 transition-colors rounded-full px-3 py-1"
                      aria-label="Share on Twitter/X"
                      onClick={handleSocialShare}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      <span className="text-sm">Twitter</span>
                    </a>
                  </div>
                  {copied && (
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-md z-10 whitespace-nowrap shadow-lg">
                      Link copied to clipboard! ✓
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Additional features */}
            <div className="mt-8 border-t border-gray-200 pt-6 space-y-4">
              <div className="flex items-center">
                <ArrowPathIcon className="h-5 w-5 text-green-500 mr-2" />
                <p className="text-sm text-gray-600">สามารถยกเลิกคำสั่งซื้อได้ภายใน 1 ชั่วโมง</p>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 text-green-500 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
                <p className="text-sm text-gray-600">
                  ส่งฟรีทุกวันในเขตเมืองภูเก็ตเมื่อสั่งซื้อครบ 1,000 บาท
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-display font-bold tracking-tight text-gray-900">
              สิ่งที่คุณอาจจะชอบ
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map(relatedProduct => (
                <div key={relatedProduct.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-100 group-hover:opacity-80 lg:h-60">
                    {relatedProduct.images && relatedProduct.images.length > 0 ? (
                      <Image
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.name}
                        className="h-full w-full object-cover object-center"
                        width={300}
                        height={300}
                      />
                    ) : (
                      <div className="h-full w-full bg-primary-100 flex items-center justify-center">
                        <div className="text-5xl text-primary-600 font-display">
                          {relatedProduct.name.charAt(0)}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-900">
                        <Link href={`/products/${relatedProduct.id}`}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {relatedProduct.name}
                        </Link>
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {relatedProduct.price.toLocaleString()} บาท
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
