import { useState, createContext } from "react";

export const GenderContext = createContext();

export const GenderContextProvider = ({ children }) => {
  const [genderSet, setGenderSet] = useState("");

  const handleGender = (data) => {
    setGenderSet(data);
  };

  return (
    <GenderContext.Provider value={{ genderSet, handleGender }}>
      {children}
    </GenderContext.Provider>
  );
};
