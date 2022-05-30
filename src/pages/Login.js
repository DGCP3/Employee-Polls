import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Button } from "../components/QuestionCard";
import useReduxStore from "../hooks/useStore";
import { Input } from "./NewPoll";
import styled from "styled-components";
import useForm from "../hooks/useForm";
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
  const [form, onchange] = useForm({
    username: "zoshikanlu",
    password: "pass246",
  });
  const {
    store: { isAuth, loading },
    loginThunk,
  } = useReduxStore();

  let location = useLocation();
  let from = location.state?.from?.pathname || "/questions";

  function login(e) {
    e.preventDefault();
    loginThunk(form.username, form.password);
  }

  if (isAuth) return <Navigate to={from} replace />;

  return (
    <Layout data-testid="loginPage">
      <LoginForm onSubmit={login} data-testid="loginForm">
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
        <Button data-testid="loginButton" disabled={loading}>
          {loading ? "Processing" : "Login"}
        </Button>
      </LoginForm>
    </Layout>
  );
}
