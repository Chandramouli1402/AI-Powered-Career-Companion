import React, { useState } from "react";
function AnswerForm({ onSubmit }) {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim()) {
      onSubmit(answer); // Send answer to QuestionDetail.js
      setAnswer(""); // Clear input field
    }
  };

  return (
    <form onSubmit={handleSubmit} className="answer-form">
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Write your answer here..."
        className="answer-input"
      />
      <button type="submit" className="submit-answer-btn">
        Submit
      </button>
    </form>
  );
}

export default AnswerForm;
