import React from 'react'

import "./monthstyles.css";

export default function February() {
  return (
    <div className="february-container">
    <h2 className="february-title">February</h2>
    <h3 className="what-to-plant">Planting</h3>
    <ul className="February-planting-list">
      <li className="february-item-list">Grapes</li>
    </ul>
    <h3 className="what-to-harvest">Harvesting</h3>
    <ul className="what-to-harvest">
      <li className="february-harvesting-list">Wheat</li>
    </ul>
  </div>
  )
}
