"use client";

import { useLocale } from "next-intl";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { cn } from "@/lib/utils";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <div className="relative min-h-screen">
      <Sidebar />
      <Navbar />
      <div
        className={cn(
          "transition-all duration-300 min-h-screen",
          isArabic ? "pr-16 lg:pr-64" : "pl-16 lg:pl-64"
        )}
      >
        {children}
      </div>
    </div>
  );
}
