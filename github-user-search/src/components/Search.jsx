import { useState } from 'react';
import githubService from '../services/githubService';
import { FiSearch, FiLoader, FiAlertCircle } from 'react-icons/fi';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const data = await githubService.fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we cant find the user");
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 flex items-center gap-2"
          >
            {loading ? <FiLoader className="animate-spin" /> : <FiSearch />}
            Search
          </button>
        </div>
      </form>

      {loading && (
        <div className="flex items-center justify-center p-8 text-blue-600">
          <FiLoader className="animate-spin mr-2" size={24} />
          <span>Loading...</span>
        </div>
      )}

      {error && (
        <div className="flex items-center justify-center p-8 text-red-600">
          <FiAlertCircle className="mr-2" size={24} />
          <span>{error}</span>
        </div>
      )}

      {userData && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
          <div className="flex items-center gap-6 mb-4">
            <img
              src={userData.avatar_url}
              alt={`${userData.login}'s avatar`}
              className="w-20 h-20 rounded-full border-2 border-blue-200"
            />
            <div>
              <h2 className="text-xl font-bold">{userData.name || userData.login}</h2>
              <p className="text-gray-600">@{userData.login}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
