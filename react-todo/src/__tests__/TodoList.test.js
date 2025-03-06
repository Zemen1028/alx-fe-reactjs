import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  // Test 1: Verify that the initial todos are rendered
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  // Test 2: Verify that a new todo can be added
  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add");

    // Simulate user typing a new todo
    fireEvent.change(input, { target: { value: "New Todo" } });
    // Simulate form submission
    fireEvent.click(addButton);

    // Verify that the new todo is added to the list
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  // Test 3: Verify that a todo can be toggled between completed and not completed
  test("toggles a todo", () => {
    render(<TodoList />);
    const todoText = screen.getByText("Learn React");

    // Simulate clicking the todo to toggle its completion status
    fireEvent.click(todoText);
    // Verify that the todo is marked as completed (line-through)
    expect(todoText).toHaveStyle("text-decoration: line-through");

    // Simulate clicking the todo again to toggle it back
    fireEvent.click(todoText);
    // Verify that the todo is no longer marked as completed
    expect(todoText).toHaveStyle("text-decoration: none");
  });

  // Test 4: Verify that a todo can be deleted
  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText("Delete")[0]; // Get the first delete button

    // Simulate clicking the delete button
    fireEvent.click(deleteButton);
    // Verify that the todo is no longer in the list
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
