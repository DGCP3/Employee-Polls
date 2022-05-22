import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { QuestionCard } from "../components/QuestionCard";
import { __getQuestions } from "../mock-api/api";
import styled from "styled-components";

const ListLayout = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  margin: auto;
  background-color: #f0f0f0;
  padding: 20px;
`;
export default function QuestionList() {
  const [questions, setQuestions] = useState(null);
  useEffect(() => {
    __getQuestions().then((res) => {
      setQuestions(res);
    });
  }, []);
  return (
    <ListLayout>
      {questions &&
        questions?.map((q) => <QuestionCard key={nanoid()} question={q} />)}
    </ListLayout>
  );
}
