import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    //   to get variable gapi available on window scope
    // callback function execute after getting the access of gapi library
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "410779206769-2g6md620iolj2kj871nfckh4371pqcv8.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          //executed after entire gapi library is ready
          //check user is signed in or not
          this.auth = window.gapi.auth2.getAuthInstance();
          //update component level state to display login status
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>Not sure about status</div>;
    } else if (this.state.isSignedIn) {
      return <div>Signed In</div>;
    } else {
      return <div>Not signed in</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
