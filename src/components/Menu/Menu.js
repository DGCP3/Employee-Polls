import React from "react";

import { Filters, MenuContainer, MenuItem } from "./styled";
const menuItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Questions",
    path: "/questions",
  },
  {
    label: "Leaderboard",
    path: "/leaderboard",
  },
  {
    label: "New Poll",
    path: "/new",
  },
];
const Menu = ({ items = menuItems }) => {
  return (
    <MenuContainer>
      <MenuItem to={"/questions"}>Questions</MenuItem>
      <Filters>Answered</Filters>
      <Filters>Asked</Filters>
      <MenuItem to={"/leaderboard"}>Leaderboard</MenuItem>
      <MenuItem to={"/new"}>New Poll</MenuItem>
    </MenuContainer>
  );
};

export default Menu;
