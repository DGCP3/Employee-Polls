import multiavatar from "@multiavatar/multiavatar";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import useStore from "../hooks/useStore";
const User = styled.div`
  padding: 10px;
  border: 2px solid black;
  margin: 5px;
  position: absolute;
  width: 250px;
  gap: 20px;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export default function Navbar() {
  const {
    store: {
      user: { name, id },
    },
    logout,
  } = useStore();

  const links = [
    { to: "/questions", label: "Home" },
    { to: "/leader", label: "Leaderboard" },
    { to: "/new", label: "New" },
  ];
  return (
    <>
      <header>
        <h1>Employee poll</h1>
        <nav>
          <ul>
            {links.map(({ label, to }, index) => (
              <li key={index}>
                <NavLink to={to}>{label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <User>
        <img
          style={{ width: "50px", height: "50px" }}
          src={`data:image/svg+xml;utf8,${encodeURIComponent(multiavatar(id))}`}
          alt="avatar"
        />
        <div>
          <h4>{name}</h4>
          <small>{id}</small>
        </div>
        <button onClick={logout}>Logout</button>
      </User>

      <Outlet />
    </>
  );
}
