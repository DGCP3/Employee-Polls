import { render, cleanup, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "../../redux/store";
import Login from "../Login";

afterEach(cleanup);
describe("Login component", () => {
  it("Login", () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
    // snapshot
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("loginForm")).toBeInTheDocument();
    expect(screen.getByTestId("username")).toBeInTheDocument();
    expect(screen.getByTestId("password")).toBeInTheDocument();
    expect(screen.getByTestId("loginForm")).toHaveFormValues({
      username: "zoshikanlu",
      password: "pass246",
    });
  });
});
