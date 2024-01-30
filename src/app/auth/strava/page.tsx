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

  // const options = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     client_id: process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID,
  //     client_secret: process.env.STRAVA_CLIENT_SECRET,
  //     code: code,
  //     grant_type: "authorization_code",
  //     redirect_uri: "http://localhost:3000/home",
  //   }),
  // };
  // console.log("getting refresh token -------------------------");
  // const response = await fetch("https://www.strava.com/oauth/token", options);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = await getRefreshToken(code);
  console.log("data from call: ", data);
  // const body = await response.json();
  // const refreshToken = body.refresh_token;
  // console.log("redirecting to home", refreshToken);
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
      {/* <Refresh refreshToken={refreshToken} /> */}
    </div>
  );
}
