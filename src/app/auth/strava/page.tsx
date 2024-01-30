import { currentUser } from "@clerk/nextjs";
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

import { buttonVariants } from "~/components/ui/button";
import { getAccessToken, getRefreshToken } from "~/lib/strava";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/server";

type SearchParams = {
  code?: string;
};

type Props = {
  searchParams: SearchParams;
};

export default async function Page({ searchParams }: Props) {
  const code = searchParams.code;
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = await getRefreshToken(code);

  const mutation = api.strava.create.mutate({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    stravaId: data.body.stravaId,
    refreshToken: `${data.body.refreshToken}`,
    userId: user?.id,
  });

  redirect("/home");

  return (
    <div>
      <p>talking to strava...</p>
    </div>
  );
}
