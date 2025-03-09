// src/__tests__/TodoList.test.js
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  // Test 1: Initial Render
  test("renders TodoList component correctly", () => {
    render(<TodoList />);

    // Check for heading
    const heading = screen.getByRole("heading", { name: /todo list/i });
    expect(heading).toBeInTheDocument();

    // Check for initial todos
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Write tests")).toBeInTheDocument();

    // Check for item counter
    expect(screen.getByText("2 items left")).toBeInTheDocument();

    // Check for form elements
    expect(screen.getByPlaceholderText("Enter a new todo")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /add todo/i })
    ).toBeInTheDocument();
  });

  // Test 2: Adding Todos
  test("allows adding a new todo", () => {
    render(<TodoList />);

    // Check initial list items count
    expect(screen.getAllByRole("listitem")).toHaveLength(3);

    // Get input and button elements
    const input = screen.getByPlaceholderText("Enter a new todo");
    const addButton = screen.getByRole("button", { name: /add todo/i });

    // Add a new todo
    fireEvent.change(input, { target: { value: "Go shopping" } });
    fireEvent.click(addButton);

    // Check for updated list and counter
    expect(screen.getAllByRole("listitem")).toHaveLength(4);
    expect(screen.getByText("Go shopping")).toBeInTheDocument();
    expect(screen.getByText("3 items left")).toBeInTheDocument();

    // Verify input was cleared
    expect(input).toHaveValue("");
  });

  // Test 3: Toggling Todos
  test("allows toggling todo completion status", () => {
    render(<TodoList />);

    // Get todo element and its parent li
    const todo = screen.getByText("Learn React");
    const todoItem = todo.closest("li");

    // Check initial state
    expect(todoItem).not.toHaveClass("line-through");
    expect(screen.getByText("2 items left")).toBeInTheDocument();

    // Toggle todo
    fireEvent.click(todo);

    // Check toggled state
    expect(todoItem).toHaveClass("line-through");
    expect(todoItem).toHaveClass("bg-green-50");
    expect(screen.getByText("1 items left")).toBeInTheDocument();

    // Toggle back
    fireEvent.click(todo);

    // Check toggled back state
    expect(todoItem).not.toHaveClass("line-through");
    expect(screen.getByText("2 items left")).toBeInTheDocument();
  });

  // Test 4: Deleting Todos
  test("allows deleting todos", async () => {
    render(<TodoList />);

    // Check initial list items count
    expect(screen.getAllByRole("listitem")).toHaveLength(3);

    // Get delete buttons
    const deleteButtons = screen.getAllByRole("button", { name: "" });

    // Delete first todo
    fireEvent.click(deleteButtons[0]);

    // Check updated list
    await waitFor(() => {
      expect(screen.getAllByRole("listitem")).toHaveLength(2);
    });

    // Delete another todo
    const remainingDeleteButtons = screen.getAllByRole("button", { name: "" });
    fireEvent.click(remainingDeleteButtons[0]);

    // Check final list
    await waitFor(() => {
      expect(screen.getAllByRole("listitem")).toHaveLength(1);
    });
  });
});
