// Placeholder for Supabase generated types
// Run: npx supabase gen types typescript --project-id YOUR_PROJECT_ID > src/core/types/database.ts

export type Database = {
  public: {
    Tables: {
      products: {
        Row: {
          id: string;
          name: string;
          price: number;
          description: string | null;
          image_url: string | null;
          is_available: boolean;
          occasion: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          price: number;
          description?: string | null;
          image_url?: string | null;
          is_available?: boolean;
          occasion?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          price?: number;
          description?: string | null;
          image_url?: string | null;
          is_available?: boolean;
          occasion?: string | null;
          created_at?: string;
        };
      };
    };
  };
};
