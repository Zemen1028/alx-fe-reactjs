import { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [repos, setRepos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ query, location, repos });
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Username"
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (e.g., New York)"
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
          placeholder="Min Repositories"
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
