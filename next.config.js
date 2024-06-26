
/** @type {import('next').NextConfig} */
const withOptimizedImages = require('next-optimized-images');
// const nextConfig = {
//     output: 'export'
// }
const nextConfig = withOptimizedImages({
    output: 'export'
});

module.exports = nextConfig

