import { Separator } from "~/components/ui/separator";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/server";
import Strava from "~/components/strava";

export const metadata = {
  title: "Studio - Home",
};

export default async function Page() {
  const hello = await api.post.hello.query({ text: "world" });
  console.log("hello: ", hello);
  const user = await api.strava.getLatestUser.query();
  console.log("user: ", user);
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
      <Strava />
    </div>
  );
}
