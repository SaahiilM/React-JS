import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    //   to get variable gapi available on window scope
    // callback function execute after getting the access of google library
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "410779206769-2g6md620iolj2kj871nfckh4371pqcv8.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
