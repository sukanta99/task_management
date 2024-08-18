/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
      reactStrictMode: false,
      experimental: {
        missingSuspenseWithCSRBailout: false,
    },
};

export default nextConfig;
