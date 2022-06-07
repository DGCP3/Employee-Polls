import styled from "styled-components";

const Container = styled.div`
  /* width: 200px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  color: #000;
`;
const UserInfo = styled.span`
  font-weight: bold;
  width: max-content;
  height: 100%;
  display: block;
  margin: 0;
  color: #424242;
  word-break: keep-all;
  font-size: 1.1rem;
  color: #000000;
`;
export { Container, UserInfo };
