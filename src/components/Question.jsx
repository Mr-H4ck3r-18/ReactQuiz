import QuestionTimer from "./QuestionTimer";
import Answer from "./Answer";
import { useState } from "react";
import questions from "../questions";
export default function Question({ index, handleSkip, handleQues }) {
    const [answer, setAnswer] = useState({
        selectedAnswer: "",
        correct: null,
    });
    let timer = 10000;
    if (answer.selectedAnswer) {
        timer = 1000;
    }
    if (answer.correct !== null) {
        timer = 2000;
    }

    function handleSelectedAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            correct: null,
        });
        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                correct: questions[index].answers[0] === answer,
            });
            setTimeout(() => {
                handleQues(answer);
            }, 2000);
        }, 1000);
    }

    let answerState = "";
    if (answer.selectedAnswer && answer.correct !== null) {
        answerState = answer.correct ? "correct" : "wrong";
    } else if (answer.selectedAnswer && answer.correct === null) {
        answerState = "answered";
    }

    return (
        <div id="question">
            <QuestionTimer
                key={timer}
                time={timer}
                skip={answer.selectedAnswer === "" ? handleSkip : null}
                mode={answerState}
            />
            <h2>{questions[index].text}</h2>
            <Answer
                answers={questions[index].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                handleQues={handleSelectedAnswer}
            />
        </div>
    );
}
