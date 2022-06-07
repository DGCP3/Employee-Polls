import styled from "styled-components";

const StyledButton = styled.button`
  display: block;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => (props.height ? props.height : "40px")};
  margin: ${(props) => props.margin || "50px 0 30px 0"};
  padding: ${(props) => props.padding || "10px"};
  border-radius: 3px;
  background-color: ${(props) => props.background || "antiquewhite"};
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "1rem"};
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:hover {
    background-color: ${(props) => props.hoverBg || "white"};
    color: ${(props) => props.hoverColor || "black"};
  }
`;
export { StyledButton };
