import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    //Handle cmd+click or ctrl+click to open link in new tab.
    //metaKey for mac, ctrlKey for windows
    if (event.metaKey || event.ctrlKey) {
      return;
    }
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
