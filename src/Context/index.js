import React, { useState, createContext } from "react";
export const LoginContext = createContext();

const AuthContext = (props) => {
  const [Auth, setAuth] = useState(false);
  const updateAuth = (auth) => {
    setAuth(auth);
  };
  return (
    <LoginContext.Provider value={{ Auth, updateAuth }}>
      {props.children}
    </LoginContext.Provider>
  );
};
export default AuthContext;
