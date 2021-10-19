import React from "react";
import "./NotFound.css";
import errorImage from "../../images/404-error.png";
const NotFound = () => {
  return (
    <div className="error">
      <img src={errorImage} alt="" />
    </div>
  );
};

export default NotFound;
