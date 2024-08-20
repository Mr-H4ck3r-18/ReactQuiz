import { useRef } from "react";

export default function Answer({
    answers,
    selectedAnswer,
    answerState,
    handleQues,
}) {
    console.log(answers);
    const shuffleAnswers = useRef();
    if (!shuffleAnswers.current) {
        shuffleAnswers.current = [...answers];
        shuffleAnswers.current.sort(() => Math.random() - 0.5);
    }
    return (
        <ul id="answers">
            {shuffleAnswers.current.map((answer) => {
                const isSelected = selectedAnswer === answer;
                let cssClassName = "";
                if (answerState === "answered" && isSelected) {
                    cssClassName = "selected";
                }
                if (
                    (answerState === "correct" || answerState === "wrong") &&
                    isSelected
                ) {
                    cssClassName = answerState;
                }
                return (
                    <li key={answer} className="answer">
                        <button
                            disabled={answerState != ""}
                            className={cssClassName}
                            onClick={() => {
                                handleQues(answer);
                            }}
                        >
                            {answer}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}
