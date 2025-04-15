# Flower & More - Phuket Flower Shop

A modern e-commerce website for a flower shop in Phuket, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Product catalog with search and filtering
- Blog section with articles about flowers and arrangements
- Customer reviews and testimonials
- Contact form for inquiries
- Bilingual support (English/Thai)
- Easy-to-update product and blog data through JSON files

## Pages

- Landing Page
- Product Search Page (with filters by group type and price)
- Product Details Page
- FAQs Page
- Contact Us Page
- Policy Page
- Blog Overview Page and Blog Details Page
- Review Page

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run the development server:
   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                  # Next.js app router pages
├── components/          # Reusable React components
├── data/               # Data files
│   ├── products.ts    # Product catalog data
│   ├── blog.ts        # Blog posts data
│   ├── reviews.json   # Customer reviews data
│   └── faqs.ts        # FAQ data
└── styles/            # Global styles and Tailwind config
```

## Data Management

All dynamic content is stored in JSON and TypeScript files under the `src/data` directory:

- `products.ts`: Product catalog with categories
- `blog.ts`: Blog posts and categories
- `reviews.json`: Customer reviews and ratings
- `faqs.ts`: Frequently asked questions

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Headless UI](https://headlessui.com/) - UI components
- [Heroicons](https://heroicons.com/) - Icons

## License

This project is private and confidential. All rights reserved.
