/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
output: 'export',
    images: {
        domains: ["cdn.imagin.studio"]
    }
}

module.exports = nextConfig
