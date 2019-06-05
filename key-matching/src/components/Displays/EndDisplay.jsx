import React from "react";
import Button from "react-bootstrap/Button";

const EndDisplay = props => {
  const perc = (props.score / props.totalQuestions) * 100;

  const getGrade = _ => {
    if (perc < 60) {
      return "F";
    } else if (perc >= 60 && perc < 70) {
      return "D";
    } else if (perc >= 70 && perc < 80) {
      return "C";
    } else if (perc >= 80 && perc < 90) {
      return "B";
    } else if (perc >= 90 && perc < 100) {
      return "A";
    } else if (perc >= 100) {
      return "A+";
    }
  };
  return (
    <div className="end-screen">
      <h4 className="title">Results</h4>
      <h1>{getGrade()}</h1>
      <h2>
        Score {props.score}/{props.totalQuestions}
      </h2>
      <h3>{perc.toFixed(2)}%</h3>
      <Button
        variant="primary"
        className="modal-btn"
        onClick={_ => window.location.reload()}
      >
        Again
      </Button>
    </div>
  );
};

export default EndDisplay;
