/**
 * COPY-PASTE TEMPLATE for Adding Cloudinary Videos
 * ==================================================
 * 
 * Use this template to quickly add your videos.
 * 
 * INSTRUCTIONS:
 * 1. For each video in Cloudinary, copy a line from the template below
 * 2. Replace 'your-public-id-here' with the actual Public ID
 * 3. Copy the entire array to cloudinaryVideos.ts
 */

// ===================================
// TEMPLATE FOR REELS
// ===================================

export const cloudinaryReels_TEMPLATE = [
  // Copy these lines and replace with your Public IDs:
  'wefore/reels/video-1',
  'wefore/reels/video-2',
  'wefore/reels/video-3',
  'wefore/reels/video-4',
  'wefore/reels/video-5',
  'wefore/reels/video-6',
  'wefore/reels/video-7',
  'wefore/reels/video-8',
  'wefore/reels/video-9',
  'wefore/reels/video-10',
  // Add more as needed...
];

// ===================================
// TEMPLATE FOR STORIES
// ===================================

export const cloudinaryStories_TEMPLATE = [
  // Copy these lines and replace with your Public IDs:
  'wefore/stories/story-1',
  'wefore/stories/story-2',
  'wefore/stories/story-3',
  'wefore/stories/story-4',
  'wefore/stories/story-5',
  // Add more as needed...
];

// ===================================
// EXAMPLE: Migrating from your current local videos
// ===================================

/*
If your current local video path is:
  /videos/reels/sizzling-brownie.mp4

And you upload it to Cloudinary in folder "wefore/reels/",
the Public ID will be:
  wefore/reels/sizzling-brownie

So the entry becomes:
  'wefore/reels/sizzling-brownie',
*/

// ===================================
// FULL EXAMPLE (Based on your current videos)
// ===================================

// If you upload all your current videos to Cloudinary with the same names,
// they would look like this:

export const cloudinaryReels_EXAMPLE = [
  // Named videos
  'wefore/reels/sizzling-brownie',
  'wefore/reels/platinum-events',
  'wefore/reels/treat-studio-madam-ji',
  'wefore/reels/treat-studio-reel',
  'wefore/reels/tumble-dry-final',
  'wefore/reels/tumble-reel-3',
  
  // Numbered videos
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

export const cloudinaryStories_EXAMPLE = [
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

// ===================================
// CHECKLIST
// ===================================

/*
Before copying to cloudinaryVideos.ts, verify:

□ Each Public ID is correct (no typos)
□ No file extensions (.mp4, .mov) in the Public IDs
□ Folder paths match your Cloudinary organization
□ Public IDs are case-sensitive and match exactly
□ You've tested at least one video URL:
  https://res.cloudinary.com/daxm1morz/video/upload/[PUBLIC-ID].mp4

Once verified:
□ Copy the array to src/config/cloudinaryVideos.ts
□ Run `npm run dev` to test
□ Check the Portfolio section in your browser
□ If all works, commit and push to deploy!
*/
