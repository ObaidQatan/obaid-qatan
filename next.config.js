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

nextConfig.images = {
  domains: [
    "avatars.githubusercontent.com",
    "img.icons8.com",
    "e.top4top.io",
    "j.top4top.io",
    "l.top4top.io",
    "a.top4top.io",
    "i.top4top.io",
    "k.top4top.io",
    "h.top4top.io",
    "d.top4top.io",
  ],
}

module.exports = nextConfig