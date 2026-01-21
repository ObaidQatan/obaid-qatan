"use client";

import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import {
  User,
  Code,
  Briefcase,
  FolderRoot,
  Mail,
  CloudCog,
  PencilRuler,
} from "lucide-react";
import { motion } from "motion/react";
import { CursorTrigger } from "../animate-ui/primitives/animate/cursor";

const navItems = [
  { id: "about", icon: User, label: "profile" },
  { id: "skills", icon: Code, label: "skills" },
  { id: "experience", icon: Briefcase, label: "workExperience" },
  { id: "projects", icon: FolderRoot, label: "portfolio" },
  { id: "contact", icon: Mail, label: "contactMe" },
];

const services = [
  { id: "mco", icon: CloudCog, label: "managedCloudOperations" },
  { id: "sam", icon: PencilRuler, label: "supportAndMaintenance" },
];

export function Sidebar({
  sidebarOpen,
}: {
  setSidebarOpen: (open: boolean) => void;
  sidebarOpen: boolean;
}) {
  const t = useTranslations("common");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.aside
      initial={{
        x:
          (isRTL && !sidebarOpen) || (!isRTL && sidebarOpen) ? "-100%" : "100%",
        animationDelay: 0.2,
      }}
      animate={{ x: sidebarOpen ? 0 : isRTL ? "100%" : "-100%" }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed top-0 bottom-0 h-screen w-16 lg:w-64 start-0 border-e bg-card/50 backdrop-blur-md z-50 transition-all duration-300 max-lg:top-2 max-lg:start-2 max-lg:bottom-auto max-lg:border max-lg:h-auto max-lg:rounded-full",
      )}
    >
      <div className="flex flex-col h-full py-8">
        <div className="px-4 mb-12 flex justify-center lg:justify-start max-lg:flex-col max-lg:items-center">
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
            <CursorTrigger key={item.id} asChild type="pointer">
              <button
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group",
                  "hover:bg-accent hover:text-accent-foreground",
                  "text-muted-foreground",
                )}
              >
                <item.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                <span className="hidden lg:inline font-medium text-sm capitalize">
                  {t(item.label)}
                </span>
              </button>
            </CursorTrigger>
          ))}

          <hr className="my-4" />

          <h3 className="text-sm font-medium px-3 text-primary hidden lg:inline">
            {t("myServices")}
          </h3>

          {services.map((item) => (
            <CursorTrigger key={item.id} asChild type="pointer">
              <Link
                href={`/pricing/${item.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group",
                  "hover:bg-accent hover:text-accent-foreground",
                  "text-muted-foreground",
                )}
              >
                <item.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                <span className="hidden lg:inline font-medium text-sm capitalize">
                  {t(item.label)}
                </span>
              </Link>
            </CursorTrigger>
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
    </motion.aside>
  );
}
