import { IName } from "./auth";

export type IUserSpecificField = {
  userId?: string;
  name: IName;
  profilePicture?: string;
};

export interface IPost {
  _id?: string;
  user?: string | IUserSpecificField;
  postText: string;
  Images?: string[];
}

export interface IComment {
  _id?: string;
  user?: string | IUserSpecificField;
  post?: string;
  comment: string;
}

export interface IReaction {
  _id?: string;
  user?: string | IUserSpecificField;
  post?: string;
  reaction: "like" | "love" | "haha" | "sad" | "wow" | "angry";
}
