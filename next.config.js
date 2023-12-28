/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	reactStrictMode: true,
	compress: true,

	experimental: {
		swcPlugins: [['@swc-jotai/react-refresh', {}]]
	}
};

module.exports = nextConfig;
