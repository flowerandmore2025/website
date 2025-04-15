import type { Metadata } from "next";
import { Inter, Prompt, Playfair_Display } from "next/font/google";
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

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Flower & More | Same-Day Flower Delivery in Phuket",
  description:
    "Brighten any moment with Flower & More! We offer same-day flower delivery across Phuket and beautiful floral designs for weddings and special events. Fresh, friendly, and always blooming!",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/logo-square.png" }
    ],
    apple: [
      { url: "/images/logo-square.png" }
    ]
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${prompt.variable} ${playfair.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/logo-square.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo-square.png" />
      </head>
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
