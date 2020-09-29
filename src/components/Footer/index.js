import React from "react";
import "./style.css";
import AddIcon from "../../assets/add.svg";

export default function Footer(props) {
  const { onClick } = props;
  return (
    <div className="Footer" onClick={onClick}>
      <img src={AddIcon} alt="" />
    </div>
  );
}
