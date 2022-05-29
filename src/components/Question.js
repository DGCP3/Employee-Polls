import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./QuestionCard";
import useReduxStore from "../hooks/useStore";
import Result from "./Result";
import { __getQuestion } from "../mock-api/api";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Question = () => {
  const { id: bookId } = useParams();
  const {
    store: { answers },
    setAnswersThunk,
  } = useReduxStore();

  const [question, setQuestion] = useState(null);
  const [choice, setChoice] = useState(answers?.[bookId]);

  const onchange = (e) => {
    setChoice(e.target.value);
  };

  useEffect(() => {
    __getQuestion(bookId).then((book) => setQuestion(book));
  }, [answers?.[bookId], bookId]);

  const answer = (e) => {
    e.preventDefault();
    setAnswersThunk({ [bookId]: choice });
  };

  return (
    <Container>
      {question && (
        <div>
          <h2>Would you rather</h2>
          <form onSubmit={answer}>
            <input
              style={{ display: "inline" }}
              type="radio"
              name="option"
              id="optionOne"
              value="optionOne"
              checked={choice === "optionOne"}
              onChange={onchange}
            />
            <label htmlFor="optionOne">{question.optionOne.text}</label> <br />
            <input
              style={{ display: "inline" }}
              type="radio"
              name="option"
              id="optionTwo"
              value={"optionTwo"}
              checked={choice === "optionTwo"}
              onChange={onchange}
            />
            <label htmlFor="optionTwo">{question.optionTwo.text}</label>
            <Button disabled={!choice || answers?.[bookId] === choice}>
              Submit
            </Button>
          </form>
        </div>
      )}
      {question && <Result question={question} />}
    </Container>
  );
};

export default Question;
