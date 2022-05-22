import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { QuestionCard } from "../components/QuestionCard";

import { __getQuestions } from "../mock-api/api";

export default function QuestionList() {
  const [questions, setQuestions] = useState(null);
  useEffect(() => {
    __getQuestions().then((res) => {
      setQuestions(res);
    });
  }, []);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      }}
    >
      {questions &&
        questions?.map((q) => <QuestionCard key={nanoid()} question={q} />)}
    </div>
  );
}
