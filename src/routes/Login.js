export default function Login() {
  return (
    <div data-testId="loginForm">
      <div style={{ width: 500, padding: 20 }}>
        <h1>Login</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}
