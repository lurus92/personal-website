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
  }
};

export default nextConfig;
