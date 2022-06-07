import React from "react";
import Author from "../Author";
import useReduxStore from "../../hooks/useReduxStore";
import {
  Badge,
  BadgeContainer,
  Question,
  QuestionContainer,
  Votes,
} from "./styled";

function QuestionCard({ question }) {
  const { author, timestamp, id, optionOne, optionTwo } = question;
  const {
    store: {
      QA: { answers, questions },
    },
  } = useReduxStore();
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
      <BadgeContainer>
        {questions.includes(question.id) && <Badge>Asked</Badge>}
        {answers[question.id] && <Badge>Answered</Badge>}
      </BadgeContainer>
    </QuestionContainer>
  );
}

export default QuestionCard;
