# How to Find Video Public IDs in Cloudinary

## Method 1: From Media Library (Web Interface)

1. **Login to Cloudinary**: Go to https://cloudinary.com and log in
2. **Open Media Library**: Click "Media Library" in the left sidebar
3. **Find Your Video**: Locate the video you want to use
4. **Click the Video**: Click on the video thumbnail to open details
5. **Copy Public ID**: Look for "Public ID" field and copy the value

### Example:
```
✅ Public ID shown: wefore/reels/reel-1
❌ Don't use the full URL: https://res.cloudinary.com/.../wefore/reels/reel-1.mp4
```

## Method 2: From Video URL

If you have the Cloudinary video URL, extract the Public ID:

**URL Format:**
```
https://res.cloudinary.com/[cloud-name]/video/upload/[version]/[public-id].[extension]
```

**Example:**
```
URL: https://res.cloudinary.com/daxm1morz/video/upload/v1234567890/wefore/reels/sizzling-brownie.mp4

Public ID: wefore/reels/sizzling-brownie
```

**Steps to Extract:**
1. Remove: `https://res.cloudinary.com/daxm1morz/video/upload/`
2. Remove: version number (e.g., `v1234567890/`)
3. Remove: file extension (e.g., `.mp4`)
4. What's left is your Public ID!

## Method 3: From Collections

If you're viewing a collection (like the one you have open):

1. Click on any video in the collection
2. Look for the video details panel
3. Find the "Public ID" or "Asset ID"
4. Copy that value

## Common Public ID Patterns

```typescript
// Videos in root folder
'my-video'
'reel-1'

// Videos in folders
'wefore/reel-1'
'videos/stories/fries'
'2024/december/holiday-campaign'

// Videos in nested folders
'clients/treat-studio/madam-ji'
```

## Quick Reference

| What You See in Cloudinary | Public ID to Use |
|----------------------------|------------------|
| `wefore/reel-1.mp4` | `wefore/reel-1` |
| `samples/sea-turtle.mp4` | `samples/sea-turtle` |
| `story.mov` | `story` |
| `2024/promo.mp4` | `2024/promo` |

## Testing Your Public IDs

After adding Public IDs to `cloudinaryVideos.ts`, you can test by building this URL:

```
https://res.cloudinary.com/daxm1morz/video/upload/[YOUR-PUBLIC-ID].mp4
```

If the video plays in your browser, the Public ID is correct! ✅

## Troubleshooting

### "Public ID not found"
- Check spelling and case (Public IDs are case-sensitive)
- Make sure you removed the file extension
- Verify the folder path is correct

### "Access denied"
- Video might be private
- Check Cloudinary asset permissions
- Ensure your domain is allowed in CORS settings

## Need Help?

If you're stuck, share a screenshot of:
1. Your Cloudinary Media Library showing the video
2. The video details panel
3. Or share the full Cloudinary URL

Then we can extract the exact Public ID together!
