import axios from "axios";
import { COMMENTS_LIMIT, POSTS_LIMIT, SUBREDDITS_LIMIT } from "./constants";
import {
  CommentResponse,
  CommentType,
  PostResponse,
  PostType,
  SubredditResponse,
  SubredditType,
} from "./types";
import {
  responseToCommentType,
  responseToPostType,
  responseToSubredditType,
} from "./utils";

/**
 * Fetches the avatar URL of a specified Reddit user.
 *
 * @param token - The OAuth token used for authorization.
 * @param username - The Reddit username whose avatar is to be fetched.
 * @returns A promise that resolves to the avatar URL as a string.
 * If the avatar URL contains "styles" or an error occurs, an empty string is returned.
 *
 * @throws Will throw an error if the avatar URL contains "styles".
 */
export async function getUserAvatar(
  token: string,
  username: string,
): Promise<string> {
  try {
    if (username == "[deleted]") {
      return "";
    }

    const response = await axios.get(
      `https://oauth.reddit.com/user/${username}/about.json`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const avatar = response.data.data.icon_img;
    return /styles/.test(avatar) ? "" : avatar;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return "";
  }
}

/**
 * Fetches a list of popular subreddits from the Reddit API.
 *
 * @param token - The OAuth token used for authorization.
 * @param limit - The maximum number of subreddits to fetch. Defaults to `SUBREDDITS_LIMIT`.
 * @returns A promise that resolves to an array of `SubredditType` objects.
 */
export async function getPopularSubreddits(
  token: string,
  limit: number = SUBREDDITS_LIMIT,
): Promise<SubredditType[]> {
  const response = await axios.get(
    `https://oauth.reddit.com/subreddits/popular.json?limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const subreddits = response.data.data.children;
  return subreddits.map((subreddit: SubredditResponse) =>
    responseToSubredditType(subreddit),
  );
}

/**
 * Fetches information about a specific subreddit.
 *
 * @param token - The OAuth token used for authorization.
 * @param subredditName - The name of the subreddit to fetch information for.
 * @returns A promise that resolves to a `SubredditType` containing the subreddit's information.
 */
export async function getSubreddit(
  token: string,
  subredditName: string,
): Promise<SubredditType> {
  const response = await axios.get(
    `https://oauth.reddit.com/r/${subredditName}/about.json`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const subreddit = response.data;
  return responseToSubredditType(subreddit);
}

/**
 * Fetches the most popular posts from Reddit.
 *
 * @param token - The OAuth token used for authentication.
 * @param limit - The number of posts to fetch. Defaults to `POSTS_LIMIT`.
 * @returns A promise that resolves to an array of `PostType` objects.
 */
export async function getPopularPosts(
  token: string,
  limit: number = POSTS_LIMIT,
): Promise<PostType[]> {
  const response = await axios.get(
    `https://oauth.reddit.com/best.json?limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const posts = response.data.data.children;
  return posts.map((post: PostResponse) => responseToPostType(post));
}

/**
 * Fetches the most popular posts from a specific subreddit.
 *
 * @param token - The OAuth token for authentication.
 * @param subredditName - The name of the subreddit to fetch posts from.
 * @param limit - The maximum number of posts to fetch. Defaults to `POSTS_LIMIT`.
 * @returns A promise that resolves to an array of `PostType` objects.
 */
export async function getSubredditPosts(
  token: string,
  subredditName: string,
  limit: number = POSTS_LIMIT,
): Promise<PostType[]> {
  const response = await axios.get(
    `https://oauth.reddit.com/r/${subredditName}/hot.json?limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const posts = response.data.data.children;
  return posts.map((post: PostResponse) => responseToPostType(post));
}

/**
 * Fetches comments for a specific Reddit post.
 *
 * @param token - The OAuth token for authentication.
 * @param postId - The ID of the Reddit post to fetch comments for.
 * @param limit - The maximum number of comments to fetch. Defaults to `COMMENTS_LIMIT`.
 * @returns A promise that resolves to an array of comments.
 */
export async function getComments(
  token: string,
  postId: string,
  limit: number = COMMENTS_LIMIT,
): Promise<CommentType[]> {
  const response = await axios.get(
    `https://oauth.reddit.com/comments/${postId}.json?limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const comments = response.data[1].data.children.slice(0, -1);
  return comments.map((comment: CommentResponse) =>
    responseToCommentType(comment),
  );
}

export async function searchPosts(
  token: string,
  query: string,
  limit: number = POSTS_LIMIT,
): Promise<PostType[]> {
  const response = await axios.get(
    `https://oauth.reddit.com/search.json?q=${query}&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const posts = response.data.data.children;
  return posts.map((post: PostResponse) => responseToPostType(post));
}

export async function searchSubreddits(
  token: string,
  query: string,
  limit: number = SUBREDDITS_LIMIT,
): Promise<SubredditType[]> {
  const response = await axios.get(
    `https://oauth.reddit.com/subreddits/search.json?q=${query}&limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const subreddits = response.data.data.children;
  return subreddits.map((subreddit: SubredditResponse) =>
    responseToSubredditType(subreddit),
  );
}
