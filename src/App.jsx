import { useState } from "react";
import Header from "./components/Header";
import Quiz from "./components/Quiz";

function App() {
    const [ans, setAns] = useState();
    const handleAns = () => {};
    return (
        <>
            <Header />
            <Quiz storeAns={handleAns} />
        </>
    );
}

export default App;
