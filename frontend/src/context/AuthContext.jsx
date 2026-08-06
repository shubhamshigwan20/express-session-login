import { useState, useContext, createContext } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(false);
  const login = () => {
    setUserId(true);
  };
  const logout = () => {
    setUserId(false);
  };
  return (
    <AuthContext.Provider value={{ userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth };

export default AuthProvider;
