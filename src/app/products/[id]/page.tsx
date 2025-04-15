import { Metadata } from "next";
import { notFound } from "next/navigation";
import products from "@/data/products";
import ProductClient from "./components/ProductClient";

// Mock function to get related products
const getRelatedProducts = (categoryId: string, currentId: string) => {
  return products.products
    .filter((p) => p.category === categoryId && p.id !== currentId)
    .slice(0, 4);
};

// Generate metadata for the product page
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = products.products.find((p) => p.id === params.id);

  if (!product) {
    return {
      title: "Product Not Found | Phuket Flower Shop",
      description: "The requested product could not be found.",
    };
  }

  const category = products.categories.find((c) => c.id === product.category);
  const categoryName = category ? `${category.name} | ${category.nameInThai}` : "";

  // Default image if product has no images
  const productImage = product.images?.length > 0
    ? product.images[0]
    : "/images/products/placeholder-1.jpg";

  // Construct absolute URL for the image
  const imageUrl = new URL(productImage, "https://flower-and-more.vercel.app").toString();

  return {
    title: `${product.name} | Phuket Flower Shop`,
    description: product.description || "Beautiful floral arrangement from Phuket Flower Shop",
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: product.name,
      }],
      locale: "th_TH",
      type: "website",
      siteName: "Phuket Flower Shop",
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [imageUrl],
    },
  };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const category = products.categories.find((c) => c.id === product.category);
  const relatedProducts = getRelatedProducts(product.category, product.id as string);

  // Default image if product has no images
  const productImages =
    product.images?.length > 0
      ? product.images
      : ["/images/products/placeholder-1.jpg"];

  return (
    <ProductClient
      product={product}
      category={category}
      relatedProducts={relatedProducts}
      productImages={productImages}
    />
  );
}


