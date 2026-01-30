# BloomAura - Supabase Setup Guide

## Prerequisites
- A Supabase account (sign up at https://supabase.com)
- Your admin email address for authentication

## Step 1: Create a Supabase Project

1. Go to https://app.supabase.com
2. Click "New Project"
3. Fill in the details:
   - **Name**: BloomAura
   - **Database Password**: Choose a strong password (save this!)
   - **Region**: Choose the closest region to Sri Lanka (e.g., Singapore)
4. Click "Create new project" and wait for it to initialize (~2 minutes)

## Step 2: Get Your API Credentials

1. In your Supabase project dashboard, click on the **Settings** icon (gear) in the sidebar
2. Navigate to **API** section
3. Copy the following values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon/public key** (a long string starting with `eyJ...`)

## Step 3: Configure Environment Variables

1. In your BloomAura project, create a file named `.env.local` in the root directory
2. Copy the contents from `.env.local.example`
3. Replace the placeholder values:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   NEXT_PUBLIC_ADMIN_EMAIL=your-email@example.com
   ```

## Step 4: Run the Database Migration

1. In your Supabase project dashboard, click on the **SQL Editor** icon in the sidebar
2. Click "New Query"
3. Open the `supabase-schema.sql` file from your project
4. **IMPORTANT**: Replace `'your-email@example.com'` with your actual admin email (the one you'll use for Google login)
5. Copy and paste the entire SQL script into the editor
6. Click "Run" to execute the migration

## Step 5: Enable Google Authentication

1. In Supabase dashboard, go to **Authentication** → **Providers**
2. Find **Google** in the list and click to expand
3. Toggle "Enable Sign in with Google" to ON
4. You'll need to set up Google OAuth:
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project or select existing
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URI: `https://your-project.supabase.co/auth/v1/callback`
   - Copy Client ID and Client Secret to Supabase
5. Click "Save"

## Step 6: Verify the Setup

1. Go to **Table Editor** in Supabase
2. You should see the `products` table with 5 sample products
3. Go to **Storage** and verify the `product-images` bucket exists

## Step 7: Test the Application

1. Start your Next.js development server:
   ```bash
   npm run dev
   ```
2. Open http://localhost:3000
3. You should see the sample products displayed

## Uploading Product Images

### Option 1: Via Supabase Dashboard
1. Go to **Storage** → **product-images** bucket
2. Click "Upload file"
3. Upload your product images
4. Copy the public URL
5. Update the product's `image_url` in the **Table Editor**

### Option 2: Via Admin Panel (Coming Soon)
The admin panel will allow you to upload images directly through the UI.

## Troubleshooting

### "Missing Supabase environment variables" Error
- Make sure `.env.local` exists and has the correct values
- Restart your development server after creating/updating `.env.local`

### Products Not Loading
- Check browser console for errors
- Verify your Supabase URL and anon key are correct
- Ensure the `products` table exists in Table Editor

### Authentication Issues
- Verify your admin email is correctly set in the RLS policies
- Check that Google OAuth is properly configured
- Ensure the redirect URI matches exactly

## Next Steps

Once your database is set up and the app is running:
1. Replace sample products with your actual bouquets
2. Upload high-quality product images (recommended: 800x800px, WebP format)
3. Update the WhatsApp number in `src/core/constants/index.ts`
4. Customize the SEO metadata for your business

## Need Help?

- Supabase Documentation: https://supabase.com/docs
- Next.js Documentation: https://nextjs.org/docs
