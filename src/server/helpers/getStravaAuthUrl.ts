export const getStravaAuthUrl = () => {
  return `https://www.strava.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_STRAVA_REDIRECT_URI}&response_type=code&%20response_type=force&scope=activity:read`;
};