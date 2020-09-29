import React, { Component } from "react";
import "./style.css";

export default function Header(props) {
  return (
    <div className="Header">
      {"dailist".split("").map((item) => {
        return <span>{item}</span>;
      })}
    </div>
  );
}
