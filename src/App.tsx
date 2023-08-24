import "./styles.css";
import Header from "./ex01/Header";
import quizData from "./ex02/quizData";
import Quiz from "./ex02/Quiz";
import { useState } from "react";
import { checkAnswer } from "./utils/utils";
import Score from "./ex03/Score";
export default function App() {
  const [total, setTotal] = useState<number>(0);
  const [currentIndex, setIndex] = useState<number>(0);

  const handleOptionClick = (index: number) => {
    if (checkAnswer(index, quizData[currentIndex].correctOption)) {
      setTotal((total) => total + 1);
    }
    setIndex((index) => index + 1);
  };

  return (
    <div className="App">
      <Header title={"Hello Moto"} />
      <Header title={"Ex-2"} />
      {quizData.length !== currentIndex ? (
        <Quiz
          handleOptionClick={handleOptionClick}
          quiz={quizData[currentIndex]}
        />
      ) : (
        <>
          <Score currentScore={total} totalScore={quizData.length} />
          <button
            type="button"
            onClick={() => {
              setTotal(0);
              setIndex(0);
            }}
          >
            Play again
          </button>
        </>
      )}
    </div>
  );
}
