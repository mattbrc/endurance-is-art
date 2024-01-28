import * as React from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import Link from "next/link";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-5 md:h-24 md:flex-row md:justify-center md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:gap-2 md:px-0">
          <div className="grid grid-flow-col items-center gap-4">
            <Link href="https://twitter.com/acidgambit_">
              <Icons.x />
            </Link>
            <Link href="https://www.instagram.com/acidgambit/">
              <Icons.instagram size={20} />
            </Link>
          </div>
          <div>
            <p className="text-center text-sm leading-loose md:text-left">
              2024 Acid Gambit
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
