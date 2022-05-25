import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Button } from "../components/QuestionCard";
import useStore from "../hooks/useStore";
import { Input } from "./NewPoll";
import styled from "styled-components";
const Layout = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #f0f0f0;
`;
const LoginForm = styled.form`
  background-color: #fff;
  padding: 30px 25px;
`;
export default function Login() {
  const [form, setForm] = useState({
    username: "zoshikanlu",
    password: "pass246",
  });

  const {
    store: { isAuth, loading },
    loginThunk,
  } = useStore();

  let location = useLocation();
  let from = location.state?.from?.pathname || "/questions";

  function login(e) {
    e.preventDefault();
    loginThunk(form.username, form.password);
  }

  function onchange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  if (isAuth) return <Navigate to={from} replace />;
  return (
    <Layout>
      <LoginForm onSubmit={login}>
        <label htmlFor="username">Username:</label>
        <Input
          data-testid="username"
          onChange={onchange}
          name="username"
          value={form.username}
          type="text"
          id="email"
          required
        />
        <label htmlFor="password">Password:</label>
        <Input
          data-testid="password"
          type="password"
          name="password"
          onChange={onchange}
          id="password"
          value={form.password}
          required
        />
        <Button disabled={loading}>{loading ? "Processing" : "Login"}</Button>
      </LoginForm>
    </Layout>
  );
}
