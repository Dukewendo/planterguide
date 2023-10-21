import React from "react";

import "./monthstyles.css";

export default function January() {
  return (
    <div className="january-container">
      <h2 className="january-title">January</h2>
      <h3 className="what-to-plant">Planting (indoor)</h3>
      <ul className="indoor-planting-list">
        <li className="january-indoor-item-list">Aubergine</li>
        <li className="january-indoor-item-list">Cabbage</li>
        <li className="january-indoor-item-list">Cauliflower</li>
        <li className="january-indoor-item-list">Leek</li>
        <li className="january-indoor-item-list">Lettuce</li>
        <li className="january-indoor-item-list">Onion</li>
        <li className="january-indoor-item-list">Tomato</li>
      </ul>
      <h3 className="what-to-plant">Planting (outdoors)</h3>
      <ul className="outdoor-planting-list">
        <li className="january-outdoor-item-list">Broad Bean</li>
        <li className="january-outdoor-item-list">Pea</li>
      </ul>
      <h3 className="what-to-harvest-title">Harvesting</h3>
      <ul className="what-to-harvest">
        <li className="january-harvesting-list">Artichoke (Jerusalem)</li>
        <li className="january-harvesting-list">Brussels Sprout</li>
        <li className="january-harvesting-list">Cabbage</li>
        <li className="january-harvesting-list">Carrot</li>
        <li className="january-harvesting-list">Cauliflower</li>
        <li className="january-harvesting-list">Chicory</li>
        <li className="january-harvesting-list">Kale</li>
        <li className="january-harvesting-list">Leek</li>
        <li className="january-harvesting-list">Lettuce</li>
        <li className="january-harvesting-list">Parsnip</li>
        <li className="january-harvesting-list">Swede</li>
      </ul>
    </div>
  );
}
