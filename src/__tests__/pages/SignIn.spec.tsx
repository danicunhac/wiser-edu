import SignIn from "../../pages/SignIn";
import { render, fireEvent } from "@testing-library/react";
import { addUser } from "../../context/modules/authentication/actions";

const mockedDispatch = jest.fn();

jest.mock("react-redux", () => {
  return {
    useDispatch: () => ({
      dispatch: mockedDispatch,
    }),
    useSelector: (state: { email: string; password: string }) => state,
  };
});

describe("SignIn Page", () => {
  it("should be able to sign in", () => {
    const { getByLabelText, getByText } = render(<SignIn />);

    const emailField = getByLabelText("E-mail");
    const passwordField = getByLabelText("Senha");
    const buttonElement = getByText("Entrar");

    fireEvent.change(emailField, { target: { value: "johndoe@example.com" } });
    fireEvent.change(passwordField, { target: { value: "123456" } });

    fireEvent.click(buttonElement);

    expect(mockedDispatch).toHaveBeenCalled();
  });
});
