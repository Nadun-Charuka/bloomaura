export interface Product {
  id: string;
  name: string;
  price: number;
  description: string | null;
  image_url: string | null;
  is_available: boolean;
  occasion: string | null;
  created_at: string;
}

export interface FilterOptions {
  price_sort: 'asc' | 'desc' | null;
  availability: boolean | null;
  occasion: string | null;
}

export interface WhatsAppMessage {
  productName: string;
  price: number;
  location?: string;
}
