import { useEffect } from "react";

const Route = ({ path, children }) => {
  //defined as separate callback function to cleanup later
  const onLocationChange = () => {
    console.log("Location Changed");
  };

  useEffect(() => {
    window.addEventListener("popstate", onLocationChange);

    // to clean up eventListner
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  return window.location.pathname === path ? children : null;
};

export default Route;
