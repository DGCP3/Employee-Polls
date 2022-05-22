import { Link } from "react-router-dom";
import styled from "styled-components";
import useStore from "../hooks/useStore";
const Card = styled.div`
  position: relative;
  max-width: 200px;
  margin: 10px;
  border: 1px solid ${(props) => (props.answered ? "red" : "black")};
  padding: 10px;
  border-radius: 5px;
  background-color: white;
`;
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

export const QuestionCard = ({ question }) => {
  const { author, timestamp, id } = question;
  const {
    store: { answers },
  } = useStore();
  return (
    <Card>
      <h3>{author}</h3>
      <small>{new Date(timestamp).toLocaleString()}</small>
      <Link to={`/questions/${id}`}>
        <Button>Show</Button>
      </Link>
      {answers[id] && <AnsweredBadge color="blue">Answered</AnsweredBadge>}
    </Card>
  );
};
