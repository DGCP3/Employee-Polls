import React from "react";
import PropTypes from "prop-types";
import { Logo, StyledHeader } from "./styled";
import HeaderMenu from "../HeaderMenu";

export default function Header({ logo, title, labelSize = "1.2rem" }) {
  return (
    <StyledHeader>
      <Logo labelSize={labelSize}>
        {logo}
        <label>{title}</label>
      </Logo>
      <HeaderMenu />
    </StyledHeader>
  );
}
Header.prototype = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  labelSize: PropTypes.string,
};
