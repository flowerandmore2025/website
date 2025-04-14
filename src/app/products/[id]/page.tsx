"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import products from "@/data/products.json";
import { StarIcon } from "@heroicons/react/20/solid";
import {
  HeartIcon,
  ShoppingCartIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

// Mock function to get related products
const getRelatedProducts = (categoryId: string, currentId: string) => {
  return products.products
    .filter((p) => p.category === categoryId && p.id !== currentId)
    .slice(0, 4);
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const product = products.products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const category = products.categories.find((c) => c.id === product.category);
  const relatedProducts = getRelatedProducts(product.category, product.id);

  // Mock ratings data
  const rating = 4.5;
  const reviewCount = 117;

  // Default image if product has no images
  const productImages =
    product.images?.length > 0
      ? product.images
      : ["/images/products/placeholder-1.jpg"];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        {/* Breadcrumbs */}
        <nav className="text-sm font-medium text-gray-500 mb-8">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-primary-600">
                Home
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <span>/</span>
              <Link href="/products" className="hover:text-primary-600">
                Products
              </Link>
            </li>
            {category && (
              <li className="flex items-center space-x-2">
                <span>/</span>
                <Link
                  href={`/products?category=${category.id}`}
                  className="hover:text-primary-600"
                >
                  {category.name}
                </Link>
              </li>
            )}
            <li className="flex items-center space-x-2">
              <span>/</span>
              <span className="text-gray-900">{product.name}</span>
            </li>
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
                        ? "border-primary-500 ring-2 ring-primary-500"
                        : "border-gray-200"
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

            {/* Rating */}
            <div className="mt-2 flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((star) => (
                  <StarIcon
                    key={star}
                    className={`${
                      rating > star ? "text-yellow-400" : "text-gray-200"
                    } h-5 w-5 flex-shrink-0`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="ml-3 text-sm text-gray-500">
                {rating} out of 5 stars ({reviewCount} reviews)
              </p>
            </div>

            <div className="mt-4">
              <p className="text-3xl font-semibold tracking-tight text-gray-900">
                THB {product.price.toLocaleString()}
              </p>
              <p className="mt-1 text-sm text-primary-600">
                Free delivery for orders above THB 1,000
              </p>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900">Description</h3>
              <div className="mt-2 space-y-6 text-base text-gray-700">
                {product.description}
              </div>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-6">
              <div className="flex items-center">
                <h2 className="text-sm font-medium text-gray-900">
                  Crafted by
                </h2>
                <p className="ml-2 text-sm text-gray-600 font-medium">
                  {product.craftedBy}
                </p>
              </div>
              <div className="mt-2 flex items-center">
                <h2 className="text-sm font-medium text-gray-900">
                  Availability
                </h2>
                <p
                  className={`ml-2 text-sm font-medium ${
                    product.inStock ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </p>
              </div>
            </div>

            <form className="mt-6 border-t border-gray-200 pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <label
                    htmlFor="quantity"
                    className="mr-3 text-sm font-medium text-gray-900"
                  >
                    Quantity
                  </label>
                  <div className="flex border border-gray-300 rounded-md">
                    <button
                      type="button"
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min={1}
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="w-12 border-0 text-center focus:ring-0"
                    />
                    <button
                      type="button"
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  className="flex-1 rounded-md bg-primary-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 flex items-center justify-center"
                >
                  <ShoppingCartIcon className="h-5 w-5 mr-2" />
                  Add to cart
                </button>
                <button
                  type="button"
                  className="rounded-md bg-white px-3 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 flex items-center justify-center"
                >
                  <HeartIcon className="h-5 w-5 mr-2" />
                  Wishlist
                </button>
              </div>
            </form>

            {/* Additional features */}
            <div className="mt-8 border-t border-gray-200 pt-6 space-y-4">
              <div className="flex items-center">
                <ArrowPathIcon className="h-5 w-5 text-green-500 mr-2" />
                <p className="text-sm text-gray-600">14-day return policy</p>
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
                  Free delivery in Phuket for orders above THB 1,000
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-display font-bold tracking-tight text-gray-900">
              You might also like
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-100 group-hover:opacity-80 lg:h-60">
                    {relatedProduct.images &&
                    relatedProduct.images.length > 0 ? (
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
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {relatedProduct.name}
                        </Link>
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      THB {relatedProduct.price}
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
