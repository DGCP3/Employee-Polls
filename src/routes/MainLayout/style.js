import styled from "styled-components";

const PageLayout = styled.div`
  gap: 20px;
  position: relative;
  background-color: #042946;
  margin: 0 auto;
  padding: 10px 20px;
`;
const PageContent = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  min-width: 1000px;
  max-width: 1400px;
  gap: 20px;
  height: 100%;
  margin: 20px auto;
  /* background-color: #f7fff7; */
`;
export { PageLayout, PageContent };
