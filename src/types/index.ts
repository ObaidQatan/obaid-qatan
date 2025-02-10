import { type LucideIcon } from "lucide-react";

export type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  imagesUrls: string[];
  role: string;
  tags: {
    name: string;
    icon?: LucideIcon;
  }[];
  createdAt: string; // ISO
};
