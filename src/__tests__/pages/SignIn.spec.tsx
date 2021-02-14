import SignIn from "../../pages/SignIn";
import { render } from "@testing-library/react";

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
  it("should render correctly", () => {
    const { getByText } = render(<SignIn />);

    const buttonElement = getByText("Entrar");

    expect(buttonElement).toBeInTheDocument();
  });
});
