import React from "react";

export default function Options({ question, answer, dispatch }) {
  const isAnswer = answer != null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={option}
          disabled={isAnswer}
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            isAnswer
              ? question.correctOption === index
                ? "correct"
                : "wrong"
              : ""
          }`}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
