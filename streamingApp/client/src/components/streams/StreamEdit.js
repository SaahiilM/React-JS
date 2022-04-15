import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
// const StreamEdit = (props) => {
//   console.log(props);
//   return <div>StreamEdit</div>;
// };

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>

        {/* _.pick() is used to get only the fields that are to be allowed to change from the stream object */}
        {/* initialValues is redux form specific prop as the form is wrapped inside redux form */}
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        ></StreamForm>
        {/* 2nd method without lodash */}
        {/* <StreamForm
          initialValues={{ title: this.props.stream.title, description:this.props.stream.description }}
          onSubmit={this.onSubmit}
        ></StreamForm> */}
      </div>
    );
  }
}

// ownProps === StreamEdit
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
