import React from "react";
import { createContext, useState } from "react";

export const Auth = createContext();

export function AuthProvider({ children }) {
  const [User, setUser] = useState(null);

  return <Auth.Provider value={{ User, setUser }}>{children}</Auth.Provider>;
}

export default AuthProvider;
