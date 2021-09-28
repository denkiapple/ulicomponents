import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import Button from './Button';

test('Renders empty Button', () => {
  render(<Button title="Test" />);
  const linkElement = screen.getByText(/Test/i);
  expect(linkElement).toBeInTheDocument();
});

test('Checks Button click', () => {
  let wasClicked = false;

  const { getByTestId } = render(<Button onClick={() => (wasClicked = true)} />);
  const button = getByTestId("btn");

  expect(wasClicked).toBe(false);

  fireEvent.click(button);

  expect(wasClicked).toBe(true);
});
