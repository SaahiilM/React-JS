import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  //to prevent UserHeader to fetch all the data on its own, comment out componentDidMount()
  //     componentDidMount() {
  //     //taking userId passed as prop to the component
  //     this.props.fetchUser(this.props.userId);
  //   }

  render() {
    // const user = this.props.users.find((user) => user.id === this.props.userId);
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

//ownProps is reference that are to be sent to the UserHeader Component
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
