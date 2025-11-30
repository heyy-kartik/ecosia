"use client";
import { useState } from "react";

export default function QuizGenerator() {
  const [topic, setTopic] = useState("Ocean acidification");
  const [quiz, setQuiz] = useState(null);

  async function generate() {
    const res = await fetch("/api/quiz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic, difficulty: "medium", numQuestions: 5 }),
    });
    const data = await res.json();
    setQuiz(data.quiz);
  }

  return (
    <div>
      <input value={topic} onChange={(e) => setTopic(e.target.value)} />
      <button onClick={generate}>Generate Quiz</button>
      <pre>{quiz ? JSON.stringify(quiz, null, 2) : "No quiz yet."}</pre>
    </div>
  );
}
