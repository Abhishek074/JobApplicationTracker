import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { logout as authLogout } from "../services/authService";

const initialState = {
  user: null,
  user_id: null,
  token: null,
  setAuthToken: () => {},
  setUserId: () => {},
  setUser: () => {},
  logout: () => {},
};

export const AuthContext = createContext(initialState);

export function AuthProvider({ children }) {
  const navigate = useNavigate(); 
  const [authToken, setAuthToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const storedUserId = localStorage.getItem("user_id");
    const storedUser = localStorage.getItem("user");

    if (storedToken) setAuthToken(storedToken);
    if (storedUserId) setUserId(JSON.parse(storedUserId));
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  useEffect(() => {
    if (authToken) {
      localStorage.setItem("authToken", authToken);
    } else {
      localStorage.removeItem("authToken");
    }

    if (userId) {
      localStorage.setItem("user_id", JSON.stringify(userId));
    } else {
      localStorage.removeItem("user_id");
    }

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [authToken, userId, user]);

  const logout = () => {
    setAuthToken(null);
    setUserId(null);
    setUser(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user");
    // authLogout(); 
    navigate("/signin"); 
  };

  const contextValue = {
    user,
    user_id: userId,
    token: authToken,
    setAuthToken,
    setUserId,
    setUser,
    logout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}
