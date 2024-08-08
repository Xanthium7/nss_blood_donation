/** @type {import('next').NextConfig} */
// Configuration options for Next.js

import withPWA from 'next-pwa';
const nextConfig = {
    reactStrictMode: true, 
    swcMinify: true,    
    compiler: {
      removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
    },
};


// Configuration object tells the next-pwa plugin 
const pwaConfig = {
    dest: "public", // Destination directory for the PWA files
    disable: process.env.NODE_ENV === "development", // Disable PWA in development mode for 
    register: true, // Register the PWA service worker
    skipWaiting: true, // Skip waiting for service worker activation
};

// Export the combined configuration for Next.js with PWA support
export default withPWA(pwaConfig)(nextConfig);