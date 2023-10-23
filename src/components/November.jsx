import React from "react";

import "./monthstyles.css";

export default function November() {
  return (
    <div className="november-container">
      <h2 className="november-title">November</h2>
      <h3 className="what-to-plant">Planting (indoor)</h3>
      <ul className="indoor-planting-list">
        <li className="november-indoor-item-list">Lettuce</li>
        <li className="november-indoor-item-list">Onion</li>
      </ul>
      <h3 className="what-to-plant">Planting (outdoors)</h3>
      <ul className="outdoor-planting-list">
        <li className="november-outdoor-item-list">Broad Bean</li>
        <li className="november-outdoor-item-list">Pea</li>
      </ul>
      <h3 className="what-to-harvest-title">Harvesting</h3>
      <ul className="what-to-harvest">
        <li className="november-harvesting-item">Artichoke (Jerusalem)</li>
        <li className="november-harvesting-item">Broccoli</li>
        <li className="november-harvesting-item">Brussels Sprout</li>
        <li className="november-harvesting-item">Cabbage</li>
        <li className="november-harvesting-item">Carrot</li>
        <li className="november-harvesting-item">Cauliflower</li>
        <li className="november-harvesting-item">Celeriac</li>
        <li className="november-harvesting-item">Celery</li>
        <li className="november-harvesting-item">Chard</li>
        <li className="november-harvesting-item">Chicory</li>
        <li className="november-harvesting-item">Chinese Cabbage</li>
        <li className="november-harvesting-item">Kale</li>
        <li className="november-harvesting-item">Leek</li>
        <li className="november-harvesting-item">Lettuce</li>
        <li className="november-harvesting-item">Parsnip</li>
        <li className="november-harvesting-item">Potato</li>
        <li className="november-harvesting-item">Pumpkin</li>
        <li className="november-harvesting-item">Samphire</li>
        <li className="november-harvesting-item">Swede</li>
      </ul>
    </div>
  );
}
