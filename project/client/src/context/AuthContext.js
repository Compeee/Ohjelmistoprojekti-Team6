import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  role: null,
  password: null,
  email: null,
  userId: null,
  login: () => {},
  logout: () => {},
});
