import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title) newErrors.title = "Title is required.";
    if (!ingredients) newErrors.ingredients = "Ingredients are required.";
    if (!steps) newErrors.steps = "Preparation steps are required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission (e.g., send data to an API or update state)
      console.log("Form submitted:", { title, ingredients, steps });
      alert("Recipe submitted successfully!");
      // Reset form fields
      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Add a New Recipe</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md" // Added shadow-md
      >
        {/* Title Field */}
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

        {/* Ingredients Field */}
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
            placeholder="Enter ingredients, separated by commas or new lines..."
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps Field */}
        <div className="mb-6">
          <label htmlFor="steps" className="block text-lg font-semibold mb-2">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full p-2 border rounded-lg ${
              errors.steps ? "border-red-500" : "border-gray-300"
            }`}
            rows="6"
            placeholder="Enter step-by-step instructions..."
          />
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 shadow-md" // Added shadow-md
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
