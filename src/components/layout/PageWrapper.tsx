"use client";

import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="relative min-h-screen">
      <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <Navbar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <div
        className={cn(
          "transition-all duration-300 min-h-screen",
          sidebarOpen && "ps-16 lg:ps-64",
        )}
      >
        {children}
      </div>
    </div>
  );
}
