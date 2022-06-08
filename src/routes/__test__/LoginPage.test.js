import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "../../redux/store";
import LoginPage from "../LoginPage";
import { ProtectedRoute } from "../ProtectedRoutes";

const TestLogin = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/questions" element={<h1>Questions</h1>} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};
afterEach(() => {
  cleanup();
  render(<TestLogin />);
});
describe("Login component", () => {
  it("should render and match screenshot", () => {
    const { container } = render(<TestLogin />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("should render the login form", () => {
    expect(screen.getByTestId("loginForm")).toBeInTheDocument();
  });

  it("should render the username an password input field", () => {
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
  });

  it("should render the login button", () => {
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("should render the register button", () => {
    expect(screen.getByText(/register\./i)).toBeInTheDocument();
  });

  it("input element should contain", () => {
    expect(screen.getByLabelText("Username")).toHaveValue("zoshikanlu");
    expect(screen.getByLabelText("Password")).toHaveValue("pass246");
  });
});
