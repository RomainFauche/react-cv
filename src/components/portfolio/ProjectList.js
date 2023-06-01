import React, { Component } from "react";
import { portfolioData } from "../../data/portfolioData";
import Project from "./Project";

class ProjectList extends Component {
  state = {
    projects: portfolioData,
    radios: [
      { id: 1, value: "html" },
      { id: 2, value: "css/sass" },
      { id: 3, value: "react" },
      { id: 4, value: "python" },
      { id: 5, value: "javascript" },
    ],
    selcetedRadio: "html",
  };

  handleRadio = (event) => {
    let radio = event.target.value;
    this.setState({ selcetedRadio: radio });
  };

  render() {
    let { projects, radios, selcetedRadio } = this.state;

    return (
      <div className="portfolioContent">
        <ul className="radioDisplay">
          {radios.map((radio) => {
            return (
              <li key={radio.id}>
                <input
                  type="radio"
                  name="radio"
                  checked={radio.value === selcetedRadio}
                  value={radio.value}
                  id={radio.value}
                  onChange={this.handleRadio}
                />
                <label htmlFor={radio.value}>{radio.value}</label>
              </li>
            );
          })}
        </ul>

        <div className="projects">
          {projects
            .filter((item) => item.languages.includes(selcetedRadio))
            .map((item) => {
              return <Project key={item.id} item={item} />;
            })}
        </div>
      </div>
    );
  }
}

export default ProjectList;
