import type { Metadata } from "next";
import { Inter, Prompt } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AbstractFlowerBg from "@/components/animations/AbstractFlowerBg";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const prompt = Prompt({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "thai"],
  display: "swap",
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: "Phuket Flower Shop | Beautiful Floral Arrangements",
  description:
    "Fresh flowers, bouquets, and arrangements for all occasions in Phuket, Thailand. Same-day delivery available.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${prompt.variable}`}>
      <body className="min-h-screen flex flex-col">
        {/* Global Abstract flower background */}
        <div className="fixed inset-0 w-screen h-screen opacity-10 pointer-events-none z-0">
          <AbstractFlowerBg />
        </div>

        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
