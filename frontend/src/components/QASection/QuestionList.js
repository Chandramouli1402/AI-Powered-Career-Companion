import React, { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "questions"), (snapshot) => {
      setQuestions(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {questions.map((q) => (
        <div key={q.id} className="p-2 border-b">
          <Link to={`/qa/question/${q.id}`} className="text-blue-600">
            {q.text}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default QuestionList;
