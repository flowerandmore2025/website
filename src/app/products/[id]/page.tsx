import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductsAndCategories } from '@/service/googleSheetsService';
import type { Product } from '@/types/product';
import type { Category } from '@/types/category';
import ProductClient from './components/ProductClient';
import { baseUrl } from '@/constants';

// Generate static paths for all products
export async function generateStaticParams() {
  const { products } = await getProductsAndCategories();
  return products.map((product: Product) => ({ id: product.id }));
}

// Generate metadata for the product page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const { products } = await getProductsAndCategories();
  const product = products.find((p: Product) => p.id === resolvedParams.id);

  if (!product) {
    return {
      title: 'Product Not Found | Phuket Flower Shop',
      description: 'The requested product could not be found.',
    };
  }

  // Default image if product has no images
  const productImage = product.image || '/images/products/placeholder-1.jpg';

  // Construct absolute URL for the image
  const imageUrl = new URL(productImage, baseUrl).toString();

  return {
    title: `[${product.name}] | ดอกไม้สด ดอกไม้ประดิษฐ์ พานพุ่ม คุณภาพเยี่ยม ราคาพิเศษ | Phuket Flower Shop`,
    description: `สั่งซื้อ [${product.name}] ดอกไม้สด ดอกไม้ประดิษฐ์ พานพุ่ม หรือดอกไม้ไทย ตกแต่งอย่างประณีต เหมาะสำหรับทุกโอกาส ราคามิตรภาพ จัดส่งทั่วไทย`,
    openGraph: {
      title: `[${product.name}] | ดอกไม้สด ดอกไม้ประดิษฐ์ พานพุ่ม คุณภาพเยี่ยม ราคาพิเศษ | Phuket Flower Shop`,
      description: `สั่งซื้อ [${product.name}] ดอกไม้สด ดอกไม้ประดิษฐ์ พานพุ่ม หรือดอกไม้ไทย ตกแต่งอย่างประณีต เหมาะสำหรับทุกโอกาส ราคามิตรภาพ จัดส่งทั่วไทย`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      locale: 'th_TH',
      type: 'website',
      siteName: 'Phuket Flower Shop',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description,
      images: [imageUrl],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const { products, categories } = await getProductsAndCategories();
  const product = products.find((p: Product) => p.id === resolvedParams.id);
  if (!product) notFound();
  const category = categories.find((c: Category) => c.id === product.categoryId);
  const relatedProducts = products
    .filter((p: Product) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 4);

  return <ProductClient product={product} category={category} relatedProducts={relatedProducts} />;
}
