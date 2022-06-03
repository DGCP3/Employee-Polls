import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #f7fff7;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  label {
    margin-left: 10px;
    font-size: ${(props) => props.labelSize};
  }

  img {
    width: 30px;
  }

  &:hover {
    color: #000;
  }
`;

export { Navbar, StyledHeader, Logo };
