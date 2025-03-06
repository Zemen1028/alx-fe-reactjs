import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders TodoList with initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a project')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add a todo');
  const addButton = screen.getByText('Add');

  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.click(addButton);

  expect(screen.getByText('New Task')).toBeInTheDocument();
});

test('toggles a todo completion', () => {
  render(<TodoList />);
  const todoItem = screen.getByText('Learn React');

  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: line-through');

  fireEvent.click(todoItem);
  expect(todoItem).not.toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const todoItem = screen.getByText('Learn React');
  const deleteButton = todoItem.nextSibling;

  fireEvent.click(deleteButton);
  expect(todoItem).not.toBeInTheDocument();
});
