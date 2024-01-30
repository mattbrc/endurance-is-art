import { api } from "~/trpc/server";

import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getAccessToken, metersToMiles } from "~/lib/strava";

export const metadata = {
  title: "Heatmaps",
};

export default async function Page() {
  function metersToMiles(meters: number): number {
    const metersToMilesFactor = 0.000621371;
    return Math.ceil(meters * metersToMilesFactor);
  }

  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  const query = await api.strava.getUser.query({
    userId: `${user.id}`,
  });
  const refreshToken = query[0]?.refreshToken;

  const data = await getAccessToken(refreshToken);

  const workoutInfo = await fetch(
    `https://www.strava.com/api/v3/athletes/7445195/stats?access_token=${data.access_token}`,
    { next: { revalidate: 3600 } },
  );
  const body = await workoutInfo.json();
  // console.log("workout info: ", body);

  const miles = metersToMiles(body.all_run_totals.distance);
  console.log("miles run: ", miles);

  return (
    <div className="container flex flex-col items-center justify-center gap-6 px-4 py-6">
      <h1 className="text-3xl font-bold">Heatmaps</h1>
      <h2 className="text-center font-mono text-xl font-extrabold">
        View heatmaps
      </h2>
      <p>All time miles run:</p>
      <p>{miles}</p>
    </div>
  );
}
