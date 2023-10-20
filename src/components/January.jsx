import React from "react";

import "./monthstyles.css"


export default function January() {
  return (
    <div className="january-container">
      <h2 className="january-title">January</h2>
      <h3 className="what-to-plant">Planting</h3>
      <ul className="january-planting-list">
        <li className="january-item-list">Grapes</li>
      </ul>
      <h3 className="what-to-harvest">Harvesting</h3>
      <ul className="what-to-harvest">
        <li className="january-harvesting-list">Wheat</li>
      </ul>
    </div>
  );
}
