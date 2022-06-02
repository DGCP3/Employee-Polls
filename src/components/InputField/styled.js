import styled from "styled-components";
const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  margin-block: ${(props) => props.marginBlock || "10px"};
  margin-inline: ${(props) => props.marginInline || "0"};
  height: ${(props) => props.height || "50px"};
  border: none;
  font-size: 1.4rem;
  font-weight: 500;
`;

const Label = styled.label`
  display: block;
  margin-block: ${(prop) => prop.mb || "2rem"};
  font-size: 1.3rem;
  font-weight: 500;
`;

export { Input, Label };
