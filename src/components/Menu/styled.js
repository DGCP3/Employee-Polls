import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuContainer = styled.div`
  position: sticky;
  top: 20px;
  font-weight: bold;
  padding: 10px 20px;
  margin: 0px auto;
  color: #0e3a5ec8;
  background-color: #f7fff7;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  height: 300px;
  width: 250px;
  border-radius: 3px;
  text-align: left;
  transition: 1s ease-in-out all;
  h1 {
    margin: 10px 0;
  }
`;

const MenuItem = styled(NavLink)`
  display: flex;
  text-decoration: none;
  font-size: 1.5rem;
  margin: 10px;
  gap: 20px;
  color: #042946;
  transition: text-decoration ease-in-out 500ms;
  &:hover {
    color: #0e3a5e;
  }

  &.active {
    color: #042946;
    text-decoration: underline #0b5d94;
    text-underline-position: under;
  }
`;
const Filters = styled.button`
  display: flex;
  font-weight: 500;
  text-align: right;
  padding: 5px 5px 5px 30px;
  background-color: transparent;
  width: 100%;
  border: none;
  &:hover {
    background-color: #98cfee;
  }
`;
export { MenuContainer, MenuItem, Filters };
