import multiavatar from "@multiavatar/multiavatar";
import { Container, Avatar, UserDetails, Flex } from "./style";
// https://media0.giphy.com/media/LM7mVNy0iAZpTBAkIH/giphy.gif
export default function User({ user }) {
  return (
    <Container>
      <Avatar
        src={`data:image/svg+xml;utf8,${encodeURIComponent(
          multiavatar(user?.id)
        )}`}
      />
      <h1>{user?.name}</h1>
      <span>@{user?.id}</span>
      <UserDetails>
        <Flex>
          <span>Answered :</span>
          <span>{user?.answers}</span>
        </Flex>
        <Flex>
          <span>Asked :</span>
          <span>{user.questions}</span>
        </Flex>
      </UserDetails>
    </Container>
  );
}
