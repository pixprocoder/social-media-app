export type IName = {
  firstName: string;
  lastName?: string;
};

export type IUser = {
  name: IName;
  email: string;
  password: string;
};
