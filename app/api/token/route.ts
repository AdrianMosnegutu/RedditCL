import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

/**
 * Handles the authentication process for obtaining a Reddit access token.
 *
 * This function checks if a valid access token is already stored in cookies and returns it if available.
 * If the token is not available or has expired, it requests a new token from Reddit's API, stores it in cookies,
 * and then returns the new token.
 *
 * @returns {Promise<NextResponse>} A promise that resolves to a NextResponse object containing the access token or an error message.
 *
 * @throws Will throw an error if the request to Reddit's API fails.
 */
export async function handler(): Promise<NextResponse> {
  const cookieStore = cookies();

  const token = cookieStore.get("reddit_access_token")?.value;
  const tokenExpiration =
    token &&
    parseInt(cookieStore.get("reddit_token_expiration")?.value as string);

  // Check if the token exists and hasn't expired (with a small buffer)
  if (token && tokenExpiration && tokenExpiration > Date.now() + 30000) {
    return NextResponse.json({ accessToken: token });
  }

  try {
    const tokenResponse = await axios.post(
      "https://www.reddit.com/api/v1/access_token",
      new URLSearchParams({ grant_type: "client_credentials" }),
      {
        auth: {
          username: process.env.REDDIT_CLIENT_ID as string,
          password: process.env.REDDIT_CLIENT_SECRET as string,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    );

    const expiresIn = tokenResponse.data.expires_in;
    const accessToken = tokenResponse.data.access_token;
    const expiration = (Date.now() + expiresIn * 1000).toString();

    cookieStore.set("reddit_access_token", accessToken, {
      maxAge: expiresIn,
      httpOnly: true,
      secure: process.env.NEXT_PUBLIC_BASE_URL?.startsWith("https"),
      sameSite: "strict",
    });

    cookieStore.set("reddit_token_expiration", expiration, {
      maxAge: expiresIn,
      httpOnly: true,
      secure: process.env.NEXT_PUBLIC_BASE_URL?.startsWith("https"),
      sameSite: "strict",
    });

    return NextResponse.json({ accessToken });
  } catch (error) {
    console.error("Error fetching token", error);
    return NextResponse.json(
      { error: "Unable to authenticate" },
      { status: 500 },
    );
  }
}

export { handler as GET, handler as POST };
