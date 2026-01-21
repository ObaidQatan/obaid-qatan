import { JSONLD } from "@/components/layout/JSONLD";
import "@/styles/markdown.css";

export default async function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-background font-sans">
        <JSONLD />
        {children}
      </body>
    </html>
  );
}
