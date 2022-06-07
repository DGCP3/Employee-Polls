import styled from "styled-components";

const Container = styled.div`
  z-index: 999;
  --bg-color: ${(props) =>
    props.type === "error"
      ? "red"
      : props.type === "warn"
      ? "#654314"
      : "green"};
  display: ${(props) => (props.show === true ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: fixed;
  transform: translateX(-50%);
  left: 50%;
  background-color: var(--bg-color);
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 5px;
  max-width: 500px;
`;
const Message = styled.div`
  color: white;
  flex-shrink: 10;
  h1 {
    padding: 0;
    margin: 0;
    font-size: 1rem !important;
    font-weight: bold;
    text-transform: capitalize;
  }
  p {
    font-size: 0.8rem;
  }
  button {
    background-color: var(--color);
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 0.8rem;
    font-weight: bold;
    cursor: pointer;
  }
`;

const Icon = styled.div`
  width: 25px;
  border-radius: 50%;
  height: 100%;
  flex-shrink: 1;
`;

export { Container, Icon, Message };
