import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  state = {
    color: "black",
    bold: false,
    italic: false,
    underline: false
  };

  change_color(color) {
    this.setState({ color: color });
  }

  change_style(style) {
    this.setState({ [style]: !this.state[style] });
  }

  render() {
    let styleNames = ["bold", "italic", "underline"];
    let colors = [
      "yellow",
      "blue",
      "red",
      "black",
      "purple",
      "green",
      "pink",
      "orange"
    ];

    let stylingBoxes = styleNames.map(style => {
      return (
        <button
          style={styles[style]}
          key={style}
          onClick={() => this.change_style(style)}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick={() => this.change_color(color)}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea
          rows="4"
          cols="50"
          placeholder={"write something!! ;)"}
          style={{
            color: this.state.color,
            fontWeight: this.state.bold ? "bold" : "",
            fontStyle: this.state.italic ? "italic" : "",
            textDecorationLine: this.state.underline ? "underline" : ""
          }}
        />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
