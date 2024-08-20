import QuizEND from "../assets/quiz-complete.png";
import questions from "../questions";
import Answer from "./Answer";
export default function Summary({ userAnswers }) {
    const skipped = userAnswers.filter((answer) => answer === null);
    const correct = userAnswers.filter(
        (answer, index) => answer === questions[index].answers[0]
    );
    const skipShare = Math.round((skipped.length / userAnswers.length) * 100);
    const correctShare = Math.round(
        (correct.length / userAnswers.length) * 100
    );
    const wrongShare = 100 - skipShare - correctShare;
    return (
        <div id="summary">
            <img src={QuizEND} alt="Quiz End" />
            <h2>Quize Complete</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skipShare}%</span>
                    <span className="text">Skipped</span>
                </p>
                <p>
                    <span className="number">{correctShare}%</span>
                    <span className="text">Answered Correctly</span>
                </p>
                <p>
                    <span className="number">{wrongShare}%</span>
                    <span className="text">Answered Incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClassName = "user-answer";
                    if (answer === null) {
                        cssClassName += " skipped";
                    } else if (answer === questions[index].answers[0]) {
                        cssClassName += " correct";
                    } else {
                        cssClassName += " wrong";
                    }

                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className="question">{questions[index].text}</p>
                            <p className={cssClassName}>
                                {answer ?? "Skipped"}
                            </p>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
