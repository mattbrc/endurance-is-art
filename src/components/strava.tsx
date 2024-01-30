"use client";

import toast from "react-hot-toast";
import { Button } from "./ui/button";
import Link from "next/link";
import { getStravaAuthUrl } from "~/lib/strava";

export default function Strava() {
  // const notify = () => toast.success("Strava successfully connected!");
  return (
    <div>
      <Link href={getStravaAuthUrl()}>
        <Button>Connect Strava</Button>
      </Link>
    </div>
  );
}

export function StravaConnected() {
  // const notify = () => toast.success("Strava successfully connected!");
  return <Button disabled={true}>✅ Strava Connected</Button>;
}
