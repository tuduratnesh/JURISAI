import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    console.log(token);

    if (token) {
      setUser(token);
    }

    setLoading(false);
  }, []);

  //   const login = (token, username, email) => {
  //     localStorage.setItem("token", token);
  //     localStorage.setItem("username", username);
  //     localStorage.setItem("email", email);
  //     setUser({ token, username, email });
  //   };

  //   const logout = () => {
  //     localStorage.clear();
  //     setUser(null);
  //   };

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
