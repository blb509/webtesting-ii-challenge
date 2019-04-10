import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import App from "../App.js";

describe("component", () => {
  it("strike button makes strikes go up by one", () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText(/Strike/i));
    getByText(/strikes1/i);
  });

  it("strike button makes strikes go up by one to 2", () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText(/Strike/i));
    getByText(/strikes2/i);
  });

  it("strike button makes strikes go up by one and reset to 0", () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText(/Strike/i));
    getByText(/strikes0/i);
  });

  it("ball button makes balls go up by one", () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText(/Ball/i));
    getByText(/balls1/i);
  });

  it("ball button makes balls go up by one to 2", () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText(/Ball/i));
    getByText(/balls2/i);
  });

  it("ball button makes balls go up by one to 3", () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText(/Ball/i));
    getByText(/balls3/i);
  });

  it("ball button makes balls go up by one to reset to 0", () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText(/Ball/i));
    getByText(/balls0/i);
  });

  it("foul button makes strikes go up by one", () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText(/Foul/i));
    getByText(/strikes1/i);
  });

  it("foul button makes strikes go up by one to 2", () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText(/Foul/i));
    getByText(/strikes2/i);
  });

  it("foul button makes strikes stay at 2", () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText(/Foul/i));
    getByText(/strikes2/i);
  });

  it("hit button resets stikes", () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText(/Hit/i));
    getByText(/strikes0/i);
  });
});
