
import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title) newErrors.title = "Title is required.";
    if (!ingredients) newErrors.ingredients = "Ingredients are required.";
    if (!instructions) newErrors.instructions = "Instructions are required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission (e.g., send data to an API or update state)
      console.log("Form submitted:", { title, ingredients, instructions });
      alert("Recipe submitted successfully!");
      // Reset form fields
      setTitle("");
      setIngredients("");
      setInstructions("");
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="mb-6">
          <label htmlFor="title" className="block text-lg font-semibold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-2 border rounded-lg ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="ingredients" className="block text-lg font-semibold mb-2">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full p-2 border rounded-lg ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
            rows="4"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="instructions" className="block text-lg font-semibold mb-2">
            Preparation Steps
          </label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className={`w-full p-2 border rounded-lg ${
              errors.instructions ? "border-red-500" : "border-gray-300"
            }`}
            rows="6"
          />
          {errors.instructions && (
            <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
