import React, { useState } from "react";
import { db, auth } from "../../firebase-config"; // Single import statement
import { collection, addDoc } from "firebase/firestore";

function AskQuestion() {
  const [question, setQuestion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    const user = auth.currentUser; // Get logged-in user
    if (!user) {
      alert("You must be logged in to ask a question.");
      return;
    }

    try {
      await addDoc(collection(db, "questions"), {
        text: question,
        userId: user.uid, // Store the question with user ID
        createdAt: new Date(),
        answers: [], // Initialize empty answers array
      });
      setQuestion("");
    } catch (error) {
      console.error("Error adding question:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question..."
        className="border p-2 w-full rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
        Submit
      </button>
    </form>
  );
}

export default AskQuestion;
