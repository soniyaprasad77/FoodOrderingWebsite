import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../utils/appStore"; // Assuming store is exported as default from appStore.js

describe("Header Unit Testing", () => {
  it("should render header comp and check if there is a button or not", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    //querying
    //   const loginButton = screen.getByRole("button");
    const loginButton = screen.getByText("Login");
    //assertion
    expect(loginButton).toBeInTheDocument();
  });

  it("should render header comp and check if there is a About or not", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    //querying

    const About = screen.getByText("About");
    //assertion
    expect(About).toBeInTheDocument();
  });
  it("should render header comp and check if there is a cart or not", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    //querying

    const cart = screen.getByText(/Cart/);
    //assertion
    expect(cart).toBeInTheDocument();
  });
  it("should check onclick of Login whether there is Logout button or not", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    //querying
    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    //assertion
    expect(logoutButton).toBeInTheDocument();
  });
});
