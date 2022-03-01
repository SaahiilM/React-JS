import React from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const renderOpt = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          {/* display selected option */}
          <div className="menu visible transition">{renderOpt}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
