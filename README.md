# BloomAura 🌸

A premium flower bouquet e-commerce platform built with Next.js 15, targeting GenZ customers in Western Province, Sri Lanka.

## ✨ Features

- 🎨 **Premium UI/UX** - Glassmorphism design with floral color palette
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 💬 **WhatsApp Integration** - Direct customer consultation via WhatsApp
- 🔍 **Advanced Filtering** - Filter by price, availability, and occasion
- ⚡ **Real-time Updates** - Live product availability with Supabase
- 🎭 **Smooth Animations** - Framer Motion for delightful interactions
- 🔐 **Admin Panel** - Secure product management (coming soon)
- 🚀 **SEO Optimized** - Local SEO for "Fresh Flower Delivery Colombo"

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Animations**: Framer Motion
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth (Google OAuth)
- **Storage**: Supabase Storage

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with SEO
│   └── page.tsx           # Homepage
├── components/
│   └── ui/                # Shadcn UI components
├── core/
│   ├── constants/         # App constants
│   ├── supabase/          # Supabase client
│   └── types/             # TypeScript types
└── features/              # Feature-Sliced Design
    ├── catalog/
    │   ├── components/    # Product cards, grid, filters
    │   └── view-models/   # useCatalog hook (MVVM)
    ├── whatsapp/
    │   ├── components/    # WhatsApp button
    │   └── utils/         # Message generation
    └── admin/             # Admin panel (coming soon)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Supabase account

### Installation

1. **Clone the repository**
   ```bash
   cd bloomaura
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Follow the detailed guide in [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)
   - Create a `.env.local` file with your credentials:
     ```env
     NEXT_PUBLIC_SUPABASE_URL=your-project-url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
     NEXT_PUBLIC_ADMIN_EMAIL=your-email@example.com
     ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Update WhatsApp Number
Edit `src/core/constants/index.ts`:
```typescript
export const WHATSAPP_NUMBER = '+94771234567'; // Your number
```

### Modify Color Palette
Edit `src/app/globals.css` to change the floral color scheme.

### Add/Edit Occasions
Edit `src/core/constants/index.ts`:
```typescript
export const OCCASIONS = [
  'Anniversary',
  'Birthday',
  // Add more...
];
```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🧪 Testing

The project includes sample data for testing. To add your own products:

1. Go to Supabase Table Editor
2. Add products to the `products` table
3. Upload images to the `product-images` storage bucket
4. Update the `image_url` field with the public URL

## 🎯 SEO Optimization

The app is optimized for local SEO:
- Meta tags for "Fresh Flower Delivery Colombo"
- Open Graph tags for social sharing
- Structured data ready
- Optimized images with Next.js Image component

## 🔐 Admin Panel (Coming Soon)

The admin panel will include:
- Google OAuth authentication
- Product CRUD operations
- Image upload functionality
- Inventory management

## 📄 License

This project is private and proprietary.

## 🤝 Support

For issues or questions, please contact the development team.

---

Made with 💝 by BloomAura
