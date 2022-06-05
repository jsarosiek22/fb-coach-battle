import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Teamdashboard from "./components/teamdashboard/Teamdashboard";
import Coachselect from "./components/coachselect/Coachselect";
import Home from "./components/home/Home";
import { CoachProvider } from "./contexts/CoachContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CoachProvider>
        <Routes>
          <Route path="*" element={<App />} />{" "}
          <Route path="/Coachselect" element={<Coachselect />} />{" "}
          <Route path="*" element={<Home />} />{" "}
          <Route path="/teamdashboard" element={<Teamdashboard />} />{" "}
        </Routes>{" "}
      </CoachProvider>
    </Router>{" "}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
