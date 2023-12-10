import { UserProvider } from "@/context/userContext";
import store from "@/redux/store/store";
import React from "react";
import { Provider } from "react-redux";

interface UserProviderProps {
  children: React.ReactNode;
}

const UserContextProvider: React.FC<UserProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <UserProvider>{children}</UserProvider>;
    </Provider>
  );
};

export default UserContextProvider;
