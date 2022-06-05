import React, { useEffect, useState, useContext } from "react";
import Header from "../header/Header";
import "./teamdashboard.css";
import { CoachConsumer } from "../../contexts/CoachContext";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Offense from "../offense/Offense";
import Defense from "../defense/Defense";
import Freeagents from "../freeagents/Freeagents";
import Draftplayers from "../draftplayers/Draftplayers";

const Teamdashboard = (props) => {
  const [value, setValue] = useState(0);
  const [fbDollars, setFBDollars] = useState(250);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div>
      <Header />
      <div className="flexboxcenter">
        <div className="teamdashoverview">
          <CoachConsumer>
            {({
              selCoachNum,
              selCoachName,
              selCoachTitle,
              selCoachPositions,
              selCoachStrDesc,
              selCoachStrBoasts,
            }) => (
              <div>
                <div>
                  {selCoachNum} {selCoachName} {selCoachTitle}
                </div>
                <div>{selCoachTitle}</div>
                <div>{selCoachPositions}</div>
                <div>{selCoachStrDesc}</div>
                <div>{selCoachStrBoasts}</div>
                <div>${fbDollars}</div>
                <div>Team Overall: 5</div>
                <div>Off Overall: 5</div>
                <div>Def Overall: 5</div>
                <div>Round: Preseason</div>
                <Button variant="contained">Advance</Button>
              </div>
            )}
          </CoachConsumer>
        </div>
        <div className="teamdashdetails">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Offense" {...a11yProps(0)} />
            <Tab label="Defense" {...a11yProps(1)} />
            <Tab label="Free Agents" {...a11yProps(2)} />
            <Tab label="Draft" {...a11yProps(3)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Offense />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Defense />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Freeagents />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Draftplayers />
          </TabPanel>
        </div>
      </div>
    </div>
  );
};

export default Teamdashboard;
