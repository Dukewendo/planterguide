import React from 'react';

import "./monthstyles.css";

export default function July() {
  return (
    <div className="july-container">
    <h2 className="july-title">July</h2>
    <h3 className="what-to-plant">Planting</h3>
    <ul className="july-planting-list">
      <li className="july-item-list">Grapes</li>
    </ul>
    <h3 className="what-to-harvest">Harvesting</h3>
    <ul className="what-to-harvest">
      <li className="july-harvesting-list">Wheat</li>
    </ul>
  </div>
  )
}
