import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("test group for snap shot testing", () => {
  //   test("snapshot test 1", () => {
  //     expect(render(<App />)).toMatchSnapshot();
  //   });

  test("getByText testing", () => {
    render(<App />);
    const textToTest = screen.getByText("Hello world..!");
    expect(textToTest).toHaveTextContent("Hello world..!");
  });

  test("button click test", async () => {
    render(<App />);
    const btn = screen.getByRole("button");

    fireEvent.click(btn);

    const elem = screen.getByTestId("content");
    expect(elem.textContent).toMatch("clicked");
  });
});
