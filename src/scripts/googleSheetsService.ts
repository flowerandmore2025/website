import { Category } from '@/types/category';
import { Product } from '@/types/product';
import { google } from 'googleapis';

const sheets = google.sheets('v4');

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

// Memoization caches
let productsCache: Product[] | null = null;
let categoriesCache: Category[] | null = null;

export async function getSheetData({
  spreadsheetId = process.env.GOOGLE_SHEET_ID!,
  range,
}: {
  spreadsheetId?: string;
  range: string;
}) {
  const client = await auth.getClient();
  const res = await sheets.spreadsheets.values.get({
    auth: client as any,
    spreadsheetId,
    range,
  });
  return res.data.values;
}

// Server-side fetcher for SSG/SSR
export async function getProductsAndCategories() {
  const products = await getProducts();
  const categories = await getCategories();

  return { products, categories };
}

export async function getProducts() {
  if (productsCache) return productsCache;
  const values = await getSheetData({ range: 'products!A1:J81' });
  if (!values || values.length < 2) return [];
  const [header, ...rows] = values;
  const products = rows.map(row => {
    const obj = Object.fromEntries(header.map((key, i) => [key, row[i]]));

    return {
      id: obj.id,
      name: obj.name,
      price: Number(obj.price),
      images: obj.images ? obj.images.split(',') : [],
      category: obj.category,
      categoryId: obj.categoryId,
      craftedBy: obj.craftedBy,
      description: obj.description,
      inStock: obj.inStock === 'TRUE' || obj.inStock === true,
      isPopular: obj.isPopular === 'TRUE' || obj.isPopular === true,
      image: obj.image,
    };
  });

  productsCache = products;
  return products;
}

export async function getCategories() {
  if (categoriesCache) return categoriesCache;

  const values = await getSheetData({ range: 'categories!A1:C6' });
  if (!values || values.length < 2) return [];
  const [header, ...rows] = values;
  const categories = rows.map(row => {
    const obj = Object.fromEntries(header.map((key, i) => [key, row[i]]));
    return { id: obj.id, name: obj.name, nameInThai: obj.nameInThai };
  });

  categoriesCache = categories;
  return categories;
}
