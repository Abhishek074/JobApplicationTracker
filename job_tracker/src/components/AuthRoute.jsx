import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

const AuthRoute = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
    I;
  }

  return token ? children : <Navigate to="/login" replace />;
};

export default AuthRoute;
