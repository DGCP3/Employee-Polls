import { render, cleanup, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "../../redux/store";
import Login from "../Login";
const TestLogin = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

afterEach(cleanup);
describe("Login component", () => {
  it("should render", () => {
    const { container } = render(<TestLogin />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it("should render the login form", () => {
    render(<TestLogin />);
    expect(screen.getByTestId("loginForm")).toBeInTheDocument();
  });
  it("should render the username and password input", () => {
    render(<TestLogin />);
    expect(screen.getByTestId("username")).toBeInTheDocument();
    expect(screen.getByTestId("password")).toBeInTheDocument();
  });
  it("should render the login button", () => {
    render(<TestLogin />);
    expect(screen.getByTestId("loginButton")).toBeInTheDocument();
  });
  it("should have correct text in input", () => {
    render(<TestLogin />);
    expect(screen.getByTestId("loginForm")).toHaveFormValues({
      username: "zoshikanlu",
      password: "pass246",
    });
  });
});
