import type { Metadata } from "next";
import { Cairo, Outfit, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "@/components/theme-provider";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { cn } from "@/lib/utils";
import { JSONLD } from "@/components/layout/JSONLD";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  await params;

  return {
    title: "Obaid Qatan",
    description: "Portfolio of Obaid Qatan - Senior Full-stack Developer",
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function MainLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "en" | "ar" | "id")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body
        className={cn("antialiased min-h-screen bg-background font-sans", {
          [cairo.variable]: locale === "ar",
          [outfit.variable]: locale !== "ar",
          [inter.variable]: locale !== "ar",
        })}
      >
        <JSONLD />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            // disableTransitionOnChange
          >
            <PageWrapper>{children}</PageWrapper>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
