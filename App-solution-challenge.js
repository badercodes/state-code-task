import React from "react";
import "./App.css";
import pushupImg from "./images/pushup.jpeg";
import situpImg from "./images/situp.jpeg";
import lungesImg from "./images/lunges.jpeg";

function App() {
  return (
    <div className="App">
      <MyWorkout name="Bader" />
    </div>
  );
}

class Excercise extends React.Component {
  state = { numOfSets: this.props.numOfSets };
  render() {
    return (
      <>
        <img
          src={this.props.picOfExcercise}
          alt="man-doing-pushups"
          height="550"
          width="800"
        ></img>
        <h3>
          {this.state.numOfSets} {this.props.typeOfExcercise} Sets Remaining
        </h3>
        <button
          onClick={() => {
            this.setState({
              numOfSets: this.state.numOfSets - 1,
            });
          }}
          style={{ marginBottom: "1em" }}
        >
          1 Set Completed
        </button>
        <br></br>
      </>
    );
  }
}

class MyWorkout extends React.Component {
  render() {
    return (
      <>
        <h1>Hello {this.props.name}</h1>
        <h2>Your Workout Tracker</h2>

        <Excercise
          numOfSets={6}
          picOfExcercise={pushupImg}
          typeOfExcercise="Pushups"
        />
        <Excercise
          numOfSets={4}
          picOfExcercise={situpImg}
          typeOfExcercise="Situps"
        />
        <Excercise
          numOfSets={5}
          picOfExcercise={lungesImg}
          typeOfExcercise="Lunges"
        />
      </>
    );
  }
}

export default App;
