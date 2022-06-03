import styled from "styled-components";

const AuthorStyle = styled.span`
  font-size: ${(props) => props.fontSize || "0.8rem"};
  color: ${(props) => props.color || "#818181"};
  font-family: "DM Mono";
  font-weight: 500;
`;
export { AuthorStyle };
