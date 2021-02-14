import { fireEvent, render, wait, waitFor } from "@testing-library/react";
import Input from "../../components/Input";

jest.mock("@unform/core", () => {
  return {
    useField() {
      return {
        fieldName: "email",
        defaultValue: "",
        error: "",
        registerField: jest.fn(),
      };
    },
  };
});

describe("Input component", () => {
  it("should be able to render an input", async () => {
    const { getByPlaceholderText } = render(
      <Input name="email" placeholder="E-mail" />
    );

    expect(getByPlaceholderText("E-mail")).toBeTruthy();
  });

  it("should render highlight on input focus", async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />
    );

    const inputField = getByPlaceholderText("E-mail");
    const containerElement = getByTestId("input-container");

    fireEvent.focus(inputField);

    await waitFor(() => {
      expect(containerElement).toHaveStyle("border-color: #9d25b0;");
    });
  });

  it("should keep highlight when input is filled", async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />
    );

    const inputField = getByPlaceholderText("E-mail");
    const containerElement = getByTestId("input-container");

    fireEvent.change(inputField, { target: { value: "johndoe@example.com" } });

    fireEvent.blur(inputField);

    await waitFor(() => {
      expect(containerElement).toHaveStyle("border-color: #9d25b0;");
    });
  });
});
