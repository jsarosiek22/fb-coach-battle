import React, { useEffect, useState, useContext } from "react";
import "../teamdashboard/teamdashboard.css";
import axios from "axios";

const Freeagents = () => {
  const URL = "/api/freeagents";

  const [freeagents, setFreeAgents] = useState([]);

  useEffect(() => {
    axios.get(URL).then((res) => {
      let results = res.data.result;
      setFreeAgents(results);
    });
  }, []);

  return (
    <div className="flexboxcenter">
      {freeagents.map((freeagent) => (
        <div className="cornerbackLeftLineup">
          <div className="playerCardOutline">
            <div className="playerCardTopSection">
              <div className="playerCardTopSection">
                <div className="playerCardImageHolder">
                  <img
                    src="images/playerCardImg.JPG"
                    className="playerCardImg"
                  />
                </div>
                <div>
                  <table>
                    <tr>
                      <td title="Player Position">
                        <div>Position:</div>
                        <div>{freeagent.position}</div>
                      </td>
                    </tr>
                    <tr>
                      <td title="Player Name">
                        <div>Name:</div>
                        <div>{freeagent.name}</div>
                      </td>
                    </tr>
                    <tr>
                      <td title="Player Cost">
                        <div>Cost: {freeagent.cost}</div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <table className="playerSkillsTable">
              <tr>
                {Object.entries(freeagent.skills).map((skill, skillnum) =>
                  skillnum < 3 ? (
                    <td>
                      <div>{skill[0]}</div>
                      <div>{skill[1]}</div>
                    </td>
                  ) : null
                )}
              </tr>
              <tr>
                {Object.entries(freeagent.skills).map((skill, skillnum) =>
                  skillnum > 2 ? (
                    <td>
                      <div>{skill[0]}</div>
                      <div>{skill[1]}</div>
                    </td>
                  ) : null
                )}
              </tr>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Freeagents;
