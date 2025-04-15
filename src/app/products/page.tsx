import ProductSearchPage from "@/app/feature/product/components/ProductSearchPage";
import { Suspense } from "react";
import { Metadata } from "next";
import { baseUrl } from "@/constants";

export const metadata: Metadata = {
  title: "Products | Phuket Flower Shop",
  description: "Browse our collection of beautiful flower arrangements and gifts.",
  openGraph: {
    title: "Products | Phuket Flower Shop",
    description: "Browse our collection of beautiful flower arrangements and gifts.",
    url: new URL("/products", baseUrl).toString(),
    siteName: "Phuket Flower Shop",
    locale: "th_TH",
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductSearchPage />
    </Suspense>
  );
}
