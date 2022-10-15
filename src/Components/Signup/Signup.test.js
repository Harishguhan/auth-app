import { render, screen } from "@testing-library/react";
import { BrowserRouter, Router } from "react-router-dom";
import SignUp from "./SignUp";

describe("register form", () => {
  it("testing input element", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );

    const username = screen.getByTestId("username");
    const email = screen.getByTestId("email");
    const password = screen.getByTestId("password");
    const confirm = screen.getByTestId("confirmpassword");

    expect(username).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(confirm).toBeInTheDocument();
  });

  it("button count", async () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );

    const btnlist = await screen.findAllByRole("button");

    expect(btnlist).toHaveLength(1);
  });

  it("Attibutes Check",() => {
    render(<BrowserRouter>
        <SignUp />
      </BrowserRouter>);

      const username = screen.getByPlaceholderText("Enter your name");
      const email = screen.getByPlaceholderText("Enter your email");
      const password = screen.getByPlaceholderText("Enter your password");
      const confirmpassword = screen.getByPlaceholderText("Enter your confirm password");


      expect(username).toHaveAttribute('type','text');
      expect(email).toHaveAttribute('type','email');
      expect(password).toHaveAttribute('type','password');
      expect(confirmpassword).toHaveAttribute('type','password');
  })
  
});
