export const getStravaAuthUrl = () => {
  return `https://www.strava.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_STRAVA_REDIRECT_URI}&response_type=code&%20response_type=force&scope=activity:read`;
};

// 'https://www.strava.com/api/v3/oauth/authorize?client_id=7694&scope=activity%3Aread_all%2Cprofile%3Aread_all&response_type=code&redirect_uri=https%3A%2F%2Fwww.vite.bike%2Fapi%2Fauth%2Fcallback%2Fstrava&approval_prompt=auto&state=vv4Bsq1twaPBylbhbAE2rOXP23nmPiv_oKAUVXhrwgE'

export const getAccessToken = async () => {
  const TOKEN_ENDPOINT = "https://www.strava.com/oauth/token"
  const refreshToken = '7e5aca9d02edef134c3c8177b6f455fcd25cd106'
  const body = JSON.stringify({
    client_id: process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID,
    client_secret: process.env.STRAVA_CLIENT_SECRET,
    refresh_token: refreshToken,
    grant_type: "refresh_token",
  });

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body,
  });

  return response.json();
};

export const getRefreshToken = async (code: string | undefined ) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      code: code,
      grant_type: "authorization_code",
      redirect_uri: "http://localhost:3000/home",
    }),
  };
  console.log("getting refresh token -------------------------");
  const response = await fetch("https://www.strava.com/oauth/token", options);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const body = await response.json();
  console.log("body")
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    body: {
      refreshToken: body.refresh_token,
      stravaId: body.athlete.id,
    }
  }
};

