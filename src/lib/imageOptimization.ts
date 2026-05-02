/**
 * Utilities for image optimization
 */

/**
 * Optimizes an Unsplash image URL with specific parameters for resizing, quality, and format.
 * Returns the original URL if it's not an Unsplash image.
 */
export function optimizeImage(url: string, width: number = 800, quality: number = 75): string {
  if (!url) return '';
  
  // If it's an Unsplash URL, append optimization parameters
  if (url.includes('images.unsplash.com')) {
    // Check if it already has parameters
    const separator = url.includes('?') ? '&' : '?';
    
    // Default parameters for Unsplash
    // auto=format ensures the best format (webp/avif) is served
    // fit=crop ensures the aspect ratio is maintained as requested
    return `${url}${separator}w=${width}&q=${quality}&auto=format&fit=crop`;
  }
  if (url.includes('instagram') || url.includes('fbcdn.net')) {
    return `https://images.weserv.nl/?url=${encodeURIComponent(url)}&default=${encodeURIComponent(url)}`;
  }
  
  return url;
}
