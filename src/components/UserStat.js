import multiavatar from "@multiavatar/multiavatar";
import styled from "styled-components";
const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
  height: 70px;
  width: 500px;
  margin: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  & > img {
    width: 50px;
    height: 50px;
  }
`;
export const UserStat = ({ data }) => {
  return (
    <Status>
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(
          multiavatar(data.id)
        )}`}
        alt="avatar"
      />
      <div>
        <h3>{data.name}</h3>
        <h4>{data.id}</h4>
      </div>
      <div>
        <h3>Answered</h3>
        <h4>{data.answers}</h4>
      </div>
      <div>
        <h3>Asked</h3>
        <h4>{data.questions}</h4>
      </div>
    </Status>
  );
};
