import React from "react";
import Author from "../Author";
// import useReduxStore from "../../hooks/useStore";
import { Question, QuestionContainer, Votes } from "./styled";

function QuestionCard({ question }) {
  const { author, timestamp, id, optionOne, optionTwo } = question;
  // const {
  //   store: { answers, questions },
  // } = useReduxStore();
  return (
    <QuestionContainer>
      <Votes bgColor="#064579">
        {optionOne.votes.length + optionTwo.votes.length} Votes
      </Votes>
      <Question to={`${id}`}>
        <p>
          {optionOne.text} or {optionTwo.text}?
        </p>
        <Author name={author} timestamp={timestamp} />
      </Question>
    </QuestionContainer>
  );
}

export default QuestionCard;
