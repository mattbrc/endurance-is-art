import { auth, currentUser } from "@clerk/nextjs";
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";

import { CreatePost } from "~/app/_components/create-post";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/server";

export default async function Home() {
  noStore();
  // const hello = await api.post.hello.query({ text: "from tRPC" });
  const user = await currentUser();
  const { userId } = auth();

  if (userId) {
    redirect("/home");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="font-mono text-2xl font-extrabold sm:text-[5rem]">
          Endurance is Art
        </h1>
        <p>Custom strava heatmap art designed around your routes</p>
        <Link
          href="/sign-in"
          className={cn(buttonVariants({ variant: "default" }), "px-4")}
        >
          Get Started
        </Link>
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
