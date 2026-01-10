/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Skip ESLint during `next build` so the build can complete while we
    // address the project-specific ESLint CLI option incompatibility.
    ignoreDuringBuilds: true
  },
  experimental: {
    mdxRs: true
  },
  // Enable static export for static site generation
  output: 'export',
  // Configure trailing slashes for static hosting compatibility
  trailingSlash: true,
  // Image optimization for static export
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
