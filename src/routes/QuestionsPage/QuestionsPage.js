import { useEffect, useState } from "react";
import QuestionCard from "../../components/QuestionCard";
import useReduxStore from "../../hooks/useReduxStore";
import { __getQuestions } from "../../mock-api/api";
import { QuestionsContainer } from "./styled";

const QuestionsPage = () => {
  const {
    store: {
      QA: { answers, questions },
      filter,
    },
  } = useReduxStore();
  const [data, setData] = useState(null);
  useEffect(() => {
    __getQuestions().then((res) => {
      (filter === "unanswered" &&
        setData(res.filter((question) => !answers[question.id]))) ||
        (filter === "Answered" &&
          setData(res.filter((question) => answers[question.id]))) ||
        (filter === "Asked" &&
          setData(res.filter((question) => questions.includes(question.id))));
    });
  }, [answers, filter, questions]);
  return (
    <QuestionsContainer>
      {(data &&
        data.length > 0 &&
        data.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))) || <h1>No Questions to Display</h1>}
    </QuestionsContainer>
  );
};

export default QuestionsPage;
