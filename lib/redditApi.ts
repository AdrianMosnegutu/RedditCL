import axios from "axios";
import { getRedditOAuthToken } from "./auth";
import { POSTS_LIMIT, SUBREDDITS_LIMIT } from "./constants";
import {
  PostResponse,
  PostType,
  SubredditResponse,
  SubredditType,
} from "./types";
import { responseToPostType, responseToSubredditType } from "./utils";

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

/**
 * Fetches information about a specific subreddit.
 *
 * @param subredditName - The name of the subreddit to fetch information for.
 * @returns A promise that resolves to a `SubredditType` object containing subreddit details.
 *
 * @throws Will throw an error if the request fails or if the OAuth token cannot be retrieved.
 */
export async function getSubreddit(
  subredditName: string,
): Promise<SubredditType> {
  const url = `https://oauth.reddit.com/r/${subredditName}/about.json`;
  const token = await getRedditOAuthToken();

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const subreddit = response.data;
  return responseToSubredditType(subreddit);
}

/**
 * Fetches the most popular posts from Reddit.
 *
 * @param limit - The maximum number of posts to retrieve. Defaults to POSTS_LIMIT.
 * @returns A promise that resolves to an array of PostType objects.
 *
 * @throws Will throw an error if the request to Reddit's API fails.
 */
export async function getPopularPosts(
  limit: number = POSTS_LIMIT,
): Promise<PostType[]> {
  const url = `https://oauth.reddit.com/best?limit=${limit}`;
  const token = await getRedditOAuthToken();

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const posts = response.data.data.children;
  return posts.map((post: PostResponse) => responseToPostType(post));
}
