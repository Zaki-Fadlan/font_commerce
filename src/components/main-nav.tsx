"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CircleUser, Menu, Package2, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import { LoginDialog } from "@/components/dialog-login";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import dynamic from "next/dynamic";

const Moon = dynamic(
  () => import("@/components/svg/IconDarkLight").then((mod) => mod.Moon),
  { ssr: false }
);
const Sun = dynamic(
  () => import("@/components/svg/IconDarkLight").then((mod) => mod.Sun),
  { ssr: false }
);

import { useTheme } from "next-themes";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
const MainNav = () => {
  const { setTheme } = useTheme();
  return (
    <header className="sticky top-0 z-10 backdrop-blur-3xl flex h-16 items-center gap-4 border-b px-4 md:px-6">
      <nav className="hidden flex-col gap-6 space-x-5 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        {siteConfig.navItems.map((item, index) => (
          <Link
            key={`${item.label}-${index}`}
            href={item.href}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            {siteConfig.navItems.map((item, index) => (
              <Link
                key={`${item.label}-${index}`}
                href={item.href}
                className="text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex justify-end space-x-2 items-end w-full">
        <ToggleGroup type="single">
          {useTheme().theme === "light" ? (
            <ToggleGroupItem
              onClick={() => setTheme("dark")}
              value="dark"
              aria-label="Toggle bold"
            >
              <Moon />
            </ToggleGroupItem>
          ) : (
            <ToggleGroupItem
              onClick={() => setTheme("light")}
              value="light"
              aria-label="Toggle bold"
            >
              <Sun />
            </ToggleGroupItem>
          )}
        </ToggleGroup>
        {/* Jika Belum Login */}
        <LoginDialog />
        <Link href="/cart">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full relative"
          >
            <ShoppingCart className="h-5 w-5" />
            <Badge className="p-2 animate-pulse z-10 rounded-full text-xs font-bold h-5 w-5 flex justify-center items-center absolute -top-1 -right-2">
              5
            </Badge>
          </Button>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default MainNav;
