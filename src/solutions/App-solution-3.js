import React from "react";
import "./App.css";
import pushupImg from "./images/pushup.jpeg";
import situpImg from "./images/situp.jpeg";

function App() {
  return (
    <div className="App">
      <MyWorkout name="Bader" />
    </div>
  );
}

class MyWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pushups: 6, situps: 4 };
  }
  render() {
    return (
      <>
        <h1>Hello {this.props.name}</h1>
        <h2>Your Workout Tracker</h2>
        <img
          src={pushupImg}
          alt="man-doing-pushups"
          height="550"
          width="800"
        ></img>
        <h3>{this.state.pushups} Pushup Sets Remaining</h3>
        <button
          onClick={() => {
            this.setState({
              pushups: this.state.pushups - 1,
            });
          }}
          style={{ marginBottom: "1em" }}
        >
          1 Set Completed
        </button>
        <br></br>
        <img
          src={situpImg}
          alt="woman-doing-situp"
          height="550"
          width="800"
        ></img>
        <h3>{this.state.situps} Situp Sets Remaining</h3>
        <button
          onClick={() => {
            this.setState((prevState) => ({ situps: prevState.situps - 1 }));
          }}
          style={{ marginBottom: "3em" }}
        >
          1 Set Completed
        </button>
      </>
    );
  }
}

export default App;
