import React from "react";
import ColorContext from "../contexts/ColorContext";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  //   static contextType = LanguageContext; //adds property contextType to class

  //   render() {
  //     // console.log(this.context);

  //     const text = this.context === "english" ? "Submit" : "Voorleggen";
  //     return <button className="ui button primary">{text}</button>;
  //   }

  renderSubmit(language) {
    return language === "english" ? "Submit" : "Voorleggen";
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color} `}>
        <LanguageContext.Consumer>
          {/* always a function. value is what we passed in context */}
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    // console.log(this.context);

    // const text = this.context === "english" ? "Submit" : "Voorleggen";
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
