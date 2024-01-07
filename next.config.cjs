// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	reactStrictMode: true,
	compress: true,

	compiler: {
		reactRemoveProperties: true
	},

	experimental: {
		typedRoutes: true,
		swcPlugins: [['@swc-jotai/react-refresh', {}]]
	}
};

module.exports = nextConfig;
