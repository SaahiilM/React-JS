import React from "react";
import ColorContext from "../contexts/ColorContext";
import { LanguageStore } from "../contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import UserCreate from "./UserCreate";

class App extends React.Component {
  //   state = { language: "english" };

  //   onLanguageChange = (language) => {
  //     this.setState({ language: language });
  //   };

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          {/* <LanguageSelector onLanguageChange={this.onLanguageChange} /> */}
          <LanguageSelector />
          <ColorContext.Provider value={"red"}>
            {/* <LanguageContext.Provider value={this.state.language}> */}
            <UserCreate />
            {/* </LanguageContext.Provider> */}
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
