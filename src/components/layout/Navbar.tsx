"use client";

import { MenuIcon, Moon, Sun, XIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import LanguageSelector from "../common/language-selector";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { CursorTrigger } from "../animate-ui/primitives/animate/cursor";

const externalLinks = [
  {
    url: "https://mostaql.com/u/Obaid_Qatan",
    label: "mostaql",
    iconSrc: "/mostaql.png",
  },
  {
    url: "https://www.upwork.com/freelancers/~01362e9dd3e6b6812b",
    label: "upwork",
    iconSrc: "/upwork.ico",
  },
  {
    url: "https://drive.google.com/file/d/1AP0fKLf4WFzBYL3SImvMLnrbZXQfLMcP/view",
    label: "resume",
    iconSrc: "/pdf.png",
  },
];

export function Navbar({
  setSidebarOpen,
  sidebarOpen,
}: {
  setSidebarOpen: (open: boolean) => void;
  sidebarOpen: boolean;
}) {
  const { setTheme, theme } = useTheme();
  const t = useTranslations("common");
  const locale = useLocale();

  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-40 flex items-center justify-end px-6 pointer-events-none">
      <div className="flex items-center gap-4 pointer-events-auto bg-card/80 backdrop-blur-sm border p-1 rounded-full px-2">
        {/* Sidebar Toggle */}
        <Button
          variant="outline"
          size="icon"
          className="rounded-full overflow-hidden relative"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <XIcon
            className={cn(
              "transition-all duration-300 absolute",
              sidebarOpen ? "translate-y-0" : "-translate-y-[200%]",
            )}
          />
          <MenuIcon
            className={cn(
              "transition-all duration-300 absolute",
              sidebarOpen ? "-translate-y-[200%]" : "translate-y-0",
            )}
          />
        </Button>
        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-primary" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-primary" />
          <span className="sr-only">Toggle theme</span>
        </Button>

        {/* Language Selector */}
        <LanguageSelector />

        <DropdownMenu dir={locale === "ar" ? "rtl" : "ltr"}>
          <CursorTrigger asChild type="pointer">
            <DropdownMenuTrigger>
              {/* Avatar */}
              <Avatar className="h-10 w-10 border-2 border-primary cursor-pointer hover:scale-110 transition-transform">
                <AvatarImage src="/avatar.jpg" alt="Obaid Qatan" />
                <AvatarFallback className="bg-primary text-primary-foreground font-bold">
                  OQ
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
          </CursorTrigger>
          <DropdownMenuContent align="end">
            <h3 className="text-sm font-medium text-muted-foreground p-2">
              {t("externalLinks")}
            </h3>
            <hr className="my-1" />
            {externalLinks.map((link) => (
              <DropdownMenuItem key={link.label} className="cursor-pointer">
                <CursorTrigger asChild type="pointer">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Image
                      src={link.iconSrc}
                      alt={t(link.label)}
                      width={24}
                      height={24}
                    />
                    {t(link.label)}
                  </a>
                </CursorTrigger>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
