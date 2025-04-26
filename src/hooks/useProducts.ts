import { useQuery } from '@tanstack/react-query';

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch('/api/sheet');
      if (!res.ok) throw new Error('Failed to fetch products');
      const { data } = await res.json();
      // You may want to map/transform data here if needed
      return data;
    },
  });
}

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await fetch('/api/categories');
      if (!res.ok) throw new Error('Failed to fetch categories');
      const { data } = await res.json();
      return data;
    },
  });
}
