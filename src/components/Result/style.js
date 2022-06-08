import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 0;
  padding-block: 10px;
  font-weight: 500 !important;
  font-size: 1.2rem;
`;
const Progressbar = styled.div`
  height: 20px;
  background-color: ${(prop) => prop.color};
  width: ${(prop) => prop.width}%;
  transition: all 0.2s ease-in-out;
`;
export { Progressbar, Container };
