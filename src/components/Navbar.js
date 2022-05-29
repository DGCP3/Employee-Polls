import multiavatar from "@multiavatar/multiavatar";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import useReduxStore from "../hooks/useStore";
import Avatar from "./Avatar";

const HeaderElement = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  min-height: 50px;
  background-color: #fff;
`;
const Logo = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  & > ul {
    display: flex;
    margin: 0 10px;
    list-style: none;
  }
`;
const Navlink = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 10px;
  &.active {
    border-bottom: 2px solid black;
    color: black;
    font-weight: bold;
  }
`;
const User = styled.div`
  display: flex;
  padding: 10px;
  gap: 10px;
  align-items: center;
  & > button {
    border: none;
    background-color: #f0f0f0;
    padding: 10px 15px;
    margin: 0;
    color: black;
  }
`;
export default function Navbar() {
  const {
    store: {
      user: { name, id },
    },
    logout,
  } = useReduxStore();

  const links = [
    { to: "/questions", label: "Home" },
    { to: "/leader", label: "Leaderboard" },
    { to: "/new", label: "New" },
  ];
  return (
    <>
      <HeaderElement>
        <Logo>Employee polls</Logo>
        <Nav>
          <ul>
            {links.map(({ label, to }, index) => (
              <li key={index}>
                <Navlink to={to}>{label}</Navlink>
              </li>
            ))}
          </ul>
        </Nav>
        <User>
          <Avatar seed={id} />
          <div>
            <h4>{name}</h4>
            <small>@{id}</small>
          </div>
          <button onClick={logout}>Logout</button>
        </User>
      </HeaderElement>
      <Outlet />
    </>
  );
}
