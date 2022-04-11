import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  // state = { isSignedIn: null };
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
          // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.onAuthChange(this.auth.isSignedIn.get());

          //listen to current status of user login
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId()); //pass userId of current user
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui green google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign in with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
