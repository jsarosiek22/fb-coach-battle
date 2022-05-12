import Header from "./components/header/Header";
import Home from "./components/home/Home";
import "./App.css";

import React, { useEffect, useState } from "react";

const App = (props) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Home />
      </div>
    </div>
  );
};

export default App;
