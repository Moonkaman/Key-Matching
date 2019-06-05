import React, {useState} from 'react'
import { useSnackbar } from 'notistack';

import MainMenuDisplay from './Displays/MainMenuDisplay';
import QuestionDisplay from './Displays/QuestionDisplay';
import EndDisplay from './Displays/EndDisplay';

const GameDisplay = props => {
  const {setToastStatus, toastStatus, rooms, page, modalStatus, setModalStatus, handlePage, currentQuestion, nextQuestion, score, setScore, totalQuestions} = props;
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const checkAnswer = (e, answer, question) => {
    e.preventDefault();
    console.log(question);
    console.log(answer)
    if(Number(answer.building_num) === question.building_num && Number(answer.room_num) === question.room_num) {
      setScore(score + 1);
      enqueueSnackbar('Correct', {variant: 'success'});
      nextQuestion();
    } else {
      enqueueSnackbar('Wrong', {variant: "error"})
      nextQuestion();
    }
  }
  
  const displays = {
    0: <MainMenuDisplay getQuestions={props.getQuestions} />,
    1: <QuestionDisplay checkAnswer={checkAnswer} cq={currentQuestion} question={props.questions[currentQuestion]} rooms={rooms} page={page} modalStatus={modalStatus} setModalStatus={setModalStatus} handlePage={handlePage} />,
    2: <EndDisplay score={score} totalQuestions={totalQuestions} />
  };

  const {currentDisplay} = props;

  return (
    <div className='game-display'>
      {displays[currentDisplay]}
    </div>
  )
}

export default GameDisplay
