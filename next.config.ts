import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The Koolidele page was merged into the landing page.
  async redirects() {
    return [{ source: "/koolidele", destination: "/", permanent: true }];
  },
};

export default nextConfig;
