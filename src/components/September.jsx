import React from "react";

import "./monthstyles.css";

export default function September() {
  return (
    <div className="september-container">
      <h2 className="september-title">September</h2>
      <h3 className="what-to-plant">Planting (indoor)</h3>
      <ul className="indoor-planting-list">
        <li className="september-indoor-item-list"></li>
        <li className="september-indoor-item-list"></li>
        <li className="september-indoor-item-list"></li>
        <li className="september-indoor-item-list"></li>
        <li className="september-indoor-item-list"></li>
        <li className="september-indoor-item-list"></li>
        <li className="september-indoor-item-list"></li>
      </ul>
      <h3 className="what-to-plant">Planting (outdoors)</h3>
      <ul className="outdoor-planting-list">
        <li className="september-outdoor-item-list"></li>
        <li className="september-outdoor-item-list"></li>
      </ul>
      <h3 className="what-to-harvest-title">Harvesting</h3>
      <ul className="what-to-harvest">
        <li className="september-harvesting-list"></li>
        <li className="september-harvesting-list"></li>
        <li className="september-harvesting-list"></li>
        <li className="september-harvesting-list"></li>
        <li className="september-harvesting-list"></li>
        <li className="september-harvesting-list"></li>
        <li className="september-harvesting-list"></li>
        <li className="september-harvesting-list"></li>
        <li className="september-harvesting-list"></li>
        <li className="september-harvesting-list"></li>
        <li className="september-harvesting-list"></li>
      </ul>
    </div>
  );
}
