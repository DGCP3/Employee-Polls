import { Container, PageLayout, SelectLabel, StyledSelect } from "./styled";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import useReduxStore from "../../hooks/useReduxStore";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";

const users = {
  zoshikanlu: {
    Username: "zoshikanlu",
    Password: "pass246",
  },
  mtsamis: {
    Username: "mtsamis",
    Password: "xyz123",
  },
  tylermcginnis: {
    Username: "tylermcginnis",
    Password: "abc321",
  },
  sarahedo: {
    Username: "sarahedo",
    Password: "password123",
  },
};

const LoginPage = () => {
  const [user, setUser] = useState({
    Username: "zoshikanlu",
    Password: "pass246",
  });

  const onChange = (e) => {
    setUser(users[e.target.value]);
  };

  const {
    store: {
      auth: { isAuth, loading },
    },
    userLogin,
  } = useReduxStore();

  let location = useLocation();
  let from = location.state?.from?.pathname || "/questions";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("fired");
    userLogin(user.Username, user.Password);
  };

  if (isAuth) return <Navigate to={from} replace />;

  return (
    <PageLayout>
      <Container>
        <h1>Login to your Account</h1>
        <form onSubmit={handleSubmit} data-testid="loginForm">
          <SelectLabel htmlFor="usernames">Username</SelectLabel>
          <StyledSelect
            name="Username"
            id="usernames"
            value={user.Username}
            onChange={onChange}
          >
            {Object.keys(users).map((username) => (
              <option key={nanoid()} value={username}>
                {username}
              </option>
            ))}
          </StyledSelect>
          <InputField
            label="Password"
            type="password"
            value={user.Password}
            height="40px"
            onChange={() => {}}
          />
          <Button height={"50px"} loading={loading} fontSize={"1.5rem"}>
            Login
          </Button>
          <small>
            Dont have an account, <span>Register.</span>
          </small>
        </form>
      </Container>
    </PageLayout>
  );
};

export default LoginPage;
