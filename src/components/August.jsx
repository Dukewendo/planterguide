import React from 'react'

import "./monthstyles.css";

export default function August() {
  return (
    <div className="august-container">
    <h2 className="august-title">August</h2>
    <h3 className="what-to-plant">Planting</h3>
    <ul className="august-planting-list">
      <li className="august-item-list">Grapes</li>
    </ul>
    <h3 className="what-to-harvest">Harvesting</h3>
    <ul className="what-to-harvest">
      <li className="august-harvesting-list">Wheat</li>
    </ul>
  </div>
  )
}
