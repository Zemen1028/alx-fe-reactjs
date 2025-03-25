import { useState } from 'react';
import githubService from '../services/githubService';
import { FiSearch, FiLoader, FiAlertCircle } from 'react-icons/fi';

const Search = () => {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]); // Changed from userData to users array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // Assuming githubService.fetchUserData returns an array of users
      const data = await githubService.fetchUserData(username);
      setUsers(Array.isArray(data) ? data : [data]); // Ensure we have an array
    } catch (err) {
      setError("Looks like we cant find the user");
      setUsers([]);
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



   <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiMapPin className="text-gray-400" />
            </div>
            <input
              type="text"
              name="location"
              value={searchParams.location}
              onChange={handleInputChange}
              placeholder="Filter by location (e.g. San Francisco)"
              className="w-full pl-10 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
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

      {/* Using map to display multiple users */}
      {users.length > 0 && (
        <div className="space-y-4">
          {users.map(user => (
            <div key={user.id} className="bg-white rounded-lg shadow-md overflow-hidden p-6">
              <div className="flex items-center gap-6 mb-4">
                <img
                  src={user.avatar_url}
                  alt={`${user.login}'s avatar`}
                  className="w-20 h-20 rounded-full border-2 border-blue-200"
                />
                <div>
                  <h2 className="text-xl font-bold">{user.name || user.login}</h2>
                  <p className="text-gray-600">@{user.login}</p>
                  <a 
                    href={user.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
