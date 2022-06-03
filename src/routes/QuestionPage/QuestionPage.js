import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Author from "../../components/Author";
import Button from "../../components/Button";
import InputRadio from "../../components/InputRadio";
import Result from "../../components/Result";
import useReduxStore from "../../hooks/useStore";
import { __getQuestion } from "../../mock-api/api";
import { Container, VoteCounted } from "./style";

export default function QuestionPage({ questionId }) {
  const { id: bookId } = useParams();
  const {
    store: { answers },
    setAnswersThunk,
  } = useReduxStore();

  const [question, setQuestion] = useState(null);
  const [choice, setChoice] = useState(answers?.[bookId]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setChoice(e.target.value);
  };

  useEffect(() => {
    __getQuestion(bookId).then((book) => setQuestion(book));
  }, [answers?.[bookId], bookId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnswersThunk({ [bookId]: choice });
  };

  return (
    question && (
      <Container>
        <Author
          name={question.author}
          timestamp={question.timestamp}
          color="white"
          fontSize={"1.2rem"}
        />
        <h1>Would you rather</h1>
        <form onSubmit={handleSubmit}>
          <InputRadio
            label={question.optionOne.text}
            name="options"
            id="optionOne"
            value="optionOne"
            checked={choice === "optionOne"}
            onChange={handleChange}
            optColor="green"
          />
          <h1>Or</h1>
          <InputRadio
            label={question.optionTwo.text}
            name="options"
            id="optionTwo"
            value={"optionTwo"}
            checked={choice === "optionTwo"}
            onChange={handleChange}
            optColor="red"
          />
          <Button
            height={"60px"}
            fontSize="1.5rem"
            disabled={!choice || answers?.[bookId] === choice}
          >
            Vote
          </Button>
        </form>
        <VoteCounted>
          {question.optionOne.votes.length + question.optionTwo.votes.length}{" "}
          people voted so far
          <Result question={question} />
        </VoteCounted>
      </Container>
    )
  );
}
