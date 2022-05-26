import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App.tsx", () => {
  test("Renders heading", () => {
    render(<App />);
    const linkElement = screen.getByText(/enter the data:/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("Renders login", () => {
    render(<App />);

    const input = screen.getByTestId("inputElem");
    const btn = screen.getByTestId("btnElem");
    const testValue = "test-login";

    userEvent.type(input, testValue);
    userEvent.click(btn);

    expect(screen.queryByTestId("loginField")).toContainHTML(testValue);
  });

  test("Snapshot", () => {
    render(<App />);

    const appComp = screen.getByTestId("appComp");

    expect(appComp).toMatchSnapshot();
  });
});
