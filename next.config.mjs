// next.config.mjs
import withAntdLess from 'next-plugin-antd-less';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing Next.js config options can go here
};

export default withAntdLess({
  ...nextConfig,
  // You can add Ant Design specific configurations here if needed
});