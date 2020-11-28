import React from "react";

import "./style.scss";

const Loader = () => {
  return (
    <div className="loading-container">
      <h1 className="loading-header">Loading</h1>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
