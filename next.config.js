const nextTranslate = require('next-translate')

/** @type {import('next').NextConfig} */
const nextConfig = nextTranslate({
  reactStrictMode: true,
  swcMinify: true,

  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
})

module.exports = nextConfig