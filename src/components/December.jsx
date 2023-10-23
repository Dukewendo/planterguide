import React from "react";

import "./monthstyles.css";

export default function December() {
  return (
    <div className="december-container">
      <h2 className="december-title">December</h2>
      <h3 className="what-to-plant">Planting (indoor)</h3>
      <ul className="indoor-planting-list">
        <li className="december-indoor-item-list">Lettuce</li>
        <li className="december-indoor-item-list">Onion</li>
      </ul>
      <h3 className="what-to-plant">Planting (outdoors)</h3>
      <ul className="outdoor-planting-list">
        <li className="december-outdoor-item-list">Broad Bean</li>
      </ul>
      <h3 className="what-to-harvest-title">Harvesting</h3>
      <ul className="what-to-harvest">
        <li className="december-harvesting-item">Artichoke (Jerusalem)</li>
        <li className="december-harvesting-item">Brussels Sprout</li>
        <li className="december-harvesting-item">Cabbage</li>
        <li className="december-harvesting-item">Carrot</li>
        <li className="december-harvesting-item">Cauliflower</li>
        <li className="december-harvesting-item">Celeriac</li>
        <li className="december-harvesting-item">Chicory</li>
        <li className="december-harvesting-item">Kale</li>
        <li className="december-harvesting-item">Leek</li>
        <li className="december-harvesting-item">Lettuce</li>
        <li className="december-harvesting-item">Parsnip</li>
        <li className="december-harvesting-item">Potato</li>
        <li className="december-harvesting-item">Swede</li>
      </ul>
    </div>
  );
}
