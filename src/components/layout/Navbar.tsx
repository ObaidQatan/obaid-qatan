"use client";

import { useRouter, usePathname } from "@/i18n/routing";
import { Languages, MenuIcon, Moon, Sun, XIcon } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function Navbar({
  setSidebarOpen,
  sidebarOpen,
}: {
  setSidebarOpen: (open: boolean) => void;
  sidebarOpen: boolean;
}) {
  const { setTheme, theme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Languages className="h-[1.2rem] w-[1.2rem] text-primary" />
              <span className="sr-only">Toggle language</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => toggleLanguage("en")}
            >
              English
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => toggleLanguage("ar")}
            >
              العربية
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => toggleLanguage("id")}
            >
              Indonesian
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Avatar */}
        <Avatar className="h-10 w-10 border-2 border-primary cursor-pointer hover:scale-110 transition-transform">
          <AvatarImage src="/avatar.jpg" alt="Obaid Qatan" />
          <AvatarFallback className="bg-primary text-primary-foreground font-bold">
            OQ
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
