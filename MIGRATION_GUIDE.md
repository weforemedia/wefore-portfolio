# Migration Guide: Moving from Local Videos to Cloudinary

## Current Local Videos in Your Project

Based on your `PortfolioSection.tsx`, here are the videos you currently reference locally:

### 📹 Reels (32 videos)
```
/videos/reels/sizzling-brownie.mp4
/videos/reels/platinum-events.mp4
/videos/reels/treat-studio-madam-ji.mp4
/videos/reels/treat-studio-reel.mp4
/videos/reels/tumble-dry-final.mp4
/videos/reels/tumble-reel-3.mp4
/videos/reels/reel-1.mp4
/videos/reels/reel-2.mov
/videos/reels/reel-3.mp4
/videos/reels/reel-4.mp4
/videos/reels/reel-5.mp4
/videos/reels/reel-6.mp4
/videos/reels/reel-7.mp4
/videos/reels/reel-8.mp4
/videos/reels/reel-9.mp4
/videos/reels/reel-10.mov
/videos/reels/reel-11.mp4
/videos/reels/reel-12.mp4
/videos/reels/reel-13.mp4
/videos/reels/reel-14.mp4
/videos/reels/reel-15.mp4
/videos/reels/reel-16.mp4
/videos/reels/reel-17.mp4
/videos/reels/reel-18.mp4
/videos/reels/reel-19.mp4
/videos/reels/reel-20.mp4
/videos/reels/reel-21.mp4
/videos/reels/reel-22.mov
/videos/reels/reel-23.mp4
/videos/reels/reel-24.mp4
/videos/reels/reel-25.mp4
/videos/reels/reel-26.mp4
```

### 📱 Stories (14 videos)
```
/videos/stories/fries.mp4
/videos/stories/garlic-potato-pops.mp4
/videos/stories/honey-chilli-potato.mp4
/videos/stories/honey-chilli-story.mp4
/videos/stories/korean-fries.mp4
/videos/stories/nacho-stories.mp4
/videos/stories/pancake.mp4
/videos/stories/pasta-story.mp4
/videos/stories/pink-alfredo-pasta.mp4
/videos/stories/potato-twister-story.mp4
/videos/stories/potato-twister-story-2.mp4
/videos/stories/tumble-dry-post.mp4
/videos/stories/story.mp4
/videos/stories/story-20250807.mp4
```

## 📝 Migration Checklist

### Step 1: Prepare Videos for Upload

1. [ ] Locate all local videos in `public/videos/reels/` folder
2. [ ] Locate all local videos in `public/videos/stories/` folder
3. [ ] Verify video quality and format (MP4 is recommended)

### Step 2: Upload to Cloudinary

#### Option A: Bulk Upload via Web Interface

1. Go to Cloudinary Media Library
2. Create folders:
   - `wefore/reels`
   - `wefore/stories`
3. Drag and drop all reel videos to `wefore/reels`
4. Drag and drop all story videos to `wefore/stories`

#### Option B: Use Cloudinary Upload Widget

1. Install Cloudinary CLI: `npm install cloudinary-cli -g`
2. Configure: `cld config`
3. Upload folder: `cld upload_dir public/videos/reels wefore/reels`

### Step 3: Create Public ID Mapping

After uploading to Cloudinary with the suggested folder structure, your Public IDs will be:

#### Reels Public IDs
```typescript
export const cloudinaryReels = [
  'wefore/reels/sizzling-brownie',
  'wefore/reels/platinum-events',
  'wefore/reels/treat-studio-madam-ji',
  'wefore/reels/treat-studio-reel',
  'wefore/reels/tumble-dry-final',
  'wefore/reels/tumble-reel-3',
  'wefore/reels/reel-1',
  'wefore/reels/reel-2',
  'wefore/reels/reel-3',
  'wefore/reels/reel-4',
  'wefore/reels/reel-5',
  'wefore/reels/reel-6',
  'wefore/reels/reel-7',
  'wefore/reels/reel-8',
  'wefore/reels/reel-9',
  'wefore/reels/reel-10',
  'wefore/reels/reel-11',
  'wefore/reels/reel-12',
  'wefore/reels/reel-13',
  'wefore/reels/reel-14',
  'wefore/reels/reel-15',
  'wefore/reels/reel-16',
  'wefore/reels/reel-17',
  'wefore/reels/reel-18',
  'wefore/reels/reel-19',
  'wefore/reels/reel-20',
  'wefore/reels/reel-21',
  'wefore/reels/reel-22',
  'wefore/reels/reel-23',
  'wefore/reels/reel-24',
  'wefore/reels/reel-25',
  'wefore/reels/reel-26',
];
```

#### Stories Public IDs
```typescript
export const cloudinaryStories = [
  'wefore/stories/fries',
  'wefore/stories/garlic-potato-pops',
  'wefore/stories/honey-chilli-potato',
  'wefore/stories/honey-chilli-story',
  'wefore/stories/korean-fries',
  'wefore/stories/nacho-stories',
  'wefore/stories/pancake',
  'wefore/stories/pasta-story',
  'wefore/stories/pink-alfredo-pasta',
  'wefore/stories/potato-twister-story',
  'wefore/stories/potato-twister-story-2',
  'wefore/stories/tumble-dry-post',
  'wefore/stories/story',
  'wefore/stories/story-20250807',
];
```

### Step 4: Update Configuration

Copy the arrays above and paste them into:
`src/config/cloudinaryVideos.ts`

### Step 5: Test Locally

```bash
npm run dev
```

Visit http://localhost:8080 and verify all videos load correctly.

### Step 6: Deploy

```bash
git add .
git commit -m "Migrate videos to Cloudinary"
git push origin main
```

### Step 7: Cleanup (Optional)

After confirming everything works on production:

1. [ ] Delete local video files from `public/videos/` to reduce repo size
2. [ ] Update `.gitignore` to ignore future video uploads
3. [ ] Commit and push the cleanup

## 🎯 Benefits of Migration

✅ **Faster Loading** - Cloudinary's CDN delivers videos faster globally
✅ **Optimized Delivery** - Automatic format conversion and quality optimization
✅ **Smaller Repo** - Remove large video files from your Git repository
✅ **Better Performance** - Reduced build times and deployment sizes
✅ **Easy Updates** - Update videos in Cloudinary without redeploying

## ⚠️ Important Notes

- **Keep backups** of your local videos until fully migrated
- **Test thoroughly** before deleting local files
- **Check video names** - ensure they match between local and Cloudinary
- **Verify permissions** - make sure videos are publicly accessible in Cloudinary

## 📊 Estimated File Sizes

Typical video sizes (rough estimate):
- 32 reels × ~5MB = ~160MB
- 14 stories × ~3MB = ~42MB
- **Total: ~200MB** of videos to migrate

By moving to Cloudinary, you'll reduce your repository size significantly!

## Need Help?

If you encounter issues during migration:
1. Check video upload status in Cloudinary
2. Verify Public IDs match the expected format
3. Test individual videos using the direct Cloudinary URL
4. Review browser console for errors

Happy migrating! 🚀
