import React from "react";
import { Logo, StyledHeader } from "./styled";
const defaultLogo = (
  <img
    src="https://cdn-icons.flaticon.com/png/512/2668/premium/2668751.png?token=exp=1654030864~hmac=7fa41121d92611d25efbe6bd7ab54ffd"
    alt="Keep Logo"
  />
);
export default function Header({
  logo = defaultLogo,
  title,
  labelSize = "1.2rem",
}) {
  return (
    <>
      <StyledHeader>
        <Logo labelSize={labelSize}>
          {logo}
          <label>{title}</label>
        </Logo>
      </StyledHeader>
    </>
  );
}
