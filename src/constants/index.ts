export const navigation = [
  { name: "หน้าหลัก", href: "/" },
  { name: "สินค้า", href: "/products" },
  { name: "คำถามที่พบบ่อย", href: "/faq" },
  { name: "บทความ", href: "/blog" },
  { name: "นโยบาย", href: "/policy" },
  { name: "ติดต่อเรา", href: "/contact" },
];

export const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';