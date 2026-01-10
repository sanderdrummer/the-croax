import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	output: "export",
	basePath: process.env.NODE_ENV === 'production' ? '/the-croax' : '',
	assetPrefix: process.env.NODE_ENV === 'production' ? '/the-croax' : '',
	images: {
		unoptimized: true, // Required for static export
	},
	trailingSlash: true,
};

export default nextConfig;
