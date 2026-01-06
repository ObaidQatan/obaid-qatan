"use client";

import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import { User, Code, Briefcase, FolderRoot, Mail } from "lucide-react";

const navItems = [
  { id: "about", icon: User, label: "profile" },
  { id: "skills", icon: Code, label: "skills" },
  { id: "experience", icon: Briefcase, label: "workExperience" },
  { id: "projects", icon: FolderRoot, label: "portfolio" },
  { id: "contact", icon: Mail, label: "contactMe" },
];

export function Sidebar() {
  const t = useTranslations("common");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      className={cn(
        "fixed top-0 bottom-0 h-screen w-16 lg:w-64 border-r bg-card/50 backdrop-blur-md z-50 transition-all duration-300",
        isArabic ? "right-0 border-l" : "left-0 border-r"
      )}
    >
      <div className="flex flex-col h-full py-8">
        <div className="px-4 mb-12 flex justify-center lg:justify-start">
          <Link
            href="/"
            className="text-primary font-heading font-black text-2xl tracking-tighter"
          >
            <span className="lg:hidden">OQ</span>
            <span className="hidden lg:inline">OBAID QATAN</span>
          </Link>
        </div>

        <nav className="flex-1 space-y-2 px-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group",
                "hover:bg-accent hover:text-accent-foreground",
                "text-muted-foreground"
              )}
            >
              <item.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
              <span className="hidden lg:inline font-medium text-sm capitalize">
                {t(item.label)}
              </span>
            </button>
          ))}
        </nav>

        <div className="px-4 mt-auto">
          <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 hidden lg:block">
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t("builtWithHeartBy")} <br />
              <span className="text-foreground font-semibold">Obaid Qatan</span>
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
