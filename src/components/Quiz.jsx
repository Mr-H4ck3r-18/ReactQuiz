import { useState, useCallback } from "react";
import questions from "../questions";

import Question from "./Question";
import Summary from "./Summary";

export default function Quiz({ storeAns }) {
    const [ans, setAns] = useState([]);
    const active = ans.length;

    const handleQues = useCallback(function handleQues(answer) {
        setAns((prev) => {
            return [...prev, answer];
        });
    }, []);

    const handleSkip = useCallback(() => handleQues(null), [handleQues]);

    const quizEnd = active === questions.length;

    if (quizEnd) {
        return <Summary userAnswers={ans} />;
    }

    return (
        <div id="quiz">
            <Question
                key={active}
                index={active}
                handleQues={handleQues}
                handleSkip={handleSkip}
            />
        </div>
    );
}
