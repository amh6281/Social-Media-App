import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// children : 자식 요소들이 기억
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    setCurrentUser({
      id: 1,
      name: "홍길동",
      profilePic:
        "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
