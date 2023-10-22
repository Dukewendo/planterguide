import React from "react";
import { HashRouter, Route, Routes, Link } from "react-router-dom";

import "../components/monthlist.css";

import Planterguide from "./Planterguide";
import January from "./January";
import February from "./February";
import March from "./March";
import April from "./April";
import May from "./May";
import June from "./June";
import July from "./July";
import August from "./August";
import September from "./September";
import October from "./October";
import November from "./November";
import December from "./December";

export default function Monthlist() {
  return (
    <HashRouter basename="/">
      <div className="monthlist-container">
        <ul className="main-ul">
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
          <Route path="/january" element={<January />} />
          <Route path="/february" element={<February />} />
          <Route path="/march" element={<March />} />
          <Route path="/april" element={<April />} />
          <Route path="/may" element={<May />} />
          <Route path="/june" element={<June />} />
          <Route path="/july" element={<July />} />
          <Route path="/august" element={<August />} />
          <Route path="/september" element={<September />} />
          <Route path="/october" element={<October />} />
          <Route path="/november" element={<November />} />
          <Route path="/december" element={<December />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
