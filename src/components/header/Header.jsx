import "./header.css";
import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";

const Header = (props) => {
  return (
    <div>
      <div className="header bgcolorcharcoal">
        <div className="flexbox">
          <div className="colordkorange">
            <h1>FB Coach Battle</h1>
          </div>
          <div className="headermenu colorwhite">
            <a>
              <Link to="/">Home</Link>
            </a>
            <a>
              <Link to="/Coachselect">Play</Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
