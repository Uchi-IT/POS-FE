import {
  Building2,
  History,
  LayoutDashboard,
  RefreshCcw,
  ShoppingCart,
  Users,
  Warehouse,
} from "lucide-react";
import { MenuItem } from "../_utils/global.types";

export const NavMenuItems: MenuItem[] = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "Point Of Sale", href: "/pos", icon: ShoppingCart },
  { title: "Gudang", href: "/gudang", icon: Warehouse },
  {
    title: "Restok",
    href: "/restok",
    submenus: ["Submenu 1", "Submenu 2"],
    subHref: ["/sub1", "/sub2"],
    icon: RefreshCcw,
  },
  { title: "Cabang", href: "/cabang", icon: Building2 },
  { title: "Karyawan", href: "/karyawan", icon: Users },
  {
    title: "Riwayat",
    href: "/riwayat",
    submenus: ["Submenu 1", "Submenu 2"],
    subHref: ["/sub1", "/sub2"],
    icon: History,
  },
];
