import styled from "styled-components";

const Container = styled.div`
  font-family: "DM mono", monospace;
  min-width: 250px;
  margin: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  background-color: #073154;
  h1 {
    color: #fff;
    font-size: 1.5rem;
    margin: 5px 0;
  }
`;
const Avatar = styled.img`
  width: ${(prop) => prop.width || "120px"};
  border-radius: 50%;
`;
const UserDetails = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  width: 100%;
  margin: 0 0;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  padding: 0 0;
`;
export { Container, Avatar, UserDetails, Flex };
