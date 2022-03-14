import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    event.preventDefault();
    // prevent full page reload when pathname is changed using navBar
    window.history.pushState({}, "", href);

    //navigation event that url has changed which is passed to the Route component
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
