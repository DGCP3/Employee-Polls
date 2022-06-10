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
    font-size: 1.8rem;
  }
  ${Radio}:checked + &::before {
    content: "✔️";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    z-index: 999;
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    height: 100%;
    width: 25px;
    border-left: 4px solid black;
    background-color: ${(props) => props.optColor};
    z-index: 999;
  }
`;

export { Radio, Label };
