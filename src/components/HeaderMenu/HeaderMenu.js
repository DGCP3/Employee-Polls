import multiavatar from "@multiavatar/multiavatar";
import useReduxStore from "../../hooks/useReduxStore";
import Button from "../Button";
import { Avatar } from "../User/style";
import { Container, UserInfo } from "./style";

export default function HeaderMenu() {
  const {
    store: {
      auth: { user },
    },
    logout,
  } = useReduxStore();
  return (
    <Container>
      <Avatar
        width={"50px"}
        src={`data:image/svg+xml;utf8,${encodeURIComponent(
          multiavatar(user.id)
        )}`}
      />
      <div>
        <UserInfo>{user.name}</UserInfo>
        <UserInfo style={{ fontWeight: "normal" }}>@{user.id}</UserInfo>
      </div>
      <Button
        margin={"0"}
        height={"100%"}
        padding={"10px 20px"}
        bg={"#0645793e"}
        onClick={logout}
      >
        Log out
      </Button>
    </Container>
  );
}
