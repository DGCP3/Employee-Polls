import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Author from "../../components/Author";
import Button from "../../components/Button";
import InputRadio from "../../components/InputRadio";
import Result from "../../components/Result";
import useReduxStore from "../../hooks/useReduxStore";
import { __getQuestion } from "../../mock-api/api";
import { Container, VoteCounted } from "./style";

export default function QuestionPage() {
  const { question_id } = useParams();
  const navigate = useNavigate();
  const {
    store: {
      QA: { answers },
    },
    answerQuestion,
  } = useReduxStore();
  const currentAnswer = answers[question_id];

  const [question, setQuestion] = useState(null);
  const [choice, setChoice] = useState(currentAnswer);

  const handleChange = (e) => {
    setChoice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    answerQuestion({ [question_id]: choice });
  };

  useEffect(() => {
    __getQuestion(question_id).then((question) => {
      if (!Object.keys(question).length) navigate("*");
      setQuestion(question);
    });
  }, [currentAnswer, navigate, question_id]);

  return (
    question && (
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>Would you rather</h1>
          <Author
            name={question.author}
            timestamp={question.timestamp}
            color="white"
            fontSize={"1.2rem"}
            seed={question.author}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <InputRadio
            label={question.optionOne.text}
            name="options"
            id="optionOne"
            value="optionOne"
            checked={choice === "optionOne"}
            onChange={handleChange}
            optColor="#DEFF16"
          />
          <h1 style={{ textAlign: "center" }}>Or</h1>
          <InputRadio
            label={question.optionTwo.text}
            name="options"
            id="optionTwo"
            value={"optionTwo"}
            checked={choice === "optionTwo"}
            onChange={handleChange}
            optColor="#FC3D82"
          />
          <Button
            height={"60px"}
            fontSize="1.5rem"
            disabled={!choice || currentAnswer === choice}
          >
            Vote
          </Button>
        </form>
        <VoteCounted>
          Votes so far:{" "}
          {question.optionOne.votes.length + question.optionTwo.votes.length}
          <Result question={question} />
        </VoteCounted>
      </Container>
    )
  );
}
