import logoPng from "../assets/quiz-logo.png";
export default function Header() {
    return (
        <header>
            <img src={logoPng} alt="quiz logo" />
            <h1>React Quiz</h1>
        </header>
    );
}
