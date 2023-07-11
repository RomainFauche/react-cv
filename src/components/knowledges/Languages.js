import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 1.7 },
      { id: 2, value: "Css", xp: 1.7 },
      { id: 3, value: "Python", xp: 1 },
    ],

    frameworks: [
      { id: 1, value: "React", xp: 1.3 },
      { id: 2, value: "Sass", xp: 1.5 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="langages"
        />
        <ProgressBar
          languages={frameworks}
          className="framworksDiplay"
          title="Frameworks & Bibliothèques"
        />
      </div>
    );
  }
}

export default Languages;
