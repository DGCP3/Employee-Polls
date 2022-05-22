import { Link } from "react-router-dom";
import styled from "styled-components";
import useStore from "../hooks/useStore";
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
const AnsweredBadge = styled.div`
  margin: 5px;
  position: absolute;
  font-size: 10px;
  top: 0;
  right: 0;
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
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  & > span {
    font-size: 10px;
  }
`;
const Question = styled(Link)`
  text-decoration: none;
  color: #2433ff;
  font-size: 1.5em;
  font-weight: 500;
  margin: 0;
  padding: 0;
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
export const QuestionCard = ({ question }) => {
  const { author, timestamp, id, optionOne, optionTwo } = question;
  console.log(id);
  const {
    store: { answers, questions },
  } = useStore();
  return (
    <QuestionLayout>
      <Votes>{optionOne.votes.length + optionTwo.votes.length} votes</Votes>
      <div>
        <Question to={`/questions/${id}`}>
          {optionOne.text} <strong>Or</strong> {optionTwo.text}
        </Question>
        <Author>
          <Avatar seed={author} height={"30px"} width={"30px"} />
          <small>
            @{author} asks:
            {new Date(timestamp).toLocaleDateString()}
          </small>
        </Author>
      </div>
      {answers[id] && (
        <AnsweredBadge color="green">
          {questions.some((x) => x === id) ? "Asked" : "Answered"}
        </AnsweredBadge>
      )}
    </QuestionLayout>
  );
};
