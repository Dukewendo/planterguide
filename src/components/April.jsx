import React from 'react'

import "./monthstyles.css";

export default function April() {
  return (
    <div className="april-container">
    <h2 className="april-title">April</h2>
    <h3 className="what-to-plant">Planting</h3>
    <ul className="april-planting-list">
      <li className="april-item-list">Grapes</li>
    </ul>
    <h3 className="what-to-harvest">Harvesting</h3>
    <ul className="what-to-harvest">
      <li className="april-harvesting-list">Wheat</li>
    </ul>
  </div>
  )
}
