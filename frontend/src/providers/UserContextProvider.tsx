import { UserProvider } from "@/context/userContext";
import React from "react";

interface UserProviderProps {
  children: React.ReactNode;
}

const UserContextProvider: React.FC<UserProviderProps> = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default UserContextProvider;
