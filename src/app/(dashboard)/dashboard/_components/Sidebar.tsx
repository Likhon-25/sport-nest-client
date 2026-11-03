"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building, CalendarCheck, CirclePlus, Menu } from "lucide-react";
import { cn } from "cn";

import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  { label: "Add Facility", href: "/dashboard/add-facilities", icon: CirclePlus },
  { label: "My Bookings", href: "/dashboard/my-booking", icon: CalendarCheck },
  { label: "My Facilities", href: "/dashboard/my-facilities", icon: Building },
];

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1" aria-label="Dashboard navigation">
      {navigation.map(({ label, href, icon: Icon }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
              isActive
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <Icon className="size-4" aria-hidden="true" />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background/95 px-4 backdrop-blur lg:hidden">
        <Logo />

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open dashboard menu"
              />
            }
          >
            <Menu aria-hidden="true" />
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0">
            <SheetHeader className="border-b px-5 py-4">
              <SheetTitle className="sr-only">Dashboard menu</SheetTitle>
              <Logo />
            </SheetHeader>
            <div className="flex-1 overflow-y-auto p-3">
              <SidebarNav onNavigate={() => setOpen(false)} />
            </div>
          </SheetContent>
        </Sheet>
      </header>

      <aside className="hidden w-64 shrink-0 border-r bg-card lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col">
        <div className="flex h-16 items-center border-b px-5">
          <Logo />
        </div>

        <div className="flex-1 overflow-y-auto p-3">
          <p className="px-3 pb-2 pt-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            Dashboard
          </p>
          <SidebarNav />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
