import { Separator } from "~/components/ui/separator";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/server";
import Strava from "~/components/strava";
import { StravaConnected } from "~/components/strava";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Link from "next/link";

export const metadata = {
  title: "Studio - Home",
};

export default async function Page() {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  const query = await api.strava.getUser.query({
    userId: `${user.id}`,
  });
  if (query[0] !== undefined) {
    console.log("user: ", query[0].refreshToken);
  } else {
    console.log("no user found");
  }

  return (
    <div className="container flex flex-col items-center justify-center gap-6 px-4 py-6">
      <h1 className="text-3xl font-bold">Endurance is Art</h1>
      <h2 className="text-center font-mono text-xl font-extrabold">
        Badass strava heatmaps for you and your friends
      </h2>
      <div>
        <h2 className="font-mono font-extrabold">Steps:</h2>
        <ul>
          <li>1. Connect Strava</li>
          <li>2. View your heatmaps</li>
          <li>3. Choose and customize a heatmap</li>
          <li>4. Choose a canvas size and order</li>
        </ul>
      </div>
      <Separator />
      <div className="container flex flex-col items-center justify-center gap-1 px-4 py-6">
        <h2 className="font-mono text-xl font-extrabold">Step 1:</h2>
        {query[0] ? <StravaConnected /> : <Strava />}
        <h2 className="font-mono text-xl font-extrabold">Step 2:</h2>
        <Link href="/home/heatmap">
          <Button className="w-40">View Heatmaps</Button>
        </Link>
        <h2 className="font-mono text-xl font-extrabold">Step 3:</h2>
        <Link href="/home/heatmap">
          <Button className="w-40">Customize</Button>
        </Link>
        <h2 className="font-mono text-xl font-extrabold">Step 4:</h2>
        <Link href="/home/heatmap">
          <Button className="w-40">Order</Button>
        </Link>
      </div>
    </div>
  );
}
