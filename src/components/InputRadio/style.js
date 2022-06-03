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
  padding-left: 30px;
  border-radius: 3px;
  margin-block: 10px;
  text-transform: capitalize;
  ${Radio}:checked + & {
    color: #0c0938;
    font-weight: bold;
    font-size: 1.7rem;
    border-left: ${(prop) => prop.optColor};
    border-left-width: 20px;
    border-left-style: solid;
    /* text-decoration: underline 4px solid #9c321f;
    text-underline-position: under; */
  }
  ${Radio}:checked + &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    width: 30px;
    background-color: ${(prop) => prop.optColor};
  }
`;

export { Radio, Label };
