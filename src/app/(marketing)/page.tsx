import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";

import { CreatePost } from "~/app/_components/create-post";
import { Reviews } from "~/components/reviews";
import { SiteFooter } from "~/components/site-footer";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/server";

export default async function Home() {
  noStore();
  // const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-6 px-4 py-8">
        <h1 className="font-mono text-2xl font-extrabold sm:text-[5rem]">
          Endurance is Art
        </h1>
        <p className="pt-2">
          Custom strava heatmap art designed around your routes
        </p>
        <p>
          Strava heat maps are cool. But what if I want to hang mine up so
          everyone knows I’m better than them?
        </p>
        <p>
          It’s the perfect conversation starter over some non-alcoholic IPAs
          (gotta stay clean for that ultramarathon, amirite bro?) Perfect for
          hanging over your desk to stare at and admire the work you’ve done on
          the road.
        </p>
        <p>
          You’re an animal. An athlete. A savage. You deserve visual
          representation of how much better you are than the general population.
          Get yours today.
        </p>
        <Link
          href="/home"
          className={cn(buttonVariants({ variant: "default" }), "px-4")}
        >
          Get Started
        </Link>
        <p>What they&apos;re saying:</p>
        <Reviews />
        <SiteFooter />
      </div>
    </main>
  );
}

// async function CrudShowcase() {
//   const latestPost = await api.post.getLatest.query();

//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   );
// }
