import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import "./coachselect.css";
import { CoachConsumer } from "../../contexts/CoachContext";
import axios from "axios";

const Coachselect = (props) => {
  //const selCoachNum = useContext(coachContext);
  const [coachOneNum, setCoachOneNum] = useState("");
  const [coachTwoNum, setCoachTwoNum] = useState("");
  const [coachOneName, setCoachOneName] = useState("");
  const [coachTwoName, setCoachTwoName] = useState("");
  const [coachOneTitle, setCoachOneTitle] = useState("");
  const [coachTwoTitle, setCoachTwoTitle] = useState("");
  const [coachOnePositions, setCoachOnePositions] = useState("");
  const [coachTwoPositions, setCoachTwoPositions] = useState("");
  const [coachOneStrDesc, setCoachOneStrDesc] = useState("");
  const [coachTwoStrDesc, setCoachTwoStrDesc] = useState("");
  const [coachOneStrBoasts, setCoachOneStrBoasts] = useState("");
  const [coachTwoStrBoasts, setCoachTwoStrBoasts] = useState("");
  const URL = "/api/coachselect";

  useEffect(() => {
    axios.get(URL).then((res) => {
      if (res.data.filteredResults[1].length !== 0) {
        let fres = res.data.filteredResults[1][0];
        setCoachOneNum(fres.coachnum);
        setCoachOneName(fres.coachname);
        setCoachOneTitle(fres.coachtitle);
        setCoachOnePositions(fres.coachpositions);
        setCoachOneStrDesc(fres.coachstrengthdesc);
        setCoachOneStrBoasts(fres.coachstrengthboasts);
      }
      if (res.data.filteredResults[2].length !== 0) {
        let fres = res.data.filteredResults[2][0];
        setCoachTwoNum(fres.coachnum);
        setCoachTwoName(fres.coachname);
        setCoachTwoTitle(fres.coachtitle);
        setCoachTwoPositions(fres.coachpositions);
        setCoachTwoStrDesc(fres.coachstrengthdesc);
        setCoachTwoStrBoasts(fres.coachstrengthboasts);
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="flexboxcenter">
        <h2> Select a Coach... </h2>
      </div>

      <CoachConsumer>
        {({ setSelectedCoach }) => (
          <div className="flexboxcenter">
            <Link
              to="/teamdashboard"
              onClick={() =>
                setSelectedCoach(
                  coachOneNum,
                  coachOneName,
                  coachOneTitle,
                  coachOnePositions,
                  coachOneStrDesc,
                  coachOneStrBoasts
                )
              }
            >
              <div className="coachSelectButtonSection bgcolorltcharcoal colorwhite">
                <div className="colordkorange coachnametext">
                  <b>
                    {coachOneNum} {coachOneName}{" "}
                  </b>
                </div>
                <div className="colormustard">
                  <i> {coachOneTitle} </i>
                </div>
                <div> {coachOneStrDesc} </div>{" "}
                <div> {coachOnePositions.toString()} </div>
                <input type="hidden" name="optionSel" value="optOneId"></input>
              </div>
            </Link>
            <Link
              to="/teamdashboard"
              onClick={() =>
                setSelectedCoach(
                  coachTwoNum,
                  coachTwoName,
                  coachTwoTitle,
                  coachTwoPositions,
                  coachTwoStrDesc,
                  coachTwoStrBoasts
                )
              }
            >
              <div className="coachSelectButtonSection bgcolorltcharcoal colorwhite">
                <div className="colordkorange coachnametext">
                  <b>
                    {" "}
                    {coachTwoNum} {coachTwoName}{" "}
                  </b>
                </div>
                <div className="colormustard">
                  <i> {coachTwoTitle} </i>
                </div>
                <div> {coachTwoStrDesc} </div>{" "}
                <div> {coachTwoPositions.toString()} </div>
                <input type="hidden" name="optionSel" value="optTwoId"></input>
              </div>
            </Link>
          </div>
        )}
      </CoachConsumer>
    </div>
  );
};

export default Coachselect;
