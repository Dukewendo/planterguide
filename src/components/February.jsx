import React from "react";

import "./monthstyles.css";

export default function February() {
  return (
    <div className="february-container">
      <h2 className="february-title">February</h2>
      <h3 className="what-to-plant">Planting (indoor)</h3>
      <ul className="indoor-planting-list">
        <li className="february-indoor-item-list">Artichoke (Globe)</li>
        <li className="february-indoor-item-list">Aubergine</li>
        <li className="february-indoor-item-list">Broad Bean</li>
        <li className="february-indoor-item-list">Broccoli</li>
        <li className="february-indoor-item-list">Brussels Sprout</li>
        <li className="february-indoor-item-list">Cabbage</li>
        <li className="february-indoor-item-list">Cucumber</li>
        <li className="february-indoor-item-list">Kohl Rabi</li>
        <li className="february-indoor-item-list">Leek</li>
        <li className="february-indoor-item-list">Lettuce</li>
        <li className="february-indoor-item-list">Onion</li>
        <li className="february-indoor-item-list">Pepper</li>
        <li className="february-indoor-item-list">Tomato</li>
      </ul>
      <h3 className="what-to-plant">Planting (outdoors)</h3>
      <ul className="outdoor-planting-list">
        <li className="february-outdoor-item-list">Broad Bean</li>
        <li className="february-outdoor-item-list">Parsnip</li>
        <li className="february-outdoor-item-list">Carrot</li>
        <li className="february-outdoor-item-list">Pea</li>
        <li className="february-outdoor-item-list">Radish</li>
      </ul>
      <h3 className="what-to-harvest-title">Harvesting</h3>
      <ul className="what-to-harvest">
        <li className="february-harvesting-list">Broccoli</li>
        <li className="february-harvesting-list">Brussels Sprout</li>
        <li className="february-harvesting-list">Cabbage</li>
        <li className="february-harvesting-list">Carrot</li>
        <li className="february-harvesting-list">Cauliflower</li>
        <li className="february-harvesting-list">Chicory</li>
        <li className="february-harvesting-list">Kale</li>
        <li className="february-harvesting-list">Leek</li>
        <li className="february-harvesting-list">Lettuce</li>
        <li className="february-harvesting-list">Parsnip</li>
        <li className="february-harvesting-list">Swede</li>
      </ul>
    </div>
  );
}
