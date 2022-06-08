<<<<<<< HEAD
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
=======
import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
} from "@testing-library/react";
>>>>>>> d92be24c7fa93c9d9d01e5eb0ab33fb8ad3f34ee
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "../../redux/store";
import NewPollPage from "../NewPollPage";

const TestNewPoll = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<NewPollPage />} />
          <Route path="/questions" element={<h1>Questions Page</h1>} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};
afterEach(() => {
  cleanup();
  render(<TestNewPoll />);
});

describe("Login component", () => {
  it("should render and match screenshot", () => {
    const { container } = render(<TestNewPoll />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it("should render poll form", () => {
    expect(screen.getByTestId("pollForm")).toBeInTheDocument();
  });
  it("should render the option one and two input field", () => {
    expect(screen.getByLabelText("Option one")).toBeInTheDocument();
    expect(screen.getByLabelText("Option two")).toBeInTheDocument();
  });
  it("should able to submit form", async () => {
    const optionOneInput = screen.getByRole("textbox", { name: /option one/i });
    const optionTwoInput = screen.getByRole("textbox", { name: /option two/i });
    const submitButton = screen.getByRole("button", { name: /submit/i });

    fireEvent.change(optionOneInput, { target: { value: "option one" } });
    fireEvent.change(optionTwoInput, { target: { value: "option two" } });

    expect(optionOneInput.value).toBe("option one");
    expect(optionTwoInput.value).toBe("option two");

    fireEvent.click(submitButton);
    expect(screen.getByRole("heading")).toBeInTheDocument();
    await screen.findByText(/Questions Page/i);
  });
});
