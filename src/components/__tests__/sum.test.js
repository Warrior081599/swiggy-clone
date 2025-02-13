import { Sum } from "../Sum";

test("Sum function should calculate the sum of two numbers", () => {
  const result = Sum(3, 4);

  //Assertion
  expect(result).toBe(7);
});

/**
 * Assertion:
 * An assertion is a statement in testing that verifies whether a specific condition or expectation is true.
 * In React Testing Library (typically used with Jest), assertions are written using the `expect` function.
 * For example:
 *    expect(screen.getByText("Hello")).toBeInTheDocument();
 * This assertion checks that an element containing "Hello" exists in the rendered DOM.
 * Assertions are essential in tests because they confirm that your component behaves as expected.
 */
