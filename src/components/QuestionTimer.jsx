import { useEffect, useState } from "react";

export default function QuestionTimer({ time, skip, mode }) {
    const [timeLeft, setTimeLeft] = useState(time);

    useEffect(() => {
        console.log("time Out");
        const timer = setTimeout(skip, time);
        return () => {
            clearTimeout(timer);
        };
    }, [skip, time]);

    useEffect(() => {
        console.log("Interval");
        const Intervel = setInterval(() => {
            setTimeLeft((prev) => prev - 100);
        }, 100);
        return () => {
            clearInterval(Intervel);
        };
    }, []);

    return (
        <progress
            id="question-time"
            max={time}
            value={timeLeft}
            className={mode}
        />
    );
}
