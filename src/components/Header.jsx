import React from "react";

import "../components/header.css";

export default function header() {
  return (
    <div className="header-container">
      <ul className="header-list">
        <h1 className="main-page-title">Uk Planting guide</h1>
        <li className="header-list-item">Home</li>
        <li className="header-list-item">About</li>
      </ul>
    </div>
  );
}
