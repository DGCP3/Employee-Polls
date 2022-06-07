import React from "react";
import { useNavigate } from "react-router-dom";
import useReduxStore from "../../hooks/useReduxStore";
import { Filters, MenuContainer, MenuItem } from "./styled";

const Menu = () => {
  const { setFilter } = useReduxStore();
  const navigate = useNavigate();
  const handleFilter = (filterBy) => () => {
    setFilter(filterBy);
    navigate("/questions");
  };
  return (
    <MenuContainer>
      <MenuItem to={"/questions"} onClick={handleFilter("unanswered")}>
        Questions
      </MenuItem>
      <Filters onClick={handleFilter("Answered")}>Answered</Filters>
      <Filters onClick={handleFilter("Asked")}>Asked</Filters>
      <MenuItem to={"/leaderboard"}>Leaderboard</MenuItem>
      <MenuItem to={"/add"}>New Poll</MenuItem>
    </MenuContainer>
  );
};

export default Menu;
