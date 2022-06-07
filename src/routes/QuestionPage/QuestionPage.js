import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Author from "../../components/Author";
import Button from "../../components/Button";
import InputRadio from "../../components/InputRadio";
import Result from "../../components/Result";
import useReduxStore from "../../hooks/useReduxStore";
import { __getQuestion } from "../../mock-api/api";
import { Container, Flex, Heading, VoteCounted } from "./style";
export default function QuestionPage() {
  const { question_id } = useParams();
  const navigate = useNavigate();
  const {
    store: {
      QA: { answers },
    },
    answersQuestion,
  } = useReduxStore();

  const [question, setQuestion] = useState(null);
  const [choice, setChoice] = useState(answers?.[question_id]);

  const handleChange = (e) => {
    setChoice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    answersQuestion({ [question_id]: choice });
  };

  useEffect(() => {
    __getQuestion(question_id).then((book) => {
      if (Object.keys(book).length === 0) navigate("/questions");
      setQuestion(book);
    });
  }, [answers.question_id, navigate, question_id]);

  return (
    question && (
      <Container>
        <Flex>
          <Heading>Would you rather</Heading>
          <Author
            name={question.author}
            timestamp={question.timestamp}
            color="white"
            fontSize={"1.2rem"}
            seed={question.author}
          />
        </Flex>
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
            disabled={!choice || answers?.[question_id] === choice}
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
