import React, { useState, useEffect } from "react";
import "./App.css";
import "./components/Displays/displays.css";
import Toast from "react-bootstrap/Toast";

import GameDisplay from "./components/GameDisplay";

import genBuildings from "./genKeys";
import genQuestions from "./genQuestions";

function App() {
  const [rooms, setRooms] = useState(genBuildings(5));
  const [questions, setQuestions] = useState([]);
  const [page, setPage] = useState(1);
  const [modalStatus, setModalStatus] = useState(false);
  const [currentDisplay, setCurrentDisplay] = useState(0);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [toastStatus, setToastStatus] = useState({
    show: false,
    message: ""
  });

  useEffect(
    _ => {
      console.log(questions);
    },
    [questions]
  );

  const getQuestions = (e, num) => {
    e.preventDefault();
    setQuestions(genQuestions(num, rooms));
    setCurrentDisplay(1);
  };

  const handlePage = (e, action) => {
    e.preventDefault();
    switch (action) {
      case "p":
        if (page > 1) {
          setPage(page - 1);
        }
        break;
      case "n":
        if (page < Math.floor(rooms.length / 10)) {
          setPage(page + 1);
        }
        break;
    }
  };

  const nextQuestion = _ => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentDisplay(2);
    }
  };

  useEffect(_ => {
    console.log(toastStatus);
  });

  useEffect(
    _ => {
      toastOpen();
    },
    [toastStatus.message]
  );

  const toastOpen = _ => {
    setToastStatus({
      ...toastStatus,
      show: true
    });
  };

  const toastClose = _ => {
    console.log("Close");
    setToastStatus({
      ...toastStatus,
      show: false
    });
  };

  return (
    <div className="App">
      {/* <Toast onClose={toastClose} show={toastStatus.show} delay={3000} autohide>
        {toastStatus.message}
      </Toast> */}
      <GameDisplay
        rooms={rooms}
        page={page}
        setPage={setPage}
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
        getQuestions={getQuestions}
        currentDisplay={currentDisplay}
        questions={questions}
        handlePage={handlePage}
        currentQuestion={currentQuestion}
        nextQuestion={nextQuestion}
        score={score}
        setScore={setScore}
        totalQuestions={questions.length}
        setToastStatus={setToastStatus}
        toastStatus={toastStatus}
      />
    </div>
  );
}

export default App;
