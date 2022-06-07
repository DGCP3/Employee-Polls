import styled from "styled-components";

const AuthorStyle = styled.span`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.fontSize || "0.8rem"};
  color: ${(props) => props.color || "#818181"};
  font-family: "DM Mono";
  font-weight: 500;
`;
const Avatar = styled.img`
  width: ${(prop) => prop.width || "30px"};
  border-radius: 50%;
  display: inline;
  margin-right: 10px;
`;
export { AuthorStyle, Avatar };
