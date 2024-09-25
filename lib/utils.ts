import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  PostResponse,
  PostType,
  SubredditResponse,
  SubredditType,
} from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Calculates the time elapsed since a given Unix timestamp and returns a human-readable string.
 *
 * @param unixTimestamp - The Unix timestamp (in seconds) to calculate the time ago from.
 * @returns A string representing the time elapsed since the given Unix timestamp in a human-readable format.
 *
 * @example
 * ```typescript
 * const timestamp = Math.floor(Date.now() / 1000) - 3600; // 1 hour ago
 * console.log(timeAgo(timestamp)); // "1 hour ago"
 * ```
 */
export function timeAgo(unixTimestamp: number): string {
  const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds (Unix timestamp)
  const timeDifference = currentTime - unixTimestamp; // Difference in seconds

  // Define time units in seconds
  const seconds = 1;
  const minute = 60 * seconds;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;
  const month = 30 * day;
  const year = 365 * day;

  // Calculate time ago
  const secondsAgo = Math.floor(timeDifference);
  const minutesAgo = Math.floor(timeDifference / minute);
  const hoursAgo = Math.floor(timeDifference / hour);
  const daysAgo = Math.floor(timeDifference / day);
  const weeksAgo = Math.floor(timeDifference / week);
  const monthsAgo = Math.floor(timeDifference / month);
  const yearsAgo = Math.floor(timeDifference / year);

  if (timeDifference < minute) {
    return `${secondsAgo} second${secondsAgo > 1 ? "s" : ""} ago`;
  } else if (timeDifference < hour) {
    return `${minutesAgo} minute${minutesAgo > 1 ? "s" : ""} ago`;
  } else if (timeDifference < day) {
    return `${hoursAgo} hour${hoursAgo > 1 ? "s" : ""} ago`;
  } else if (timeDifference < week) {
    return `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`;
  } else if (timeDifference < month) {
    return `${weeksAgo} week${weeksAgo > 1 ? "s" : ""} ago`;
  } else if (timeDifference < year) {
    return `${monthsAgo} month${monthsAgo > 1 ? "s" : ""} ago`;
  } else {
    return `${yearsAgo} year${yearsAgo > 1 ? "s" : ""} ago`;
  }
}

/**
 * Converts a Unix timestamp to an ISO 8601 datetime string.
 *
 * @param unixTimestamp - The Unix timestamp to convert.
 * @returns The ISO 8601 datetime string representation of the Unix timestamp.
 *
 * @example
 * ```typescript
 * console.log(unixTimestampToDatetime(1632732000)); // "2021-09-27T14:00:00.000Z"
 * ```
 */
export function unixTimestampToDatetime(unixTimestamp: number): string {
  return new Date(unixTimestamp * 1000).toISOString();
}

/**
 * Shortens a given number into a more readable string format with appropriate magnitude suffix.
 *
 * - Numbers less than 1000 are returned as-is.
 * - Numbers in the order of thousands are divided by 1000 and suffixed with 'k'.
 * - Numbers in the order of millions are divided by 1000000 and suffixed with 'm'.
 *
 * Trailing zeros and decimal points are removed from the resulting string.
 *
 * @param number - The number to be shortened.
 * @returns A string representing the shortened number with an appropriate magnitude suffix.
 */
export function shortenNumber(number: number): string {
  let shortenedNumber = "number";
  let magnitude = "";

  if (number === 0) {
    return "0";
  } else if (number < 1000) {
    shortenedNumber = number.toString();
  } else if (number < 1000000) {
    shortenedNumber = `${(number / 1000).toFixed(2)}`;
    magnitude = "k";
  } else {
    shortenedNumber = `${(number / 1000000).toFixed(2)}`;
    magnitude = "m";
  }

  while (shortenedNumber.endsWith("0") || shortenedNumber.endsWith(".")) {
    shortenedNumber = shortenedNumber.slice(0, -1);
  }

  return `${shortenedNumber}${magnitude}`;
}

/**
 * Converts a `SubredditResponse` object to a `SubredditType` object.
 *
 * @param {SubredditResponse} param0 - The response object containing subreddit data.
 * @returns {SubredditType} The transformed subreddit data.
 */
export function responseToSubredditType({
  data,
}: SubredditResponse): SubredditType {
  return {
    name: data.display_name,
    description: data.public_description_html,
    icon: data.icon_img,
    banner: data.banner_img,
    members: data.subscribers,
    activeMembers: data.accounts_active,
  };
}

/**
 * Converts a PostResponse object to a PostType object.
 *
 * @param {PostResponse} param0 - The response object containing post data.
 * @returns {PostType} The formatted post object.
 */
export function responseToPostType({ data }: PostResponse): PostType {
  return {
    id: data.id,
    author: data.author,
    title: data.title,
    body: data.selftext_html,
    mediaType: data.post_hint,
    url:
      data.post_hint === "hosted:video"
        ? data.media.reddit_video.fallback_url
        : data.post_hint === "rich:video"
          ? data.media.oembed.html
          : data.url,
    redditUrl: `https://reddit.com${data.permalink}`,
    timeCreated: data.created_utc,
    score: data.score,
    comments: data.num_comments,
  };
}
