import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { dbFirestore, auth } from "../../firebase-config";
import { collection, getDocs, addDoc, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import "./QASection.css";

function AskQuestion({ onSubmit }) {
    const [question, setQuestion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (question.trim()) {
            onSubmit(question);
            setQuestion("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="ask-question-form">
            <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask a question..."
                className="question-input"
            />
            <button type="submit" className="submit-btn">Submit</button>
        </form>
    );
}

function QuestionList({ questions }) {
    return (
        <div className="question-list">
            <h2>Questions</h2>
            {questions.length > 0 ? (
                questions.map((q) => (
                    <div key={q.id} className="question-item">
                        <Link to={`/qa/question/${q.id}`} className="question-link">
                            {q.text} (Asked by {q.userName})
                        </Link>
                    </div>
                ))
            ) : (
                <p>No questions yet. Be the first to ask!</p>
            )}
        </div>
    );
}

function AnswerForm({ onSubmit }) {
    const [answer, setAnswer] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (answer.trim()) {
            onSubmit(answer);
            setAnswer("");
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
            <button type="submit" className="submit-answer-btn">Submit</button>
        </form>
    );
}

function QuestionDetail({ questions, addAnswer }) {
    const { id } = useParams();
    const question = questions.find(q => q.id === id);

    if (!question) {
        return <p>Question not found.</p>;
    }

    return (
        <div className="question-detail">
            <h2>{question.text}</h2>
            <p><strong>Asked by:</strong> {question.userName}</p>
            <AnswerForm onSubmit={(answer) => addAnswer(id, answer)} />
            <div className="answers-section">
                <h3>Answers</h3>
                {question.answers?.length > 0 ? (
                    question.answers.map((answer, index) => (
                        <p key={index} className="answer">
                            <strong>{answer.userName}: </strong> {answer.text}
                        </p>
                    ))
                ) : (
                    <p>No answers yet. Be the first to answer!</p>
                )}
            </div>
        </div>
    );
}

const QASection = () => {
    const [questions, setQuestions] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const querySnapshot = await getDocs(collection(dbFirestore, "questions"));
                const fetchedQuestions = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                    answers: doc.data().answers || []
                }));
                setQuestions(fetchedQuestions);
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        };

        fetchQuestions();
    }, []);

    const handleNewQuestion = async (questionText) => {
        if (!user) {
            alert("You must be logged in to ask a question.");
            return;
        }

        const userName = user.displayName || user.email.split("@")[0];

        try {
            const docRef = await addDoc(collection(dbFirestore, "questions"), {
                text: questionText,
                userId: user.uid,
                userName: userName,
                answers: []
            });

            setQuestions(prevQuestions => [...prevQuestions, { id: docRef.id, text: questionText, answers: [], userId: user.uid, userName }]);
        } catch (error) {
            console.error("Error adding question:", error);
        }
    };

    const addAnswer = async (questionId, answerText) => {
        if (!user) {
            alert("You must be logged in to answer a question.");
            return;
        }

        const userName = user.displayName || user.email.split("@")[0];

        try {
            const questionRef = doc(dbFirestore, "questions", questionId);
            const newAnswer = {
                text: answerText,
                userId: user.uid,
                userName: userName
            };

            await updateDoc(questionRef, {
                answers: arrayUnion(newAnswer)
            });

            setQuestions(prevQuestions =>
                prevQuestions.map(q =>
                    q.id === questionId ? { ...q, answers: [...q.answers, newAnswer] } : q
                )
            );
        } catch (error) {
            console.error("Error adding answer:", error);
        }
    };

    return (
        <div className="qa-section">
            <h1>Q&A Section</h1>
            {user ? <p>Logged in as: <strong>{user.displayName || user.email.split("@")[0]}</strong></p> : <p>Please log in to participate.</p>}
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <AskQuestion onSubmit={handleNewQuestion} />
                            <QuestionList questions={questions} />
                        </>
                    }
                />
                <Route
                    path="/question/:id"
                    element={<QuestionDetail questions={questions} addAnswer={addAnswer} />}
                />
            </Routes>
        </div>
    );
};

export default QASection;