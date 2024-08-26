import { useState, useEffect, useCallback, useRef } from "react";

import QUESTIONS from "../questions.js";

import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestionIndex = userAnswer.length;

  const isQuizFinished = activeQuestionIndex === QUESTIONS.length;

  const handleSelectedAnswer = useCallback(function handleSelectedAnswer(
    userAnswer
  ) {
    setUserAnswer((prevUserAnswer) => [...prevUserAnswer, userAnswer]);
    // console.log(userAnswer);
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectedAnswer(null),
    [handleSelectedAnswer]
  );

  if (isQuizFinished) {
    return <Summary userAnswers={userAnswer} />;
  }

  return (
    <div id="quiz">
      <Question
        onSelectAnswer={handleSelectedAnswer}
        handleSkipAnswer={handleSkipAnswer}
        key={activeQuestionIndex}
        index={activeQuestionIndex}
      />
    </div>
  );
}

export default Quiz;
