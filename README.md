# Reddit Client in Next.js

A Reddit client built with Next.js that displays popular Reddit posts and subreddits. The app fetches data from Reddit’s API using OAuth and securely stores the token in cookies.

## Features

- Popular Posts: Shows the top Reddit posts of the day with author info and expandable comments.
- Subreddit Pages: Displays subreddit-specific posts and details like banner, icon, and member stats.
- Search: Allows searching for posts and subreddits.
- OAuth: Fetches Reddit OAuth token and caches it in cookies for reuse until expiration.

## Technologies

- Next.js with TypeScript
- Axios for API requests

## Token management

- The Reddit OAuth token is fetched using the client credentials flow.
- Tokens are cached in HTTP-only cookies with a 1-day expiration.
- Tokens are reused until they expire, then refreshed when needed.

## Key Components

- HomePage: Displays popular posts and subreddits.
- SubredditPage: Shows subreddit-specific posts and details.
- SearchPage: Displays search results for posts and subreddits.
- API Routes:
- /api/token: Fetches and stores the token in cookies.

## License

This project is licensed under the MIT License.
