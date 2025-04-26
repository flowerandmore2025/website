import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductsAndCategories } from '@/scripts/googleSheetsService';
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
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { products, categories } = await getProductsAndCategories();
  const product = products.find((p: Product) => p.id === params.id);

  if (!product) {
    return {
      title: 'Product Not Found | Phuket Flower Shop',
      description: 'The requested product could not be found.',
    };
  }

  const category = categories.find((c: Category) => c.id === product.category);
  const categoryName = category ? `${category.name} | ${category.nameInThai}` : '';

  // Default image if product has no images
  const productImage =
    product.images?.length > 0 ? product.images[0] : '/images/products/placeholder-1.jpg';

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

export default async function ProductPage({ params }: { params: { id: string } }) {
  const { products, categories } = await getProductsAndCategories();
  const product = products.find((p: Product) => p.id === params.id);
  if (!product) notFound();
  const category = categories.find((c: Category) => c.id === product.category);
  const relatedProducts = products
    .filter((p: Product) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return <ProductClient product={product} category={category} relatedProducts={relatedProducts} />;
}
