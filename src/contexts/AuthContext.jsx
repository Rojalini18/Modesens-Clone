import { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const handleAuth = (state) => {
    setIsAuth(!isAuth);
  };

  return (
    <AuthContext.Provider value={{ isAuth, handleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
