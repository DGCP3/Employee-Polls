import styled from "styled-components";

export const PageLayout = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #042946;
`;

export const Container = styled.div`
  flex-basis: 500px;
  margin: 0 auto;
  padding-inline: 20px;
  & h1 {
    font-size: 2.3rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  & small {
    display: block;
    font-size: 1.3rem;
    font-weight: 500;
  }
  & span {
    color: #ffffff;
    text-decoration: underline;
    text-underline-position: under;
  }
`;
