
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('renders the ToDo app', () => {
  render(<App />);
  const title = screen.getByText(/ToDo App/i);
  expect(title).toBeInTheDocument();
});

test('adds a task', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Add a task/i);
  const button = screen.getByText(/Add/i);
  
  fireEvent.change(input, { target: { value: 'Learn Jest' } });
  fireEvent.click(button);

  const task = screen.getByText(/Learn Jest/i);
  expect(task).toBeInTheDocument();
});

test('deletes a task', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Add a task/i);
  const button = screen.getByText(/Add/i);
  
  fireEvent.change(input, { target: { value: 'Learn React' } });
  fireEvent.click(button);

  const deleteButton = screen.getByText(/Delete/i);
  fireEvent.click(deleteButton);

  const task = screen.queryByText(/Learn React/i);
  expect(task).not.toBeInTheDocument();
});
