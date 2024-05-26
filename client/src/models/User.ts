export interface IUser {
  user: {
    id?: number;
    email: string;
    password?: string;
    username?: string;
  };
  token?: string;
}
