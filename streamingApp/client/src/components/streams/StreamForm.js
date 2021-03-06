import React from "react";
// import { Field, reduxForm } from "redux-form"; //Field is component that shows up on screen, reduxForm is a function similar to connect()
import { Form, Field } from "react-final-form";

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  // renderInput(formProps) {
  //turned to arrow function to handle undefined renderError()
  renderInput = ({ input, label, meta }) => {
    // console.log(formProps);
    const className = `field ${meta.error && meta.touched ? "error" : ""}`; //highlight field on error
    return (
      // <input
      //   onChange={formProps.input.onChange}
      //   value={formProps.input.value}
      // ></input>
      // <input {...formProps.input} />
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {/* <div>{meta.error}</div> */}
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = (formValues) => {
    // event.preventDefault() handled by handleSubmit()
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      // handleSubmit() is provided by redux-form
      <Form
        initialValues={this.props.initialValues}
        onSubmit={this.onSubmit}
        validate={(formValues) => {
          const errors = {};
          if (!formValues.title) {
            errors.title = "Title required";
          }
          if (!formValues.description) {
            errors.description = "Description required";
          }
          return errors;
        }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="ui form error">
            <Field
              name="title"
              component={this.renderInput}
              label="Enter Title"
            />
            <Field
              name="description"
              component={this.renderInput}
              label="Enter Description"
            />
            <button className="ui button primary">Submit</button>
          </form>
        )}
      />
    );
  }
}

// const validate = (formValues) => {
//   const errors = {};
//   if (!formValues.title) {
//     errors.title = "Title required";
//   }
//   if (!formValues.description) {
//     errors.description = "Description required";
//   }
//   return errors;
// };

// export default reduxForm({
//   form: "streamCreate", //purpose of the form
//   validate: validate, //key for validation
// })(StreamCreate);

//to use the connect() and reduxForm() together
export default StreamForm;
