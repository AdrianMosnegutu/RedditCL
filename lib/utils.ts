import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SubredditResponse, SubredditType } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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

  if (number < 1000) {
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
