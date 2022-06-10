import styled from "styled-components";

export const PageLayout = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #042946;
`;

export const Container = styled.div`
  flex-basis: 500px;
  margin: 0 auto;
  padding-inline: 20px;
  & h1 {
    font-size: 2.3rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  & small {
    display: block;
    font-size: 1.3rem;
    font-weight: 500;
  }
  & span {
    color: #ffffff;
    text-decoration: underline;
    text-underline-position: under;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  font-size: 1.4rem;
  font-weight: 500;
  color: #042946;
  &:focus {
    outline: none;
  }
  & option {
    background-color: #ffffff;
    color: #042946;
    padding-block: 10px;
  }
`;
const SelectLabel = styled.label`
  display: block;
  font-size: 1.3rem;
  font-weight: 500;
  color: #ffffff;
  margin-block: 10px;
`;

export { StyledSelect, SelectLabel };
