export interface User {
  id: string;
  email: string;
  password: string;
}

export interface AuthenticationState {
  user: User;
}
