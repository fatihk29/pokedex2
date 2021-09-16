import React from "react";
import "./BackButton.css";

const BackButton = (props) => {
  return <div className="back-button" onClick={props.onClick}></div>;
};

export default BackButton;
