import ProductSearchPage from '@/app/feature/product/components/ProductSearchPage';
import { Suspense } from 'react';
import { Metadata } from 'next';
import { baseUrl } from '@/constants';

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

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductSearchPage />
    </Suspense>
  );
}
