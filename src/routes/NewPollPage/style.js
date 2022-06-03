import styled from "styled-components";

const PageLayout = styled.div`
  width: 70%;
  height: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #042946;
  margin: 0 auto;
  padding: 10px 20px;
  font-weight: 500;
  h1,
  h2 {
    font-weight: 500;
    text-align: center;
  }
  h1 {
    text-transform: capitalize;
    padding-block: "5px";
    text-align: "center";
    font-size: "2.5rem";
    font-weight: 500;
  }
`;

export { PageLayout };
