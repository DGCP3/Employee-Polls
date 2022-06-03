import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 0;
  padding: 20px;
  font-weight: 500 !important;
  h1:first-of-type {
    font-size: 2rem;
    margin-bottom: 10px;
    font-weight: 500;
  }
  h1:nth-child(3) {
    text-align: center;
  }
`;

const VoteCounted = styled.p`
  font-family: "DM mono", monospace;
  font-size: 1.5rem;
`;

const Result = styled.p`
  font-family: "DM mono", monospace;
`;

export { Container, VoteCounted };
