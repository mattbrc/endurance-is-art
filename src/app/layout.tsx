import "~/styles/globals.css";

import { TRPCReactProvider } from "~/trpc/react";
import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "~/lib/utils";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Endurance is Art",
  description: "Strava Heatmaps",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <body className={cn("min-h-screen antialiased")}>
          <TRPCReactProvider>
            <Toaster
              toastOptions={{
                className: "",
                style: {
                  background: "#27272A",
                  color: "#fff",
                },
              }}
            />
            {children}
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
