import { google } from 'googleapis';
import memoize from 'lodash/memoize';

const sheets = google.sheets('v4');

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

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

export const getProducts = memoize(async () => {
  const values = await getSheetData({ range: 'products!A1:J81' });
  if (!values || values.length < 2) return [];
  const [header, ...rows] = values;
  const products = rows.map(row => {
    const obj = Object.fromEntries(header.map((key, i) => [key, row[i]]));

    return {
      id: obj.id,
      name: obj.name,
      price: Number(obj.price),
      categoryId: obj.categoryId,
      craftedBy: obj.craftedBy,
      description: obj.description,
      inStock: obj.inStock === 'TRUE',
      isPopular: obj.isPopular === 'TRUE',
      image: obj.image,
    };
  });

  return products;
});

export const getCategories = memoize(async () => {
  const values = await getSheetData({ range: 'categories!A1:C6' });
  if (!values || values.length < 2) return [];
  const [header, ...rows] = values;
  const categories = rows.map(row => {
    const obj = Object.fromEntries(header.map((key, i) => [key, row[i]]));
    return { id: obj.id, name: obj.name, nameInThai: obj.nameInThai };
  });

  return categories;
});
