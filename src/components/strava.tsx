"use client";

import toast from "react-hot-toast";
import { Button } from "./ui/button";
import Link from "next/link";
import { getStravaAuthUrl } from "~/lib/strava";

export default function Strava() {
  // const notify = () => toast.success("Strava successfully connected!");
  return (
    <div className="container flex flex-col items-center justify-center gap-1 border border-red-400 px-4 py-6">
      <h2 className="font-mono text-xl font-extrabold">Step 1:</h2>
      <Link href={getStravaAuthUrl()}>
        <Button>Connect Strava</Button>
      </Link>
    </div>
  );
}
