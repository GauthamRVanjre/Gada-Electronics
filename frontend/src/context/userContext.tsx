import React, { useEffect } from "react";
import { createContext, ReactNode } from "react";

interface User {
  id: string;
  username: string;
  // Add other user properties
  email: string;
  isAdmin: boolean;
  address: string;
}

interface UserContextProps {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextProps>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = React.useState<User | null>(null);

  console.log("user in context", user);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser !== null) {
      setUser(JSON.parse(storedUser) as User);
    }
  }, []);

  const login = (userData: User) => {
    localStorage.setItem("user", JSON.stringify(userData));
    // setUser(localStorage.getItem("user") as SetStateAction<User | null>);
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
