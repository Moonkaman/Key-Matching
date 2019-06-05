import React, { useState } from "react";
import Input from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ChartModal from "../ChartModal";

const QuestionDisplay = props => {
  const [answer, setAnswer] = useState({
    room_num: "",
    building_num: ""
  });
  const {
    rooms,
    page,
    modalStatus,
    setModalStatus,
    handlePage,
    checkAnswer
  } = props;

  const handleChange = e => {
    setAnswer({
      ...answer,
      [e.target.name]: e.target.value
    });
  };

  const checkAndClear = e => {
    checkAnswer(e, answer, props.question);
    setAnswer({
      room_num: "",
      building_num: ""
    });
  };

  return (
    <div className="question-display">
      <h1>Question {props.cq + 1}</h1>
      <h3>
        Key Tag <span>{props.question.key}</span> is for Building #
      </h3>
      <Input
        placeholder="Building #"
        name="building_num"
        value={answer.building_num}
        onChange={handleChange}
      />
      <h3>And Opens Room #</h3>
      <Input
        placeholder="Room #"
        name="room_num"
        value={answer.room_num}
        onChange={handleChange}
      />
      <Button variant="primary" className="submit-btn" onClick={checkAndClear}>
        Submit
      </Button>
      <Button
        variant="outline-info"
        className="modal-btn"
        onClick={e => setModalStatus(true)}
      >
        Open chart
      </Button>
      <ChartModal
        rooms={rooms}
        page={page}
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
        handlePage={handlePage}
      />
    </div>
  );
};

export default QuestionDisplay;
