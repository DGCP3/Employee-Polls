import multiavatar from "@multiavatar/multiavatar";
import { connect } from "react-redux";
import { authActions } from "../../redux/actions";
import Button from "../Button";
import { Avatar } from "../User/style";
import { Container, UserInfo } from "./style";

function HeaderMenu({ user, logout }) {
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
const mapStateToProps = (state) => ({
  user: state.auth.user,
});
const mapDispatchToProps = {
  logout: authActions.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);
