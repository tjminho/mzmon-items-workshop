import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // monorepo(mzmon) 안에서 빌드할 때 상위 eslint/next 설정이 끼어들지 않도록
  eslint: { ignoreDuringBuilds: true },
  outputFileTracingRoot: root,
};

export default nextConfig;
