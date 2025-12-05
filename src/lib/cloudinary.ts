// Cloudinary configuration
export const CLOUDINARY_CONFIG = {
  cloudName: 'daxm1morz', // Your Cloudinary cloud name
};

// Helper function to get Cloudinary video URL
export const getCloudinaryVideoUrl = (publicId: string, options?: {
  quality?: 'auto' | 'best' | 'good' | 'eco' | 'low';
  format?: 'auto' | 'mp4' | 'webm';
  width?: number;
  height?: number;
}) => {
  const { quality = 'auto', format = 'auto', width, height } = options || {};
  
  let transformations = `q_${quality},f_${format}`;
  
  if (width) transformations += `,w_${width}`;
  if (height) transformations += `,h_${height}`;
  
  return `https://res.cloudinary.com/${CLOUDINARY_CONFIG.cloudName}/video/upload/${transformations}/${publicId}`;
};

// Helper function to get Cloudinary video thumbnail
export const getCloudinaryThumbnail = (publicId: string, options?: {
  width?: number;
  height?: number;
}) => {
  const { width = 400, height = 400 } = options || {};
  
  return `https://res.cloudinary.com/${CLOUDINARY_CONFIG.cloudName}/video/upload/so_0,w_${width},h_${height},c_fill,q_auto,f_jpg/${publicId}.jpg`;
};
