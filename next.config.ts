import type { NextConfig } from 'next';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY?.split('/')[0];
const basePath =
  process.env.GITHUB_ACTIONS === 'true' && repository && owner && repository !== `${owner}.github.io`
    ? `/${repository}`
    : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
