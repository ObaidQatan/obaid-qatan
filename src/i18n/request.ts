import { getRequestConfig } from "next-intl/server";
import { routing } from "@/i18n/routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as "en" | "ar" | "id")) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: {
      common: (await import(`../messages/${locale}/common.json`)).default,
      profile: (await import(`../messages/${locale}/profile.json`)).default,
      portfolio: (await import(`../messages/${locale}/portfolio.json`)).default,
      "404": (await import(`../messages/${locale}/404.json`)).default,
    },
  };
});
