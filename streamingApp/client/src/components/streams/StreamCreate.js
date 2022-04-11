import React from "react";
import { Field, reduxForm } from "redux-form"; //Field is component that shows up on screen, reduxForm is a function similar to connect()

class StreamCreate extends React.Component {
  // renderInput(formProps) {
  renderInput({ input, label }) {
    // console.log(formProps);
    return (
      // <input
      //   onChange={formProps.input.onChange}
      //   value={formProps.input.value}
      // ></input>
      // <input {...formProps.input} />
      <div className="field">
        <label>
          {label}
          <input {...input} />
        </label>
      </div>
    );
  }
  onSubmit(formValues) {
    // event.preventDefault() handled by handleSubmit()
    console.log(formValues);
  }

  render() {
    return (
      // handleSubmit() is provided by redux-form
      <form
        className="ui form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate", //purpose of the form
})(StreamCreate);
