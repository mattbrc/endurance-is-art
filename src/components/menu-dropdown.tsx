import * as React from "react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import type { MainNavItem } from "../types";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MenuDropdown({ items, children }: MainNavProps) {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Icons.menu size={20} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48" align="start">
          <DropdownMenuItem>
            <Link href="/home" className="text-md font-bold">
              EiA
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/home">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/home/heatmap">View Heatmaps</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/home/bookclub">Shop</Link>
          </DropdownMenuItem>
          {/* <DropdownMenuItem className="text-zinc-500" asChild>
            <Link href="">Settings</Link>
          </DropdownMenuItem> */}
          <DropdownMenuItem asChild>
            <Link href="/home/about">About</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
