import { Link } from "react-router-dom";
import styled from "styled-components";
import useReduxStore from "../hooks/useStore";
import Avatar from "./Avatar";

export const Button = styled.button`
  background-color: white;
  border: 2px solid ${(props) => (props.answered ? "red" : "black")};
  width: 100%;
  padding: 10px;
  &:hover {
    background-color: #f0f0f0;
  }
  &:disabled {
    border: none;
    background-color: #f0f0f0;
  }
`;

const Badge = styled.div`
  margin: 5px;
  font-size: 10px;
  background-color: ${(props) => props.color || "red"};
  color: white;
  padding: 5px;
  border-radius: 5px;
  margin-right: 5px;
`;

const QuestionLayout = styled.div`
  position: relative;
  display: flex;
  grid-gap: 20px;
  max-width: 1000px;
  width: 100%;
  margin: auto;
  background-color: #ffffff;
  padding: 20px;
`;

const Votes = styled.div`
  display: flex;
  flex-basis: 25px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Question = styled(Link)`
  text-decoration: none;
  color: #2433ff;
  font-size: 1.5em;
  font-weight: 500;
  text-transform: capitalize;
  &:hover {
    color: #091288;
  }
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1em;
  margin: 0;
  padding: 0;
`;
const BadgeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1em;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const QuestionCard = ({ question }) => {
  const { author, timestamp, id, optionOne, optionTwo } = question;
  const {
    store: { answers, questions },
  } = useReduxStore();
  return (
    <QuestionLayout>
      <Votes>{optionOne.votes.length + optionTwo.votes.length} Votes</Votes>
      <div>
        <Question to={`/questions/${id}`}>
          {optionOne.text} <strong>Or</strong> {optionTwo.text}
        </Question>
        <Author>
          <Avatar seed={author} height={"30px"} width={"30px"} />
          <small>
            @{author} asked at: {new Date(timestamp).toLocaleDateString()}
          </small>
        </Author>
      </div>
      <BadgeWrapper>
        {answers[id] && <Badge color="Blue">Answered</Badge>}
        {questions.some((x) => x === id) && <Badge color="green">Asked</Badge>}
      </BadgeWrapper>
    </QuestionLayout>
  );
};
