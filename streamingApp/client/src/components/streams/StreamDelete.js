import React from "react";
import history from "../../history";
import Modal from "../Modal";
import { connect } from "react-redux";
import { fetchStream, deleteStreams } from "../../actions";
import { Link } from "react-router-dom";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          className="ui button negative"
          onClick={() => this.props.deleteStreams(id)}
        >
          DELETE
        </button>
        <Link className="ui button" to="/">
          CANCEL
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to dlete this stream";
    }
    return `Are you sure you want to delete stream with title:  ${this.props.stream.title}`;
  }
  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStreams })(
  StreamDelete
);
