import Contact from "../Contact";
import { getAllByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact Us test case", () => {
  it("Should Load Contact Us Component", () => {
    render(<Contact />);

    //checking heading is in the "Contact" or not
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  //Testing if the contact has some text

  it("Should Contact Component Contain this text", () => {
    render(<Contact />);
    const text = screen.getByText("Submit");

    //Assertion

    expect(text).toBeInTheDocument();
  });

  //Testing if the contact has particular placeholder

  it("Should render placeholder in Contact component", () => {
    render(<Contact />);
    const namePlaceholder = screen.getByPlaceholderText("Name");

    //Assertion

    expect(namePlaceholder).toBeInTheDocument();
  });

  //Testing all the input boxes of the contact component

  it("Should render all the input boxes of the contact component", () => {
    render(<Contact />);
    const allInputBoxes = screen.getAllByRole("textbox");

    //Assertion

    expect(allInputBoxes.length).toBe(2);
  });
});
