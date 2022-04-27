import React from "react";
// eslint-disable-next-line node/no-unpublished-import
import { render, screen } from "@testing-library/react";
import Button from "../Button";

test("should show a button with name", () => {
  const buttonName = "button-test";
  render(<Button data-testid="id-test-button" name={buttonName} />);

  const input = screen.getByTestId("id-test-button");

  expect(input.name).toEqual(buttonName);
});
