import React, { useEffect, useState, useContext } from "react";
import "../teamdashboard/teamdashboard.css";
import axios from "axios";

const Offense = (props) => {
  const [deOneName, setDEOneName] = useState("");
  const [deOneSpe, setDEOneSpe] = useState(0);
  const [deOneStr, setDEOneStr] = useState(0);
  const [deOneRD, setDEOneRD] = useState(0);
  const [deOnePR, setDEOnePR] = useState(0);
  const [deTwoName, setDETwoName] = useState("");
  const [deTwoSpe, setDETwoSpe] = useState(0);
  const [deTwoStr, setDETwoStr] = useState(0);
  const [deTwoRD, setDETwoRD] = useState(0);
  const [deTwoPR, setDETwoPR] = useState(0);
  const [dtOneName, setDTOneName] = useState("");
  const [dtOneSpe, setDTOneSpe] = useState(0);
  const [dtOneStr, setDTOneStr] = useState(0);
  const [dtOneRD, setDTOneRD] = useState(0);
  const [dtOnePR, setDTOnePR] = useState(0);
  const [dtTwoName, setDTTwoName] = useState("");
  const [dtTwoSpe, setDTTwoSpe] = useState(0);
  const [dtTwoStr, setDTTwoStr] = useState(0);
  const [dtTwoRD, setDTTwoRD] = useState(0);
  const [dtTwoPR, setDTTwoPR] = useState(0);
  const [lbOneName, setLBOneName] = useState("");
  const [lbOneSpe, setLBOneSpe] = useState(0);
  const [lbOneStr, setLBOneStr] = useState(0);
  const [lbOnePR, setLBOnePR] = useState(0);
  const [lbOneRD, setLBOneRD] = useState(0);
  const [lbOneCth, setLBOneCth] = useState(0);
  const [lbOnePC, setLBOnePC] = useState(0);
  const [lbTwoName, setLBTwoName] = useState("");
  const [lbTwoSpe, setLBTwoSpe] = useState(0);
  const [lbTwoStr, setLBTwoStr] = useState(0);
  const [lbTwoPR, setLBTwoPR] = useState(0);
  const [lbTwoRD, setLBTwoRD] = useState(0);
  const [lbTwoCth, setLBTwoCth] = useState(0);
  const [lbTwoPC, setLBTwoPC] = useState(0);
  const [lbThreeName, setLBThreeName] = useState("");
  const [lbThreeSpe, setLBThreeSpe] = useState(0);
  const [lbThreeStr, setLBThreeStr] = useState(0);
  const [lbThreePR, setLBThreePR] = useState(0);
  const [lbThreeRD, setLBThreeRD] = useState(0);
  const [lbThreeCth, setLBThreeCth] = useState(0);
  const [lbThreePC, setLBThreePC] = useState(0);
  const [cbOneName, setCBOneName] = useState("");
  const [cbOneSpe, setCBOneSpe] = useState(0);
  const [cbOneStr, setCBOneStr] = useState(0);
  const [cbOneCth, setCBOneCth] = useState(0);
  const [cbOnePC, setCBOnePC] = useState(0);
  const [cbTwoName, setCBTwoName] = useState("");
  const [cbTwoSpe, setCBTwoSpe] = useState(0);
  const [cbTwoStr, setCBTwoStr] = useState(0);
  const [cbTwoCth, setCBTwoCth] = useState(0);
  const [cbTwoPC, setCBTwoPC] = useState(0);
  const [ssName, setSSName] = useState("");
  const [ssSpe, setSSSpe] = useState(0);
  const [ssStr, setSSStr] = useState(0);
  const [ssCth, setSSCth] = useState(0);
  const [ssPC, setSSPC] = useState(0);
  const [fsName, setFSName] = useState("");
  const [fsSpe, setFSSpe] = useState(0);
  const [fsStr, setFSStr] = useState(0);
  const [fsCth, setFSCth] = useState(0);
  const [fsPC, setFSPC] = useState(0);

  const URL = "/api/baseteam";

  useEffect(() => {
    axios.get(URL).then((res) => {
      let baseteam = res.data.result;
      let cbadd = false;
      let dtadd = false;
      let deadd = false;
      let lbcnt = 0;
      for (var i = 0; i < baseteam.length; i++) {
        var players = baseteam[i];
        var skills = players.skills;
        if (players.position == "SS") {
          setSSName(players.name);
          setSSSpe(skills.SPE);
          setSSStr(skills.STR);
          setSSCth(skills.CTH);
          setSSPC(skills.PC);
        }
        if (players.position == "FS") {
          setFSName(players.name);
          setFSSpe(skills.SPE);
          setFSStr(skills.STR);
          setFSCth(skills.CTH);
          setFSPC(skills.PC);
        }
        if (players.position == "DE") {
          if (!deadd) {
            setDEOneName(players.name);
            setDEOneStr(skills.STR);
            setDEOnePR(skills.PR);
            setDEOneSpe(skills.SPE);
            setDEOneRD(skills.RD);
            deadd = true;
          } else {
            setDETwoName(players.name);
            setDETwoStr(skills.STR);
            setDETwoPR(skills.PR);
            setDETwoSpe(skills.SPE);
            setDETwoRD(skills.RD);
          }
        }
        if (players.position == "DT") {
          if (!dtadd) {
            setDTOneName(players.name);
            setDTOneStr(skills.STR);
            setDTOnePR(skills.PR);
            setDTOneSpe(skills.SPE);
            setDTOneRD(skills.RD);
            dtadd = true;
          } else {
            setDTTwoName(players.name);
            setDTTwoStr(skills.STR);
            setDTTwoPR(skills.PR);
            setDTTwoSpe(skills.SPE);
            setDTTwoRD(skills.RD);
          }
        }
        if (players.position == "CB") {
          if (!cbadd) {
            setCBOneName(players.name);
            setCBOneStr(skills.STR);
            setCBOnePC(skills.PC);
            setCBOneSpe(skills.SPE);
            setCBOneCth(skills.CTH);
            cbadd = true;
          } else {
            setCBTwoName(players.name);
            setCBTwoStr(skills.STR);
            setCBTwoPC(skills.PC);
            setCBTwoSpe(skills.SPE);
            setCBTwoCth(skills.CTH);
          }
        }
        if (players.position == "LB") {
          if (lbcnt == 0) {
            setLBOneName(players.name);
            setLBOneStr(skills.STR);
            setLBOnePC(skills.PC);
            setLBOneSpe(skills.SPE);
            setLBOneCth(skills.CTH);
            setLBOnePR(skills.PR);
            setLBOneRD(skills.RD);
            lbcnt++;
          } else if (lbcnt == 1) {
            setLBTwoName(players.name);
            setLBTwoStr(skills.STR);
            setLBTwoPC(skills.PC);
            setLBTwoSpe(skills.SPE);
            setLBTwoCth(skills.CTH);
            setLBTwoPR(skills.PR);
            setLBTwoRD(skills.RD);
            lbcnt++;
          } else {
            setLBThreeName(players.name);
            setLBThreeStr(skills.STR);
            setLBThreePC(skills.PC);
            setLBThreeSpe(skills.SPE);
            setLBThreeCth(skills.CTH);
            setLBThreePR(skills.PR);
            setLBThreeRD(skills.RD);
          }
        }
      }
    });
  }, []);

  return (
    <div>
      <div className="flexboxcenter">
        {/* CORNERBACK ONE */}
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
                        <div>CB</div>
                      </td>
                    </tr>
                    <tr>
                      <td title="Player Name">
                        <div>Name:</div>
                        <div>{cbOneName}</div>
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
                  <div>{cbOneSpe}</div>
                </td>
                <td title="Strength">
                  <div>Str:</div>
                  <div>{cbOneStr}</div>
                </td>
                <td title="Catch">
                  <div>Cth:</div>
                  <div>{cbOneCth}</div>
                </td>
              </tr>
              <tr>
                <td title="Pass Coverage">
                  <div>PC:</div>
                  <div>{cbOnePC}</div>
                </td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
        {/* DEFENSIVE LINE */}
        <div className="defensiveLinemenLineup">
          {/* LEFT DEFENSIVE END */}
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
                        <div>DE</div>
                      </td>
                    </tr>
                    <tr>
                      <td title="Player Name">
                        <div>Name:</div>
                        <div>{deOneName}</div>
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
                  <div>{deOneSpe}</div>
                </td>
                <td title="Strength">
                  <div>Str:</div>
                  <div>{deOneStr}</div>
                </td>
                <td title="Pass Rush">
                  <div>PR:</div>
                  <div>{deOnePR}</div>
                </td>
              </tr>
              <tr>
                <td title="Run Defense">
                  <div>RD:</div>
                  <div>{deOneRD}</div>
                </td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
          {/* DEFENSIVE TACKLE ONE */}
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
                        <div>DT</div>
                      </td>
                    </tr>
                    <tr>
                      <td title="Player Name">
                        <div>Name:</div>
                        <div>{dtOneName}</div>
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
                  <div>{dtOneSpe}</div>
                </td>
                <td title="Strength">
                  <div>Str:</div>
                  <div>{dtOneStr}</div>
                </td>
                <td title="Pass Rush">
                  <div>PR:</div>
                  <div>{dtOnePR}</div>
                </td>
              </tr>
              <tr>
                <td title="Run Defense">
                  <div>RD:</div>
                  <div>{dtOneRD}</div>
                </td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
          {/* DEFENSIVE TACKLE TWO */}
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
                        <div>DT</div>
                      </td>
                    </tr>
                    <tr>
                      <td title="Player Name">
                        <div>Name:</div>
                        <div>{dtTwoName}</div>
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
                  <div>{dtTwoSpe}</div>
                </td>
                <td title="Strength">
                  <div>Str:</div>
                  <div>{dtTwoStr}</div>
                </td>
                <td title="Pass Rush">
                  <div>PR:</div>
                  <div>{dtTwoPR}</div>
                </td>
              </tr>
              <tr>
                <td title="Run Defense">
                  <div>RD:</div>
                  <div>{dtTwoRD}</div>
                </td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
          {/* RIGHT DEFENSIVE END */}
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
                        <div>DE</div>
                      </td>
                    </tr>
                    <tr>
                      <td title="Player Name">
                        <div>Name:</div>
                        <div>{deTwoName}</div>
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
                  <div>{deTwoSpe}</div>
                </td>
                <td title="Strength">
                  <div>Str:</div>
                  <div>{deTwoStr}</div>
                </td>
                <td title="Pass Rush">
                  <div>PR:</div>
                  <div>{deTwoPR}</div>
                </td>
              </tr>
              <tr>
                <td title="Run Defense">
                  <div>RD:</div>
                  <div>{deTwoRD}</div>
                </td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
        {/* END OFFENSIVE LINE */}
        {/* CORNERBACK RIGHT */}
        <div className="cornerbackRightLineup">
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
                        <div>CB</div>
                      </td>
                    </tr>
                    <tr>
                      <td title="Player Name">
                        <div>Name:</div>
                        <div>{cbTwoName}</div>
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
                  <div>{cbTwoSpe}</div>
                </td>
                <td title="Strength">
                  <div>Str:</div>
                  <div>{cbTwoStr}</div>
                </td>
                <td title="Catch">
                  <div>Cth:</div>
                  <div>{cbTwoCth}</div>
                </td>
              </tr>
              <tr>
                <td title="Pass Coverage">
                  <div>PC:</div>
                  <div>{cbTwoPC}</div>
                </td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
        {/* END CORNERBACK RIGHT */}
      </div>
      {/* LINEBACKERS */}
      <div className="linebackerGroupLineup">
        <div className="linebackerLineup">
          {/* LINEBACKER ONE */}
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
                        <div>LB</div>
                      </td>
                    </tr>
                    <tr>
                      <td title="Player Name">
                        <div>Name:</div>
                        <div>{lbOneName}</div>
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
                  <div>{lbOneSpe}</div>
                </td>
                <td title="Strength">
                  <div>Str:</div>
                  <div>{lbOneStr}</div>
                </td>
                <td title="Pass Rush">
                  <div>PR:</div>
                  <div>{lbOnePR}</div>
                </td>
              </tr>
              <tr>
                <td title="Run Defense">
                  <div>RD:</div>
                  <div>{lbOneRD}</div>
                </td>
                <td title="Catch">
                  <div>CTH:</div>
                  <div>{lbOneCth}</div>
                </td>
                <td title="Pass Coverage">
                  <div>PC:</div>
                  <div>{lbOnePC}</div>
                </td>
              </tr>
            </table>
          </div>
          {/* END LINEBACKER ONE */}
          {/* LINEBACKER TWO */}
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
                        <div>LB</div>
                      </td>
                    </tr>
                    <tr>
                      <td title="Player Name">
                        <div>Name:</div>
                        <div>{lbTwoName}</div>
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
                  <div>{lbTwoSpe}</div>
                </td>
                <td title="Strength">
                  <div>Str:</div>
                  <div>{lbTwoStr}</div>
                </td>
                <td title="Pass Rush">
                  <div>PR:</div>
                  <div>{lbTwoPR}</div>
                </td>
              </tr>
              <tr>
                <td title="Run Defense">
                  <div>RD:</div>
                  <div>{lbTwoRD}</div>
                </td>
                <td title="Catch">
                  <div>CTH:</div>
                  <div>{lbTwoCth}</div>
                </td>
                <td title="Pass Coverage">
                  <div>PC:</div>
                  <div>{lbTwoPC}</div>
                </td>
              </tr>
            </table>
          </div>
          {/* END LINEBACKER TWO */}
          {/* LINEBACKER THREE */}
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
                        <div>LB</div>
                      </td>
                    </tr>
                    <tr>
                      <td title="Player Name">
                        <div>Name:</div>
                        <div>{lbThreeName}</div>
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
                  <div>{lbThreeSpe}</div>
                </td>
                <td title="Strength">
                  <div>Str:</div>
                  <div>{lbThreeStr}</div>
                </td>
                <td title="Pass Rush">
                  <div>PR:</div>
                  <div>{lbThreePR}</div>
                </td>
              </tr>
              <tr>
                <td title="Run Defense">
                  <div>RD:</div>
                  <div>{lbThreeRD}</div>
                </td>
                <td title="Catch">
                  <div>CTH:</div>
                  <div>{lbThreeCth}</div>
                </td>
                <td title="Pass Coverage">
                  <div>PC:</div>
                  <div>{lbThreePC}</div>
                </td>
              </tr>
            </table>
          </div>
          {/* END LINEBACKER THREE */}
        </div>
      </div>
      {/* SAFTEY LINEUP */}
      <div className="flexboxcenter">
        {/* STRONG SAFTEY */}
        <div className="strongSafetyLineup">
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
                        <div>SS</div>
                      </td>
                    </tr>
                    <tr>
                      <td title="Player Name">
                        <div>Name:</div>
                        <div>{ssName}</div>
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
                  <div>{ssSpe}</div>
                </td>
                <td title="Strength">
                  <div>Str:</div>
                  <div>{ssStr}</div>
                </td>
                <td title="Catch">
                  <div>Cth:</div>
                  <div>{ssCth}</div>
                </td>
              </tr>
              <tr>
                <td title="Pass Coverage">
                  <div>PC:</div>
                  <div>{ssPC}</div>
                </td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
        {/* END STRONG SAFETY */}
        {/* FREE SAFTEY */}
        <div className="freeSafetyLineup">
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
                        <div>FS</div>
                      </td>
                    </tr>
                    <tr>
                      <td title="Player Name">
                        <div>Name:</div>
                        <div>{fsName}</div>
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
                  <div>{fsSpe}</div>
                </td>
                <td title="Strength">
                  <div>Str:</div>
                  <div>{fsStr}</div>
                </td>
                <td title="Catch">
                  <div>Cth:</div>
                  <div>{fsCth}</div>
                </td>
              </tr>
              <tr>
                <td title="Pass Coverage">
                  <div>PC:</div>
                  <div>{fsPC}</div>
                </td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
        {/* END FREE SAFETY */}
      </div>
    </div>
  );
};

export default Offense;
