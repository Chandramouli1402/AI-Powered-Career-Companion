import React, { useState, useEffect } from "react";
import { db, auth } from "../../firebase-config"; 

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

function QuestionDetail() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState("");

  useEffect(() => { 
    const fetchQuestion = async () => {
      const docRef = doc(db, "questions", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setQuestion({ id: docSnap.id, ...docSnap.data() });
      }
    };
    fetchQuestion();
  }, [id]);

  const handleAnswerSubmit = async () => {
    if (!answer.trim()) return;

    const user = auth.currentUser;
    if (!user) {
      alert("You must be logged in to answer.");
      return;
    }

    try {
      const docRef = doc(db, "questions", id);
      await updateDoc(docRef, {
        answers: [...question.answers, { text: answer, userId: user.uid }],
      });
      setAnswer(""); 
    } catch (error) {
      console.error("Error submitting answer:", error);
    }
  };

  if (!question) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{question.text}</h2>
      <p className="text-gray-600">Asked by User ID: {question.userId}</p>

      <div className="mt-4">
        <h3 className="font-bold">Answers:</h3>
        {question.answers.length > 0 ? (
          question.answers.map((ans, index) => (
            <p key={index} className="p-2 border-b">{ans.text} (User: {ans.userId})</p>
          ))
        ) : (
          <p>No answers yet.</p>
        )}
      </div>

      <div className="mt-4">
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Write your answer..."
          className="border p-2 w-full rounded"
        />
        <button onClick={handleAnswerSubmit} className="bg-green-500 text-white px-4 py-2 mt-2 rounded">
          Submit Answer
        </button>
      </div>
    </div>
  );
}

export default QuestionDetail;
