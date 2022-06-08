import { Link } from "react-router-dom";
import styled from "styled-components";

const flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const QuestionContainer = styled(flex)`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 150px;
  justify-content: flex-start;
  background-color: #ffffff;
`;
const Votes = styled(flex)`
  font-family: "DM Mono";
  text-align: center;
  color: #ffffff;
  width: 65px;
  padding-inline: 10px;
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
  height: fit-content;
  /* flex-basis: 90%; */
  p {
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: capitalize;
    /* margin-block: 0.1rem; */
  }
`;

const BadgeContainer = styled(flex)`
  border-radius: 10px;
  position: absolute;
  /* gap: 10px; */
  top: -20px;
  right: 0;
  padding: 0.5rem;
  border-radius: 5px;
  font-weight: bold;
  border: 1px solid #ffffff;
`;

const Badge = styled.span`
  font-weight: normal;
  color: #000;
  background-color: #f3f3f3;
  padding: 5px 10px;
  font-size: 9px !important;
`;

export { QuestionContainer, Votes, Question, Badge, BadgeContainer };
