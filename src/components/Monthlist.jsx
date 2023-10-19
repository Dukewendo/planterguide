import React from "react";
import { HashRouter, Route, Routes, Link } from "react-router-dom";

import "../components/monthlist.css";

import Planterguide from "./Planterguide";

export default function Monthlist() {
  return (
    <HashRouter basename="/">
      <div className="monthlist-container">
        <ul className="main-ul">
          <li className="main-list">
            <Link to="/planterguide">Home</Link>
          </li>
          <li className="main-month-list">
            <Link to="/January">January</Link>
          </li>
          <li className="main-month-list">
            <Link to="/February">February</Link>
          </li>
          <li className="main-month-list">
            <Link to="/March">March</Link>
          </li>
          <li className="main-month-list">
            <Link to="/April">April</Link>
          </li>
          <li className="main-month-list">
            <Link to="/May">May</Link>
          </li>
          <li className="main-month-list">
            <Link to="/June">June</Link>
          </li>
          <li className="main-month-list">
            <Link to="/July">July</Link>
          </li>
          <li className="main-month-list">
            <Link to="/August">August</Link>
          </li>
          <li className="main-month-list">
            <Link to="/September">September</Link>
          </li>
          <li className="main-month-list">
            <Link to="/October">October</Link>
          </li>
          <li className="main-month-list">
            <Link to="/November">November</Link>
          </li>
          <li className="main-month-list">
            <Link to="/December">December</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/planterguide" element={<Planterguide />} />
        </Routes>
      </div>
    </HashRouter>
  );
}