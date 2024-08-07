import { LucideIcon } from "lucide-react";

export interface MenuItem {
 title: string;
 href: string;
 submenus?: string[];
 subHref?: string[];
 icon?: LucideIcon;
}