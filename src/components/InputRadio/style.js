import styled from "styled-components";

const Radio = styled.input`
  display: none;
`;
const Label = styled.label`
  text-align: center;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  width: 100%;
  color: #0c0938ca;
  background-color: #f7fff7;
  padding: 20px;
  border-radius: 3px;
  margin-block: 10px;
  text-transform: capitalize;
  ${Radio}:checked + & {
    font-weight: bold;
    font-size: 1.7rem;
    /* border-left-style: solid; */
  }
  ${Radio}:checked + &::before {
    content: "☑️";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    z-index: 999;
  }
`;

export { Radio, Label };
