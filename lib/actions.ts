"use server";

import axios from "axios";

/**
 * Fetches a Reddit OAuth token from the authentication API.
 *
 * @returns {Promise<string>} A promise that resolves to the access token.
 *
 * @throws {Error} If the request to the authentication API fails.
 */
export async function getToken(): Promise<string> {
  const tokenResponse = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/token`,
  );
  const token = tokenResponse.data.accessToken;
  return token;
}
