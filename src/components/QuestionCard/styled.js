import { Link } from "react-router-dom";
import styled from "styled-components";

const flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const QuestionContainer = styled(flex)`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  background-color: #f7fff7;
`;
const Votes = styled(flex)`
  font-family: "DM Mono";
  text-align: center;
  color: #ffffff;
  width: 65px;
  padding: 10px;
  height: 100%;
  background-color: ${(props) => props.bgColor || "#386083"};
  span {
    font-size: 0.8rem;
  }
`;

const Question = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0e3a5e;
  padding: 1.3rem 1.5rem;
  align-items: start;
  flex-direction: column;
  flex-basis: 90%;

  p {
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: capitalize;
    /* margin-block: 0.1rem; */
  }
`;

export { QuestionContainer, Votes, Question };
