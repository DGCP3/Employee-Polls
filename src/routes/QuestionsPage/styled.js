import styled from "styled-components";

const PageLayout = styled.div`
  height: 100%;
  background-color: #042946;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  display: flex;
  position: relative;
`;
const PageContent = styled.div`
  display: grid;
  /* grid-template-columns: auto 3fr; */
  min-width: 1000px;
  max-width: 1400px;
  /* gap: 20px; */
  height: 100%;
  margin: 20px auto;
  /* background-color: #f7fff7; */
`;

const QuestionsContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  gap: 30px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;
export { PageLayout, QuestionsContainer, PageContent };
