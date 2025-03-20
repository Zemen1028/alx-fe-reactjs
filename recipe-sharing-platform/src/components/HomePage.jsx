import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch the mock data from the JSON file
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <Link to={`/recipe/${recipe.id}`}>
  <div
    key={recipe.id}
    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
  >
    <img
      src={recipe.image}
      alt={recipe.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
      <p className="text-gray-600">{recipe.summary}</p>
    </div>
  </div>
</Link>
    
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
<div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Recipe Sharing Platform</h1>
        <Link
          to="/add-recipe"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Add Recipe
        </Link>
      </div>
      {/* Rest of the HomePage content */}
    </div>
  );
};

export default HomePage;
