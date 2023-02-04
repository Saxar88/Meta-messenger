/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			"links.papareact.com",
			"img.over-blog-kiwi.com",
			"smarthistory.org",
		],
	},
	experimental: {
		appDir: true,
	},
};

module.exports = nextConfig;
