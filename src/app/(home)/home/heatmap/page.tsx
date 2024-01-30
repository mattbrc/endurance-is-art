import { Separator } from "~/components/ui/separator";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/server";
import Strava from "~/components/strava";
import { StravaConnected } from "~/components/strava";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Link from "next/link";

export const metadata = {
  title: "Heatmaps",
};

export default async function Page() {
  return (
    <div className="container flex flex-col items-center justify-center gap-6 px-4 py-6">
      <h1 className="text-3xl font-bold">Heatmaps</h1>
      <h2 className="text-center font-mono text-xl font-extrabold">
        View heatmaps
      </h2>
    </div>
  );
}
