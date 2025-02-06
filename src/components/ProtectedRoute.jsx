import { Navigate } from "react-router-dom"; // Import Navigate for redirection
import { auth } from "../firebase"; // Import Firebase authentication object
import { useAuthState } from "react-firebase-hooks/auth"; // Import hook to get auth state

const ProtectedRoute = ({ children }) => {
  const [user] = useAuthState(auth); // Get the current user authentication state

  // If user is authenticated, render the children components
  // Otherwise, redirect to the home page
  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute; // Export the ProtectedRoute component
