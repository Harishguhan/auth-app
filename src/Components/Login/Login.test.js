import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Login from "./Login";

describe("login form", () => {
  it("login form checking", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const email = screen.getByTestId("email");
    const password = screen.getByTestId("password");

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  it("Attibutes Check", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const email = screen.getByPlaceholderText("Enter your email");
    const password = screen.getByPlaceholderText("Enter your Password");

    expect(email).toHaveAttribute("type", "email");
    expect(password).toHaveAttribute("type", "password");
  });

  it("button count", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const btnlist = await screen.findAllByRole("button");

    expect(btnlist).toHaveLength(1);
  });
});
