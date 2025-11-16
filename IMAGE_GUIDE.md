# Product Image Guide

## Folder Structure

```
public/
└── products/
    ├── fidget-toys/     # For Baby & Big articulated fidget animals
    └── flexi-zoo/       # For Flexi Zoo Models
```

## How to Add Images

### Step 1: Prepare Your Images
- **Format**: JPG, PNG, or WebP (WebP recommended for best performance)
- **Size**: Recommend 800x800px or 1000x1000px (square aspect ratio works best)
- **File naming**: Use lowercase with hyphens
  - Examples: `baby-dragon.jpg`, `flexi-wolf.jpg`, `mini-axolotl.png`

### Step 2: Add Images to Folders

**For Fidget Toys (Baby/Big):**
- Place images in: `/public/products/fidget-toys/`
- Example filenames:
  - `baby-dragon.jpg`
  - `baby-shark.jpg`
  - `big-dragon.jpg`
  - `big-shark.jpg`

**For Flexi Zoo Models:**
- Place images in: `/public/products/flexi-zoo/`
- Example filenames:
  - `wolf.jpg`
  - `red-panda.jpg`
  - `mini-axolotl.jpg`
  - `hognose-keychain.jpg`

### Step 3: Update Product Data

Once images are added, update the `image` field in `/src/lib/products.ts`:

**Before:**
```typescript
{
  id: 'baby-dragon',
  name: 'Baby Dragon - Articulated Fidget',
  image: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=500&q=80',
  // ... other fields
}
```

**After:**
```typescript
{
  id: 'baby-dragon',
  name: 'Baby Dragon - Articulated Fidget',
  image: '/products/fidget-toys/baby-dragon.jpg',
  // ... other fields
}
```

### Step 4: Test Locally

Run your dev server and check if images load:
```bash
npm run dev
```

Visit: http://localhost:3000/products

### Step 5: Deploy

Commit and push your changes:
```bash
git add .
git commit -m "Add product images"
git push
```

## Image Requirements

### Recommended Specs:
- **Resolution**: 800x800px to 1200x1200px
- **Aspect Ratio**: 1:1 (square)
- **Format**: WebP (best compression) or JPG
- **File Size**: Under 200KB per image (compress if needed)
- **Background**: White, transparent, or solid color

### Free Image Compression Tools:
- TinyPNG: https://tinypng.com/
- Squoosh: https://squoosh.app/
- ImageOptim (Mac): https://imageoptim.com/

## Bulk Updates

If you have many images to add, I can help you:
1. Generate a script to bulk update the products.ts file
2. Create a mapping file for batch updates
3. Set up an automated image optimization workflow

Just let me know which products you want to update first!
