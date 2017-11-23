export interface User {
  name: string;
  email: string;
  account: {
    password: string;
    confirm: string;
  }
}