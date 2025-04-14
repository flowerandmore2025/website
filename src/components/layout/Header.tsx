import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "HOME", href: "/" },
  { name: "PRODUCTS", href: "/products" },
  { name: "BLOG", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "POLICY", href: "/policy" },
  { name: "REVIEW", href: "/review" },
  // { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

export default function Header() {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Flower & More</span>
            <Image
              src="/logo.svg"
              alt="Flower & More"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
        </div>

        <div className="flex gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="lg:flex lg:flex-1 lg:justify-end">
          <span className="text-sm leading-6 text-gray-900">
            TEL : 062-222-2222
          </span>
        </div>
      </nav>
    </header>
  );
}
