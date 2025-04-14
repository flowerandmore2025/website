interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  category: string;
  craftedBy: string;
  description: string;
  inStock: boolean;
  isPopular: boolean;
}

interface Category {
  id: string;
  name: string;
  nameInThai: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "ช่อดูเก้ดอกไม้สด",
    price: 560,
    images: ["/images/products/placeholder-1.jpg"],
    category: "bouquets",
    craftedBy: "Arun Magar",
    description:
      "Beautiful fresh flower bouquet with a perfect blend of colors",
    inStock: true,
    isPopular: true,
  },
  {
    id: "2",
    name: "ของขวัญกับดอกพิเศษ",
    price: 560,
    images: ["/images/products/placeholder-2.jpg"],
    category: "gifts",
    craftedBy: "Arun Magar",
    description: "Special gift arrangement with flowers",
    inStock: true,
    isPopular: true,
  },
  {
    id: "3",
    name: "กระเช้าผลไม้",
    price: 599,
    images: ["/images/products/placeholder-3.jpg"],
    category: "fruit_baskets",
    craftedBy: "Arun Magar",
    description: "Fresh fruit basket with flowers",
    inStock: true,
    isPopular: true,
  },
  {
    id: "4",
    name: "งานดอกไม้ไทย",
    price: 560,
    images: ["/images/products/placeholder-4.jpg"],
    category: "thai_arrangements",
    craftedBy: "Arun Magar",
    description: "Traditional Thai flower arrangement",
    inStock: true,
    isPopular: true,
  },
];

const categories: Category[] = [
  {
    id: "bouquets",
    name: "Bouquets",
    nameInThai: "งานช่อบูเก้ดอกไม้สด",
  },
  {
    id: "nature_inspired_floral_creation",
    name: "Nature-Inspired Floral Creation",
    nameInThai: "งานดอกไม้เสมือนจริง",
  },
  {
    id: "velvet_wire_floral_art",
    name: "Velvet Wire Floral Art",
    nameInThai: "งานดอกไม้ลวดกำมะหยี่",
  },
  {
    id: "thai_floral_craft",
    name: "Thai Floral Craft",
    nameInThai: "งานดอกไม้ไทย",
  },
];

const maxPrice = products.reduce((max, product) => {
  return Math.max(max, product.price);
}, 0);

export default { products, categories, maxPrice };
