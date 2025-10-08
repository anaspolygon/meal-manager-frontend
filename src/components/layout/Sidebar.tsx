"use client";
import Link from "next/link";
import {
  LayoutDashboard,
  UtensilsCrossed,
  Plus,
  Receipt,
  CreditCard,
  BarChart3,
  Settings,
  LogOut,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();
  const sidebarItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "/dashboard",
      active: true,
    },
    {
      icon: UtensilsCrossed,
      label: "Add Meal",
      href: "/meals",
      active: false,
    },
    { icon: Plus, label: "Add Expense", href: "/add-expense", active: false },
    { icon: Receipt, label: "Expenses", href: "/expenses", active: false },
    { icon: CreditCard, label: "Payments", href: "/payments", active: false },
    { icon: BarChart3, label: "Reports", href: "/reports", active: false },
    { icon: Users, label: "Members", href: "/members", active: false }, // 👈 added
    { icon: Settings, label: "Settings", href: "/settings", active: false },
    { icon: LogOut, label: "Logout", href: "/logout", active: false },
  ];

  return (
    <div className="w-90 h-screen bg-[#343A40] pl-9 pr-11 py-12 overflow-y-auto">
      <h2 className="text-[36px] text-white font-inter font-bold mb-9">
        Mess Manager
      </h2>
      {sidebarItems.map((item) => (
        <div
          key={item.href}
          className={`flex items-center gap-3 py-3 px-4 mb-6 ${
            pathName === item.href
              ? "text-[#343A40] bg-white rounded-[10px]"
              : "text-white"
          } `}
        >
          <item.icon width={24} height={24} />
          <Link href={item.href} className="text-xl font-inter font-medium">
            {item.label}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
