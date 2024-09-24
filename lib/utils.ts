import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SubredditResponse, SubredditType } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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
  };
}
