const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
    /* Add Your Scss File Folder Path Here */
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    experimental: {
        serverActions: true,
      }
  }
  