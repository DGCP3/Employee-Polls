import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import multiavatar from "@multiavatar/multiavatar/esm";
import styled from "styled-components";
import { Button } from "./QuestionCard";
import useStore from "../hooks/useStore";
import Result from "./Result";
import { __getQuestion } from "../mock-api/api";

export const Img = styled.div`
  display: flex;
  height: 100px;
  width: 400px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  & > img {
    width: 20%;
  }
`;

const Question = () => {
  const { id: bookId } = useParams();
  const {
    store: { answers },
    setAnswersThunk,
  } = useStore();

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
    <div>
      {question && (
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Img>
            <img
              src={`data:image/svg+xml;utf8,${encodeURIComponent(
                multiavatar(question.author)
              )}`}
              alt="avatar"
            />
            <h1>{question.author} asks:</h1>
          </Img>

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
    </div>
  );
};

export default Question;
