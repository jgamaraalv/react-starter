import React, { Component } from "react";

class TechList extends Component {
  state = {
    techs: ["Node.js", "ReactJS"]
  };

  render() {
    const { techs } = this.state;
    return (
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    );
  }
}

export default TechList;
