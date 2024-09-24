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
