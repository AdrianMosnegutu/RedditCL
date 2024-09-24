import axios from "axios";

/**
 * Retrieves an OAuth token from Reddit using client credentials.
 *
 * This function uses the client ID and client secret stored in environment variables
 * to authenticate with Reddit's API and obtain an access token.
 *
 * @returns {Promise<string>} A promise that resolves to the OAuth access token.
 *
 * @throws {Error} Throws an error if the request to Reddit's API fails.
 */
export async function getRedditOAuthToken(): Promise<string> {
  const { REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET } = process.env;

  const authString = Buffer.from(
    `${REDDIT_CLIENT_ID}:${REDDIT_CLIENT_SECRET}`,
  ).toString("base64");

  const response = await axios.post(
    "https://www.reddit.com/api/v1/access_token",
    new URLSearchParams({
      grant_type: "client_credentials",
    }),
    {
      headers: {
        Authorization: `Basic ${authString}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  );

  return response.data.access_token;
}
