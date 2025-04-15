interface Product {
    id?: string;
    name: string;
    price: number;
    images: string[];
    category: string;
    craftedBy?: string;
    description: string;
    inStock: boolean;
    isPopular: boolean;
}

interface Category {
    id: string;
    name: string;
    nameInThai: string;
}

const bouquetCategoryId: string = "bouquets";
const natureInspiredFloralCreationCategoryId: string = "nature_inspired_floral_creation";
const velvetWireFloralArtCategoryId: string = "velvet_wire_floral_art";
const thaiFloralCraftCategoryId: string = "thai_floral_craft";

const bouquets: Omit<Product, "category">[] = [
    {
        name: "ช่อดูเก้ดอกไม้สด",
        price: 560,
        images: ["/images/products/bouquets/fresh_flower/1.jpg"],
        description:
            "Beautiful fresh flower bouquet with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "ช่อดูเก้ดอกไม้สด",
        price: 2500,
        images: ["/images/products/bouquets/fresh_flower/2.jpg"],
        description:
            "Beautiful fresh flower bouquet with a perfect blend of colors",
        inStock: true,
        isPopular: true,
    },
    {
        name: "ช่อดูเก้ดอกไม้สด",
        price: 1000,
        images: ["/images/products/bouquets/fresh_flower/3.jpg"],
        description:
            "Beautiful fresh flower bouquet with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "ช่อดูเก้ดอกไม้สด",
        price: 1500,
        images: ["/images/products/bouquets/fresh_flower/4.jpg"],
        description:
            "Beautiful fresh flower bouquet with a perfect blend of colors",
        inStock: true,
        isPopular: true,
    },
    {
        name: "ช่อดูเก้ดอกไม้สด",
        price: 150,
        images: ["/images/products/bouquets/fresh_flower/5.jpg"],
        description:
            "Beautiful fresh flower bouquet with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "ช่อดูเก้ดอกไม้สด",
        price: 250,
        images: ["/images/products/bouquets/fresh_flower/6.jpg"],
        description:
            "Beautiful fresh flower bouquet with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "ช่อดูเก้ดอกไม้สด",
        price: 2500,
        images: ["/images/products/bouquets/fresh_flower/8.jpg"],
        description:
            "Beautiful fresh flower bouquet with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "ช่อดูเก้ดอกไม้สด",
        price: 150,
        images: ["/images/products/bouquets/fresh_flower/12.jpg"],
        description:
            "Beautiful fresh flower bouquet with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "ช่อดูเก้ดอกไม้สด",
        price: 150,
        images: ["/images/products/bouquets/fresh_flower/13.jpg"],
        description:
            "Beautiful fresh flower bouquet with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "ช่อดูเก้ดอกไม้สด",
        price: 1500,
        images: ["/images/products/bouquets/fresh_flower/11.jpg"],
        description:
            "Beautiful fresh flower bouquet with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "ช่อดูเก้ดอกไม้สด",
        price: 1500,
        images: ["/images/products/bouquets/fresh_flower/14.jpg"],
        description:
            "Beautiful fresh flower bouquet with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
];

const natureInspiredFloralCreation: Omit<Product, "category">[] = [
    {
        name: "ดอกไม้เสมือนจริง",
        price: 1500,
        images: ["/images/products/nature_inspired_floral_creation/1.jpg"],
        description:
            "Beautiful nature-inspired floral creation with a perfect blend of colors",
        inStock: true,
        isPopular: true,
    },
    {
        name: "ดอกไม้เสมือนจริง",
        price: 2000,
        images: ["/images/products/nature_inspired_floral_creation/2.jpg"],
        description:
            "Beautiful nature-inspired floral creation with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "ดอกไม้เสมือนจริง",
        price: 800,
        images: ["/images/products/nature_inspired_floral_creation/3.jpg"],
        description:
            "Beautiful nature-inspired floral creation with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "ดอกไม้เสมือนจริง",
        price: 1000,
        images: ["/images/products/nature_inspired_floral_creation/4.jpg"],
        description:
            "Beautiful nature-inspired floral creation with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "ดอกไม้เสมือนจริง",
        price: 2000,
        images: ["/images/products/nature_inspired_floral_creation/5.jpg"],
        description:
            "Beautiful nature-inspired floral creation with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "ดอกไม้เสมือนจริง",
        price: 2000,
        images: ["/images/products/nature_inspired_floral_creation/6.jpg"],
        description:
            "Beautiful nature-inspired floral creation with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
];

const velvetWireFloralArt: Omit<Product, "category">[] = [
    {
        name: "ดอกไม้ลวดกำมะหยี่",
        price: 150,
        images: ["/images/products/velvet_wire_floral_art/1.jpg"],
        description:
            "Beautiful velvet wire floral art with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "ดอกไม้ลวดกำมะหยี่",
        price: 150,
        images: ["/images/products/velvet_wire_floral_art/2.jpg"],
        description:
            "Beautiful velvet wire floral art with a perfect blend of colors",
        inStock: true,
        isPopular: true,
    },
    {
        name: "ดอกไม้ลวดกำมะหยี่",
        price: 150,
        images: ["/images/products/velvet_wire_floral_art/3.jpg"],
        description:
            "Beautiful velvet wire floral art with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "ดอกไม้ลวดกำมะหยี่",
        price: 150,
        images: ["/images/products/velvet_wire_floral_art/4.jpg"],
        description:
            "Beautiful velvet wire floral art with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "ดอกไม้ลวดกำมะหยี่",
        price: 150,
        images: ["/images/products/velvet_wire_floral_art/5.jpg"],
        description:
            "Beautiful velvet wire floral art with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "ดอกไม้ลวดกำมะหยี่",
        price: 150,
        images: ["/images/products/velvet_wire_floral_art/6.jpg"],
        description:
            "Beautiful velvet wire floral art with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "ดอกไม้ลวดกำมะหยี่",
        price: 150,
        images: ["/images/products/velvet_wire_floral_art/7.jpg"],
        description:
            "Beautiful velvet wire floral art with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "ดอกไม้ลวดกำมะหยี่",
        price: 150,
        images: ["/images/products/velvet_wire_floral_art/8.jpg"],
        description:
            "Beautiful velvet wire floral art with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "ดอกไม้ลวดกำมะหยี่",
        price: 150,
        images: ["/images/products/velvet_wire_floral_art/9.jpg"],
        description:
            "Beautiful velvet wire floral art with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "ดอกไม้ลวดกำมะหยี่",
        price: 150,
        images: ["/images/products/velvet_wire_floral_art/10.jpg"],
        description:
            "Beautiful velvet wire floral art with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "ดอกไม้ลวดกำมะหยี่",
        price: 150,
        images: ["/images/products/velvet_wire_floral_art/11.jpg"],
        description:
            "Beautiful velvet wire floral art with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
];

const thaiFloralCraft: Omit<Product, "category">[] = [
    {
        name: "แกะสลักดอกไม้ไทย",
        price: 150,
        images: ["/images/products/thai_floral_craft/carving/1.jpg"],
        description:
            "Beautiful thai floral craft with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "แกะสลักดอกไม้ไทย",
        price: 150,
        images: ["/images/products/thai_floral_craft/carving/2.jpg"],
        description:
            "Beautiful thai floral craft with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "แกะสลักดอกไม้ไทย",
        price: 150,
        images: ["/images/products/thai_floral_craft/carving/3.jpg"],
        description:
            "Beautiful thai floral craft with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "แกะสลักดอกไม้ไทย",
        price: 150,
        images: ["/images/products/thai_floral_craft/carving/4.jpg"],
        description:
            "Beautiful thai floral craft with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "พานดอกไม้ไทย",
        price: 150,
        images: ["/images/products/thai_floral_craft/ceremonial_flower_tray/1.jpg"],
        description:
            "Beautiful thai floral craft with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "พานดอกไม้ไทย",
        price: 150,
        images: ["/images/products/thai_floral_craft/ceremonial_flower_tray/2.jpg"],
        description:
            "Beautiful thai floral craft with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "พานดอกไม้ไทย",
        price: 150,
        images: ["/images/products/thai_floral_craft/ceremonial_flower_tray/3.jpg"],
        description:
            "Beautiful thai floral craft with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "พานดอกไม้ไทย",
        price: 150,
        images: ["/images/products/thai_floral_craft/ceremonial_flower_tray/4.jpg"],
        description:
            "Beautiful thai floral craft with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "พานดอกไม้ไทย",
        price: 150,
        images: ["/images/products/thai_floral_craft/ceremonial_flower_tray/5.jpg"],
        description:
            "Beautiful thai floral craft with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "พานดอกไม้ไทย",
        price: 150,
        images: ["/images/products/thai_floral_craft/ceremonial_flower_tray/6.jpg"],
        description:
            "Beautiful thai floral craft with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "พานดอกไม้ไทย",
        price: 150,
        images: ["/images/products/thai_floral_craft/ceremonial_flower_tray/7.jpg"],
        description:
            "Beautiful thai floral craft with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "พวงมาลัยดอกไม้ไทย",
        price: 150,
        images: ["/images/products/thai_floral_craft/flower_garland/1.jpg"],
        description:
            "Beautiful thai floral craft with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "พวงมาลัยดอกไม้ไทย",
        price: 150,
        images: ["/images/products/thai_floral_craft/flower_garland/2.jpg"],
        description:
            "Beautiful thai floral craft with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "พวงมาลัยดอกไม้ไทย",
        price: 150,
        images: ["/images/products/thai_floral_craft/flower_garland/3.jpg"],
        description:
            "Beautiful thai floral craft with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "พวงมาลัยดอกไม้ไทย",
        price: 150,
        images: ["/images/products/thai_floral_craft/flower_garland/4.jpg"],
        description:
            "Beautiful thai floral craft with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "พวงมาลัยดอกไม้ไทย",
        price: 150,
        images: ["/images/products/thai_floral_craft/flower_garland/5.jpg"],
        description:
            "Beautiful thai floral craft with a perfect blend of colors",
        inStock: true,
        isPopular: false,
    },
    {
        name: "พวงมาลัยดอกไม้ไทย",
        price: 150,
        images: ["/images/products/thai_floral_craft/flower_garland/6.jpg"],
        description:
            "Beautiful thai floral craft with a perfect blend of colors",
        inStock: true,
        isPopular: false,
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

const products: Product[] = [
    ...bouquets.map((product, index) => ({
        ...product,
        ...{
            id: `bouquet-${index + 1}`
        },
        category: bouquetCategoryId,
    })),
    ...natureInspiredFloralCreation.map((product, index) => ({
        ...product,
        ...{
            id: `nature-inspired-floral-creation-${index + 1}`
        },
        category: natureInspiredFloralCreationCategoryId,
    })),
    ...velvetWireFloralArt.map((product, index) => ({
        ...product,
        ...{
            id: `velvet-wire-floral-art-${index + 1}`
        },
        category: velvetWireFloralArtCategoryId,
    })),
    ...thaiFloralCraft.map((product, index) => ({
        ...product,
        ...{
            id: `thai-floral-craft-${index + 1}`
        },
        category: thaiFloralCraftCategoryId,
    })),
];

const maxPrice = products.reduce((max, product) => {
    return Math.max(max, product.price);
}, 0);

export default {products, categories, maxPrice};
