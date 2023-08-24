type CheckAnswerProps = (
  selectedOption: number,
  correctAnswer: number
) => boolean;

export const checkAnswer: CheckAnswerProps = (selectedOption, correctOption) =>
  selectedOption === correctOption;
