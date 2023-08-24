import { FC } from "react";
import { QuizDataProps } from "./quizData";

const Quiz: FC<QuizDataProps> = ({ quiz, handleOptionClick }) => {
  return (
    <div>
      <p>{quiz.question}</p>
      <ul>
        {quiz.options.map((ele, index: number) => (
          <li key={index}>
            {" "}
            <button onClick={() => handleOptionClick(index)} type="button">
              {" "}
              {ele}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
