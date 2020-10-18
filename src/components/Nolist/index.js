import React from "react";
import IconBackground from "../../assets/background.svg";
import './style.css';

export default function Nolist(props) {
  return (
    <div className="nolist">
      <div>
        <span className="notification">You have no list</span>
      </div>
      <img className="icon" src={IconBackground} alt="" />
    </div>
  );
}
