import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { JSONLD } from "@/components/layout/JSONLD";
import "@/styles/markdown.css";

export default async function LegalLayout({
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

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body className="antialiased min-h-screen bg-background font-sans">
        <JSONLD />
        {children}
      </body>
    </html>
  );
}
