export type Campaign = {
  title: string;
  brand: string;
  category: string;
  description: string;
  minBudget: number;
  maxBudget: number;
  channels: Channel[];
  avatarColor: string;
};

export type Channel =
  | "instagram"
  | "tiktok"
  | "youtube"
  | "twitter"
  | "facebook";
