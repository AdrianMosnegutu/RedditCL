import axios from "axios";
import { getRedditOAuthToken } from "./auth";
import { SUBREDDITS_LIMIT } from "./constants";
import { SubredditResponse, SubredditType } from "./types";
import { responseToSubredditType } from "./utils";

/**
 * Fetches a list of popular subreddits from Reddit.
 *
 * @param limit - The maximum number of subreddits to fetch. Defaults to `SUBREDDITS_LIMIT`.
 * @returns A promise that resolves to an array of `SubredditType` objects.
 *
 * @throws Will throw an error if the request fails or if the OAuth token cannot be retrieved.
 */
export async function getPopularSubreddits(
  limit: number = SUBREDDITS_LIMIT,
): Promise<SubredditType[]> {
  const url = `https://oauth.reddit.com/subreddits/popular?limit=${limit}`;
  const token = await getRedditOAuthToken();

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const subreddits = response.data.data.children;
  return subreddits.map((subreddit: SubredditResponse) =>
    responseToSubredditType(subreddit),
  );
}
