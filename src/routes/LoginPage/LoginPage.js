import { Container, PageLayout } from "./styled";
import InputField from "../../components/InputField";
import useForm from "../../hooks/useForm";
import Button from "../../components/Button";
import useReduxStore from "../../hooks/useStore";
import { Navigate, useLocation } from "react-router-dom";

const LoginPage = () => {
  const [form, handleChange] = useForm({
    Username: "zoshikanlu",
    Password: "pass246",
  });

  const {
    store: { isAuth, loading },
    loginThunk,
  } = useReduxStore();

  let location = useLocation();
  let from = location.state?.from?.pathname || "/questions";

  const handleSubmit = (e) => {
    e.preventDefault();
    loginThunk(form.Username, form.Password);
  };

  if (isAuth) return <Navigate to={from} replace />;

  return (
    <PageLayout>
      <Container>
        <h1>Login to your Account</h1>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Username"
            value={form.Username}
            onchange={handleChange}
            height="40px"
          />
          <InputField
            label="Password"
            value={form.Password}
            onchange={handleChange}
            type="password"
            height="40px"
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
