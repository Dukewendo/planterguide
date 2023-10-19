import React from "react";
import { HashRouter, Route, Routes, Link } from "react-router-dom";

import "../components/monthlist.css";

import Planterguide from "./Planterguide";

export default function Monthlist() {
  return (
    <HashRouter basename="/">
      <div className="monthlist-container">
        <ul>
          <li>
            <Link to="/planterguide">PlanterGuide Home</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/planterguide" element={<Planterguide/>} />
        </Routes>
      </div>
    </HashRouter>
  );
}