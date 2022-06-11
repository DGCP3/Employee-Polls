import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filterActions } from "../../redux/actions";
import { Filters, MenuContainer, MenuItem } from "./styled";

const Menu = ({ setFilter }) => {
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

const mapDispatchToProps = {
  setFilter: filterActions.setFilter,
};
export default connect(null, mapDispatchToProps)(Menu);
