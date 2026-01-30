-- BloomAura Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL CHECK (price >= 0),
  description TEXT,
  image_url TEXT,
  is_available BOOLEAN DEFAULT true,
  occasion TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_products_is_available ON products(is_available);
CREATE INDEX IF NOT EXISTS idx_products_occasion ON products(occasion);
CREATE INDEX IF NOT EXISTS idx_products_created_at ON products(created_at DESC);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Public read access (anyone can view products)
CREATE POLICY "Public read access" ON products
  FOR SELECT
  USING (true);

-- Admin write access (replace 'your-email@example.com' with your actual admin email)
CREATE POLICY "Admin write access" ON products
  FOR ALL
  USING (auth.email() = 'your-email@example.com');

-- Create storage bucket for product images
INSERT INTO storage.buckets (id, name, public)
VALUES ('product-images', 'product-images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for product images
CREATE POLICY "Public read access for product images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'product-images');

CREATE POLICY "Admin upload access for product images"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'product-images' AND
    auth.email() = 'your-email@example.com'
  );

CREATE POLICY "Admin update access for product images"
  ON storage.objects FOR UPDATE
  USING (
    bucket_id = 'product-images' AND
    auth.email() = 'your-email@example.com'
  );

CREATE POLICY "Admin delete access for product images"
  ON storage.objects FOR DELETE
  USING (
    bucket_id = 'product-images' AND
    auth.email() = 'your-email@example.com'
  );

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically update updated_at
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data (optional)
INSERT INTO products (name, price, description, occasion, is_available) VALUES
  ('Romantic Rose Bouquet', 4500.00, 'A stunning arrangement of 12 premium red roses, perfect for expressing your love.', 'Valentine''s Day', true),
  ('Spring Garden Mix', 3200.00, 'A vibrant mix of seasonal flowers including tulips, daisies, and carnations.', 'Birthday', true),
  ('Elegant Lily Collection', 5800.00, 'Sophisticated white lilies arranged with eucalyptus and baby''s breath.', 'Anniversary', true),
  ('Sunflower Sunshine', 2900.00, 'Bright and cheerful sunflowers to brighten anyone''s day.', 'Just Because', true),
  ('Lavender Dreams', 3800.00, 'Calming lavender bouquet with purple accents and soft greenery.', 'Mother''s Day', false);
