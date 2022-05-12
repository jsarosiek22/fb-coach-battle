import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import "./teamdashboard.css";
import axios from "axios";

const Teamdashboard = (props) => {
  const [qbName, setQBName] = useState("");
  const [qbSpe, setQBSpe] = useState(0);
  const [qbStr, setQBStr] = useState(0);
  const [qbTP, setQBTP] = useState(0);
  const [qbTAS, setQBTAS] = useState(0);
  const [qbTAM, setQBTAM] = useState(0);
  const [qbTAD, setQBTAD] = useState(0);
  const [wrOneName, setWROneName] = useState("");
  const [wrOneSpe, setWROneSpe] = useState(0);
  const [wrOneStr, setWROneStr] = useState(0);
  const [wrOneCth, setWROneCth] = useState(0);
  const [wrOneElu, setWROneElu] = useState(0);
  const [wrTwoName, setWRTwoName] = useState("");
  const [wrTwoSpe, setWRTwoSpe] = useState(0);
  const [wrTwoStr, setWRTwoStr] = useState(0);
  const [wrTwoCth, setWRTwoCth] = useState(0);
  const [wrTwoElu, setWRTwoElu] = useState(0);
  const [teName, setTEName] = useState("");
  const [teSpe, setTESpe] = useState(0);
  const [teStr, setTEStr] = useState(0);
  const [teCth, setTECth] = useState(0);
  const [teRB, setTERB] = useState(0);
  const [tePB, setTEPB] = useState(0);
  const [rbName, setRBName] = useState("");
  const [rbSpe, setRBSpe] = useState(0);
  const [rbStr, setRBStr] = useState(0);
  const [rbCth, setRBCth] = useState(0);
  const [rbElu, setRBElu] = useState(0);
  const [fbName, setFBName] = useState("");
  const [fbSpe, setFBSpe] = useState(0);
  const [fbStr, setFBStr] = useState(0);
  const [fbCth, setFBCth] = useState(0);
  const [fbRB, setFBRB] = useState(0);
  const [fbPB, setFBPB] = useState(0);
  const [otOneName, setOTOneName] = useState("");
  const [otOneSpe, setOTOneSpe] = useState(0);
  const [otOneStr, setOTOneStr] = useState(0);
  const [otOneRB, setOTOneRB] = useState(0);
  const [otOnePB, setOTOnePB] = useState(0);
  const [otTwoName, setOTTwoName] = useState("");
  const [otTwoSpe, setOTTwoSpe] = useState(0);
  const [otTwoStr, setOTTwoStr] = useState(0);
  const [otTwoRB, setOTTwoRB] = useState(0);
  const [otTwoPB, setOTTwoPB] = useState(0);
  const [ogOneName, setOGOneName] = useState("");
  const [ogOneSpe, setOGOneSpe] = useState(0);
  const [ogOneStr, setOGOneStr] = useState(0);
  const [ogOneRB, setOGOneRB] = useState(0);
  const [ogOnePB, setOGOnePB] = useState(0);
  const [ogTwoName, setOGTwoName] = useState("");
  const [ogTwoSpe, setOGTwoSpe] = useState(0);
  const [ogTwoStr, setOGTwoStr] = useState(0);
  const [ogTwoRB, setOGTwoRB] = useState(0);
  const [ogTwoPB, setOGTwoPB] = useState(0);
  const [cName, setCName] = useState("");
  const [cSpe, setCSpe] = useState(0);
  const [cStr, setCStr] = useState(0);
  const [cRB, setCRB] = useState(0);
  const [cPB, setCPB] = useState(0);

  const URL = "/api/baseteam";

  useEffect(() => {
    axios.get(URL).then((res) => {
      console.log(res);
      let baseteam = res.data.result;
      let wradd = false;
      let otadd = false;
      let ogadd = false;
      for (var i = 0; i < baseteam.length; i++) {
        var players = baseteam[i];
        var skills = players.skills;
        if (players.position == "QB") {
          setQBName(players.name);
          setQBSpe(skills.SPE);
          setQBStr(skills.STR);
          setQBTAD(skills.TAD);
          setQBTAM(skills.TAM);
          setQBTAS(skills.TAS);
          setQBTP(skills.TP);
        }
        if (players.position == "RB") {
          setRBName(players.name);
          setRBCth(skills.CTH);
          setRBElu(skills.ELU);
          setRBSpe(skills.SPE);
          setRBStr(skills.STR);
        }
        if (players.position == "TE") {
          setTEName(players.name);
          setTECth(skills.CTH);
          setTEPB(skills.PB);
          setTERB(skills.RB);
          setTESpe(skills.SPE);
          setTEStr(skills.STR);
        }
        if (players.position == "FB") {
          setFBName(players.name);
          setFBCth(skills.CTH);
          setFBPB(skills.PB);
          setFBRB(skills.RB);
          setFBSpe(skills.SPE);
          setFBStr(skills.STR);
        }
        if (players.position == "C") {
          setCName(players.name);
          setCPB(skills.PB);
          setCRB(skills.RB);
          setCSpe(skills.SPE);
          setCStr(skills.STR);
        }
        if (players.position == "WR") {
          if (!wradd) {
            setWROneName(players.name);
            setWROneCth(skills.CTH);
            setWROneElu(skills.ELU);
            setWROneSpe(skills.SPE);
            setWROneStr(skills.STR);
            wradd = true;
          } else {
            setWRTwoName(players.name);
            setWRTwoCth(skills.CTH);
            setWRTwoElu(skills.ELU);
            setWRTwoSpe(skills.SPE);
            setWRTwoStr(skills.STR);
          }
        }
        if (players.position == "OT") {
          if (!otadd) {
            setOTOneName(players.name);
            setOTOnePB(skills.PB);
            setOTOneRB(skills.RB);
            setOTOneSpe(skills.SPE);
            setOTOneStr(skills.STR);
            otadd = true;
          } else {
            setOTTwoName(players.name);
            setOTTwoPB(skills.PB);
            setOTTwoRB(skills.RB);
            setOTTwoSpe(skills.SPE);
            setOTTwoStr(skills.STR);
          }
        }
        if (players.position == "OG") {
          if (!ogadd) {
            setOGOneName(players.name);
            setOGOnePB(skills.PB);
            setOGOneRB(skills.RB);
            setOGOneSpe(skills.SPE);
            setOGOneStr(skills.STR);
            ogadd = true;
          } else {
            setOGTwoName(players.name);
            setOGTwoPB(skills.PB);
            setOGTwoRB(skills.RB);
            setOGTwoSpe(skills.SPE);
            setOGTwoStr(skills.STR);
          }
        }
      }
    });
  }, []);
  return (
    <div>
      <Header />
      <div className="flexboxcenter">
        <h2>Here is your base team...</h2>
      </div>
      <div className="flexboxcenter">
        {/* WIDE RECEIVER ONE */}
        <div className="wideReceiverLeftLineup">
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
                        <div>WR</div>
                      </td>
                    </tr>
                    <tr>
                      <td title="Player Name">
                        <div>Name:</div>
                        <div>{wrOneName}</div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <table className="playerSkillsTable">
              <tr>
                <td title="Speed">
                  <div>Spe:</div>
                  <div>{wrOneSpe}</div>
                </td>
                <td title="Strength">
                  <div>Str:</div>
                  <div>{wrOneStr}</div>
                </td>
                <td title="Catch">
                  <div>Cth:</div>
                  <div>{wrOneCth}</div>
                </td>
              </tr>
              <tr>
                <td title="Elusiveness">
                  <div>Elu:</div>
                  <div>{wrOneElu}</div>
                </td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
        {/* OFFENSIVE LINE */}
        <div className="offensiveLinemenLineup">
          {/* LEFT OFFENSIVE TACKLE */}
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
                        <div>OT</div>
                      </td>
                    </tr>
                    <tr>
                      <td title="Player Name">
                        <div>Name:</div>
                        <div>{otOneName}</div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <table className="playerSkillsTable">
              <tr>
                <td title="Speed">
                  <div>Spe:</div>
                  <div>{otOneSpe}</div>
                </td>
                <td title="Strength">
                  <div>Str:</div>
                  <div>{otOneStr}</div>
                </td>
                <td title="Pass Block">
                  <div>PB:</div>
                  <div>{otOnePB}</div>
                </td>
              </tr>
              <tr>
                <td title="Run Block">
                  <div>RB:</div>
                  <div>{otOneRB}</div>
                </td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
          {/* LEFT OFFENSIVE GUARD */}
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
                        <div>OG</div>
                      </td>
                    </tr>
                    <tr>
                      <td title="Player Name">
                        <div>Name:</div>
                        <div>{ogOneName}</div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <table className="playerSkillsTable">
              <tr>
                <td title="Speed">
                  <div>Spe:</div>
                  <div>{ogOneSpe}</div>
                </td>
                <td title="Strength">
                  <div>Str:</div>
                  <div>{ogOneStr}</div>
                </td>
                <td title="Pass Block">
                  <div>PB:</div>
                  <div>{ogOnePB}</div>
                </td>
              </tr>
              <tr>
                <td title="Run Block">
                  <div>RB:</div>
                  <div>{ogOneRB}</div>
                </td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
          {/* CENTER */}
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
                        <div>C</div>
                      </td>
                    </tr>
                    <tr>
                      <td title="Player Name">
                        <div>Name:</div>
                        <div>{cName}</div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <table className="playerSkillsTable">
              <tr>
                <td title="Speed">
                  <div>Spe:</div>
                  <div>{cSpe}</div>
                </td>
                <td title="Strength">
                  <div>Str:</div>
                  <div>{cStr}</div>
                </td>
                <td title="Pass Block">
                  <div>PB:</div>
                  <div>{cPB}</div>
                </td>
              </tr>
              <tr>
                <td title="Run Block">
                  <div>RB:</div>
                  <div>{cRB}</div>
                </td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
          {/* RIGHT OFFENSIVE GUARD */}
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
                        <div>OG</div>
                      </td>
                    </tr>
                    <tr>
                      <td title="Player Name">
                        <div>Name:</div>
                        <div>{ogTwoName}</div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <table className="playerSkillsTable">
              <tr>
                <td title="Speed">
                  <div>Spe:</div>
                  <div>{ogTwoSpe}</div>
                </td>
                <td title="Strength">
                  <div>Str:</div>
                  <div>{ogTwoStr}</div>
                </td>
                <td title="Pass Block">
                  <div>PB:</div>
                  <div>{ogTwoPB}</div>
                </td>
              </tr>
              <tr>
                <td title="Run Block">
                  <div>RB:</div>
                  <div>{ogTwoRB}</div>
                </td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
          {/* RIGHT OFFENSIVE TACKLE */}
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
                        <div>OT</div>
                      </td>
                    </tr>
                    <tr>
                      <td title="Player Name">
                        <div>Name:</div>
                        <div>{otTwoName}</div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <table className="playerSkillsTable">
              <tr>
                <td title="Speed">
                  <div>Spe:</div>
                  <div>{otTwoSpe}</div>
                </td>
                <td title="Strength">
                  <div>Str:</div>
                  <div>{otTwoStr}</div>
                </td>
                <td title="Pass Block">
                  <div>PB:</div>
                  <div>{otTwoPB}</div>
                </td>
              </tr>
              <tr>
                <td title="Run Block">
                  <div>RB:</div>
                  <div>{otTwoRB}</div>
                </td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
        {/* END OFFENSIVE LINE */}
        {/* TIGHT END */}
        <div className="tightEndLineup">
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
                        <div>TE</div>
                      </td>
                    </tr>
                    <tr>
                      <td title="Player Name">
                        <div>Name:</div>
                        <div>{teName}</div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <table className="playerSkillsTable">
              <tr>
                <td title="Speed">
                  <div>Spe:</div>
                  <div>{teSpe}</div>
                </td>
                <td title="Strength">
                  <div>Str:</div>
                  <div>{teStr}</div>
                </td>
                <td title="Catch">
                  <div>Cth:</div>
                  <div>{teCth}</div>
                </td>
              </tr>
              <tr>
                <td title="Run Block">
                  <div>RB:</div>
                  <div>{teRB}</div>
                </td>
                <td title="Pass Block">
                  <div>PB:</div>
                  <div>{tePB}</div>
                </td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>{" "}
        {/* END TIGHT END */}
        {/* WIDE RECEIVER ONE */}
        <div className="wideReceiverRightLineup">
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
                        <div>WR</div>
                      </td>
                    </tr>
                    <tr>
                      <td title="Player Name">
                        <div>Name:</div>
                        <div>{wrTwoName}</div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <table className="playerSkillsTable">
              <tr>
                <td title="Speed">
                  <div>Spe:</div>
                  <div>{wrTwoSpe}</div>
                </td>
                <td title="Strength">
                  <div>Str:</div>
                  <div>{wrTwoStr}</div>
                </td>
                <td title="Catch">
                  <div>Cth:</div>
                  <div>{wrTwoCth}</div>
                </td>
              </tr>
              <tr>
                <td title="Elusiveness">
                  <div>Elu:</div>
                  <div>{wrTwoElu}</div>
                </td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
        {/* END WIDE RECEIVER 2 */}
      </div>
      <div className="flexboxcenter">
        {/* QUARTER BACK */}
        <div className="quarterbackLineup">
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
                        <div>QB</div>
                      </td>
                    </tr>
                    <tr>
                      <td title="Player Name">
                        <div>Name:</div>
                        <div>{qbName}</div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <table className="playerSkillsTable">
              <tr>
                <td title="Speed">
                  <div>Spe:</div>
                  <div>{qbSpe}</div>
                </td>
                <td title="Strength">
                  <div>Str:</div>
                  <div>{qbStr}</div>
                </td>
                <td title="Throw Power">
                  <div>TP:</div>
                  <div>{qbTP}</div>
                </td>
              </tr>
              <tr>
                <td title="Throw Accuracy Short">
                  <div>TAS:</div>
                  <div>{qbTAS}</div>
                </td>
                <td title="Throw Accuracy Medium">
                  <div>TAM:</div>
                  <div>{qbTAM}</div>
                </td>
                <td title="Throw Accuracy Deep">
                  <div>TAD:</div>
                  <div>{qbTAD}</div>
                </td>
              </tr>
            </table>
          </div>
        </div>
        {/* END QUARTER BACK */}
      </div>
      <div className="flexboxcenter">
        {/* FULL BACK */}
        <div className="fullbackLineup">
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
                        <div>FB</div>
                      </td>
                    </tr>
                    <tr>
                      <td title="Player Name">
                        <div>Name:</div>
                        <div>{fbName}</div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <table className="playerSkillsTable">
              <tr>
                <td title="Speed">
                  <div>Spe:</div>
                  <div>{fbSpe}</div>
                </td>
                <td title="Strength">
                  <div>Str:</div>
                  <div>{fbStr}</div>
                </td>
                <td title="Catch">
                  <div>Cth:</div>
                  <div>{fbCth}</div>
                </td>
              </tr>
              <tr>
                <td title="Pass Block">
                  <div>PB:</div>
                  <div>{fbPB}</div>
                </td>
                <td title="Run Block">
                  <div>RB:</div>
                  <div>{fbRB}</div>
                </td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
        {/* END FULL BACK */}
      </div>
      <div className="flexboxcenter">
        {/* RUNNING BACK */}
        <div className="runningbackLineup">
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
                        <div>RB</div>
                      </td>
                    </tr>
                    <tr>
                      <td title="Player Name">
                        <div>Name:</div>
                        <div>{rbName}</div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <table className="playerSkillsTable">
              <tr>
                <td title="Speed">
                  <div>Spe:</div>
                  <div>{rbSpe}</div>
                </td>
                <td title="Strength">
                  <div>Str:</div>
                  <div>{rbStr}</div>
                </td>
                <td title="Catch">
                  <div>Cth:</div>
                  <div>{rbCth}</div>
                </td>
              </tr>
              <tr>
                <td title="Elusiveness">
                  <div>Elu:</div>
                  <div>{rbElu}</div>
                </td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
        {/* END RUNNING BACK */}
      </div>
    </div>
  );
};

export default Teamdashboard;
