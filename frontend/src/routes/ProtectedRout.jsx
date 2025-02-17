import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const storedUser = localStorage.getItem("user");

  if (!storedUser) {
    return <Navigate to="/login" />;
  }

  try {
    const { token } = JSON.parse(storedUser);
    if (!token) {
      return <Navigate to="/login" />;
    }
  } catch (error) {
    localStorage.removeItem("user"); 
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
