/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ hostname: "valiant-partridge-243.convex.cloud" },
			{ hostname: "oaidalleapiprodscus.blob.core.windows.net" },
			{ hostname: "agreeable-puma-147.convex.cloud" } // Add this line
		],
	},
};

export default nextConfig;
