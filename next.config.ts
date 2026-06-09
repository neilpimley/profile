import type { NextConfig } from "next";
import { dirname } from "path";
import { fileURLToPath } from "url";

const repoRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingRoot: repoRoot,
};

export default nextConfig;
