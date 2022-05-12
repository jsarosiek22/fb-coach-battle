import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import "./coachselect.css";
import axios from "axios";

const Coachselect = (props) => {
  const [coachOneName, setCoachOneName] = useState("");
  const [coachTwoName, setCoachTwoName] = useState("");
  const [coachOneTitle, setCoachOneTitle] = useState("");
  const [coachTwoTitle, setCoachTwoTitle] = useState("");
  const [coachOnePositions, setCoachOnePositions] = useState("");
  const [coachTwoPositions, setCoachTwoPositions] = useState("");
  const [coachOneStrDesc, setCoachOneStrDesc] = useState("");
  const [coachTwoStrDesc, setCoachTwoStrDesc] = useState("");
  const URL = "/api/coachselect";

  useEffect(() => {
    axios.get(URL).then((res) => {
      if (res.data.filteredResults[1].length !== 0) {
        let fres = res.data.filteredResults[1][0];
        setCoachOneName(fres.coachname);
        setCoachOneTitle(fres.coachtitle);
        setCoachOnePositions(fres.coachpositions.toString());
        setCoachOneStrDesc(fres.coachstrengthdesc);
      }
      if (res.data.filteredResults[2].length !== 0) {
        let fres = res.data.filteredResults[2][0];
        setCoachTwoName(fres.coachname);
        setCoachTwoTitle(fres.coachtitle);
        setCoachTwoPositions(fres.coachpositions.toString());
        setCoachTwoStrDesc(fres.coachstrengthdesc);
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="flexboxcenter">
        <h2> Select a Coach... </h2>
      </div>
      <div className="flexboxcenter">
        <Link to="/teamdashboard">
          <div className="coachSelectButtonSection bgcolorltcharcoal colorwhite">
            <div className="colordkorange coachnametext">
              <b> {coachOneName} </b>
            </div>
            <div className="colormustard">
              <i> {coachOneTitle} </i>
            </div>
            <div> {coachOneStrDesc} </div> <div> {coachOnePositions} </div>
            <input type="hidden" name="optionSel" value="optOneId"></input>
          </div>
        </Link>
        <Link to="/teamdashboard">
          <div className="coachSelectButtonSection bgcolorltcharcoal colorwhite">
            <div className="colordkorange coachnametext">
              <b> {coachTwoName} </b>
            </div>
            <div className="colormustard">
              <i> {coachTwoTitle} </i>
            </div>
            <div> {coachTwoStrDesc} </div> <div> {coachTwoPositions} </div>
            <input type="hidden" name="optionSel" value="optTwoId"></input>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Coachselect;
