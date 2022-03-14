import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  // state = { term: "" };
  const [term, setTerm] = useState("");

  // onInputChange = (event) => {
  //   this.setState({ term: event.target.value });
  // };
  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  // onFormSubmit = (event) => {
  //   event.preventDefault();
  //   this.props.onFormSubmit(this.state.term);
  //   //callback from parent component
  // };

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      {/* <form onSubmit={this.onFormSubmit} className="ui form"> */}
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search </label>
          <input
            type="text"
            // value={this.state.term}
            value={term}
            // onChange={this.onInputChange}
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
};

// class SearchBar extends React.Component {
//   render() {

//   }
// }

export default SearchBar;
