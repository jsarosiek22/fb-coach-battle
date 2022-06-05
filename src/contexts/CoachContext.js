import React, { createContext } from "react";

const CoachContext = createContext();

class CoachProvider extends React.Component {
  state = {
    selCoachNum: 0,
    selCoachName: "",
    selCoachTitle: "",
    selCoachPositions: [],
    selCoachStrDesc: "",
    selCoachStrBoasts: [],
  };

  constructor() {
    super();
    this.setSelectedCoach = this.setSelectedCoach.bind(this);
  }
  setSelectedCoach(
    coachNum,
    coachName,
    coachTitle,
    coachPositions,
    coachStrDesc,
    coachStrBoasts
  ) {
    this.setState({
      selCoachNum: coachNum,
      selCoachName: coachName,
      selCoachTitle: coachTitle,
      selCoachPositions: coachPositions,
      selCoachStrDesc: coachStrDesc,
      selCoachStrBoasts: coachStrBoasts,
    });
  }
  render() {
    return (
      <CoachContext.Provider
        value={{
          selCoachNum: this.state.selCoachNum,
          selCoachName: this.state.selCoachName,
          selCoachTitle: this.state.coachTitle,
          selCoachPositions: this.state.coachPositions,
          selCoachStrDesc: this.state.coachStrDesc,
          selCoachStrBoasts: this.state.coachStrBoasts,
          setSelectedCoach: this.setSelectedCoach,
        }}
      >
        {this.props.children}
      </CoachContext.Provider>
    );
  }
}

const CoachConsumer = CoachContext.Consumer;

export { CoachProvider, CoachConsumer };
