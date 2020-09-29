import React, { Component } from "react";
import "./style.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        {"dailist".split("").map((item) => {
          return <span>{item}</span>;
        })}
      </div>
    );
  }
}

export default Header;
