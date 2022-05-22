import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Button } from "../components/QuestionCard";
import useStore from "../hooks/useStore";
import { Form, Input } from "./NewPoll";

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
    <div style={{ width: 500, padding: 20 }}>
      <h1>Login</h1>
      <Form onSubmit={login}>
        <label htmlFor="email">Email</label>
        <Input
          onChange={onchange}
          name="username"
          value={form.username}
          type="text"
          id="email"
          required
        />
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          name="password"
          onChange={onchange}
          id="password"
          value={form.password}
          required
        />
        <Button disabled={loading}>{loading ? "Processing" : "Login"}</Button>
      </Form>
    </div>
  );
}
