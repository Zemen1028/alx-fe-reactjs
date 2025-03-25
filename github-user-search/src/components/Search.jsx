import { useState } from 'react';
import githubService from '../services/githubService';
import { FiSearch, FiLoader, FiAlertCircle, FiMapPin, FiDatabase, FiUsers } from 'react-icons/fi';

const Search = () => {
  const [searchParams, setSearchParams] = useState({
    username: '',
    location: '',
    minRepos: '',
    minFollowers: '',
    language: ''
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPage(1);
    await fetchUsers(1);
  };

  const fetchUsers = async (pageNum) => {
    setLoading(true);
    setError(null);
    
    try {
      const { items, total_count } = await githubService.advancedSearch(searchParams, pageNum);
      
      if (pageNum === 1) {
        setUsers(items);
      } else {
        setUsers(prev => [...prev, ...items]);
      }
      
      setHasMore(items.length > 0 && total_count > pageNum * 10);
    } catch (err) {
      setError("Looks like we can't find any matching users");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    await fetchUsers(nextPage);
    setPage(nextPage);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">GitHub User Search</h1>
      
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input
                type="text"
                name="username"
                value={searchParams.username}
                onChange={handleInputChange}
                placeholder="e.g. octocat"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
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
                  placeholder="e.g. San Francisco"
                  className="w-full pl-10 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Min Repositories</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiDatabase className="text-gray-400" />
                </div>
                <input
                  type="number"
                  name="minRepos"
                  value={searchParams.minRepos}
                  onChange={handleInputChange}
                  placeholder="e.g. 10"
                  min="0"
                  className="w-full pl-10 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Min Followers</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUsers className="text-gray-400" />
                </div>
                <input
                  type="number"
                  name="minFollowers"
                  value={searchParams.minFollowers}
                  onChange={handleInputChange}
                  placeholder="e.g. 100"
                  min="0"
                  className="w-full pl-10 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 flex items-center gap-2"
            >
              {loading ? <FiLoader className="animate-spin" /> : <FiSearch />}
              Search
            </button>
          </div>
        </form>
      </div>

      {loading && page === 1 && (
        <div className="flex items-center justify-center p-8 text-blue-600">
          <FiLoader className="animate-spin mr-2" size={24} />
          <span>Loading users...</span>
        </div>
      )}

      {error && (
        <div className="flex items-center justify-center p-8 text-red-600">
          <FiAlertCircle className="mr-2" size={24} />
          <span>{error}</span>
        </div>
      )}

      {users.length > 0 && (
        <div className="space-y-4">
          {users.map(user => (
            <div key={user.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start gap-6">
                  <img
                    src={user.avatar_url}
                    alt={`${user.login}'s avatar`}
                    className="w-20 h-20 rounded-full border-2 border-blue-200"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-xl font-bold">{user.login}</h2>
                        <a
                          href={user.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline text-sm"
                        >
                          View Profile
                        </a>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {user.type}
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      {user.location && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <FiMapPin /> {user.location}
                        </div>
                      )}
                      
                      <div className="flex items-center gap-2 text-gray-600">
                        <FiDatabase /> {user.public_repos || '?'} repositories
                      </div>

                      <div className="flex items-center gap-2 text-gray-600">
                        <FiUsers /> {user.followers || '?'} followers
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {hasMore && (
            <div className="flex justify-center mt-6">
              <button
                onClick={loadMore}
                disabled={loading}
                className="px-6 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 disabled:bg-gray-300 flex items-center gap-2"
              >
                {loading ? <FiLoader className="animate-spin" /> : 'Load More'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
