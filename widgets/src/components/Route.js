import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  //state that follows or tracks the window.location.pathname to rerender Route component
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    //defined as separate callback function to cleanup later
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    // to clean up eventListner
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  return currentPath === path ? children : null;
};

export default Route;
