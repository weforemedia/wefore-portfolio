# Cloudinary Video Integration Guide

This guide will help you add your videos from Cloudinary to your WeFore portfolio website.

## 📋 Prerequisites

- A Cloudinary account (free tier works fine)
- Your videos uploaded to Cloudinary
- Your Cloudinary cloud name: `daxm1morz`

## 🎥 How to Add Videos from Cloudinary

### Step 1: Upload Videos to Cloudinary

1. Go to [Cloudinary.com](https://cloudinary.com) and log in
2. Navigate to the Media Library
3. Click "Upload" and select your videos
4. Organize them in folders if desired (e.g., `wefore/reels`, `wefore/stories`)

### Step 2: Get the Public ID

For each video in Cloudinary, you need the **Public ID**. Here's how to find it:

1. Click on a video in your Media Library
2. Look for the "Public ID" field (it's usually shown prominently)
3. Example Public IDs:
   - `samples/sea-turtle` (folder/filename)
   - `wefore/reel-1`
   - `my-video` (if in root)

**Important**: The Public ID does NOT include the file extension (.mp4, .mov, etc.)

### Step 3: Add Public IDs to Configuration

Open the file: `src/config/cloudinaryVideos.ts`

Replace the sample videos with your actual Public IDs:

```typescript
// For Reels (vertical videos)
export const cloudinaryReels = [
  'wefore/sizzling-brownie',
  'wefore/platinum-events',
  'wefore/treat-studio-madam-ji',
  // Add more...
];

// For Stories (vertical videos)
export const cloudinaryStories = [
  'wefore/fries',
  'wefore/garlic-potato-pops',
  'wefore/honey-chilli-potato',
  // Add more...
];
```

### Step 4: Test Locally

Run your development server:

```bash
npm run dev
```

Visit `http://localhost:5173` and check the Portfolio section.

### Step 5: Deploy to Vercel

Once everything looks good locally:

```bash
git add .
git commit -m "Add Cloudinary video integration"
git push origin main
```

Vercel will automatically deploy your changes!

## 🎨 Features Included

✅ **Automatic Optimization** - Videos are automatically optimized by Cloudinary for web delivery
✅ **Thumbnail Loading** - Shows thumbnails before videos load for faster perceived performance
✅ **Hover to Play** - Videos play on hover in the portfolio grid
✅ **Responsive** - Works perfectly on all device sizes
✅ **Lazy Loading** - Videos load only when needed
✅ **Format Selection** - Cloudinary serves the best format (WebM, MP4, etc.) based on browser

## 📁 File Structure

```
src/
├── components/
│   ├── CloudinaryVideo.tsx       # Reusable Cloudinary video component
│   └── PortfolioSection.tsx      # Portfolio section using Cloudinary videos
├── config/
│   └── cloudinaryVideos.ts       # 👈 Add your video IDs here
└── lib/
    └── cloudinary.ts             # Cloudinary utility functions
```

## 🔧 Customization

### Change Video Quality

Edit `src/lib/cloudinary.ts` and modify the quality setting:

```typescript
quality: 'auto',  // Options: 'auto', 'best', 'good', 'eco', 'low'
```

### Change Video Dimensions

In `src/components/PortfolioSection.tsx`, adjust the width/height props:

```tsx
<CloudinaryVideo
  width={400}   // Adjust as needed
  height={711}  // Adjust as needed
/>
```

### Mix Local and Cloudinary Videos

If you want some videos from Cloudinary and some local, you can:

1. Keep local videos in the `reels`, `stories` arrays
2. Create separate `PortfolioRow` components with `useCloudinary={false}` for local videos

## 🆘 Troubleshooting

### Videos Not Loading?

1. **Check the Public ID** - Make sure it matches exactly what's in Cloudinary (case-sensitive)
2. **Check Cloud Name** - Verify `cloudName: 'daxm1morz'` in `src/lib/cloudinary.ts`
3. **Check Console** - Open browser DevTools (F12) and check for errors
4. **CORS Issues** - Ensure your Cloudinary account has proper CORS settings for your domain

### Videos Are Slow?

1. Cloudinary should automatically optimize, but you can:
   - Reduce the `width` and `height` values
   - Change quality to `'good'` or `'eco'` instead of `'auto'`

## 📚 Resources

- [Cloudinary Docs](https://cloudinary.com/documentation)
- [Cloudinary Video Transformations](https://cloudinary.com/documentation/video_manipulation_and_delivery)
- [Cloudinary React SDK](https://cloudinary.com/documentation/react_integration)

## 💡 Tips

- **Organize with Folders**: Use folders in Cloudinary like `wefore/reels/`, `wefore/stories/` for better organization
- **Video Formats**: Upload in MP4 for best compatibility, Cloudinary will convert as needed
- **Resolution**: Upload high-quality videos (1080p), Cloudinary will create optimized versions
- **Batch Upload**: You can upload multiple videos at once in Cloudinary

---

Need help? Check the comments in `src/config/cloudinaryVideos.ts` for more examples!
