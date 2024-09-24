///////////////////////
//  SUBREDDIT TYPES  //
///////////////////////

export interface SubredditType {
  name: string;
  description: string;
  icon: string;
  banner: string;
  members: number;
  activeMembers?: number;
}

export interface SubredditResponse {
  data: {
    display_name: string;
    public_description_html: string;
    icon_img: string;
    banner_img: string;
    subscribers: number;
    accounts_active: number;
  };
}

//////////////////
//  POST TYPES  //
//////////////////

export interface PostType {
  id: string;
  author: string;
  title: string;
  body: string;
  mediaType: string;
  url: string;
  redditUrl: string;
  timeCreated: number;
  score: number;
  comments: number;
}

export interface PostResponse {
  data: {
    id: string;
    author: string;
    title: string;
    selftext_html: string;
    post_hint: string;
    is_video: boolean;
    url: string;
    permalink: string;
    created_utc: number;
    score: number;
    num_comments: number;
  };
}
