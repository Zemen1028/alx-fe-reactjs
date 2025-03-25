import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

const fetchUserData = async (username, location = '', minRepos = '') => {
  try {
    // Construct query parameters
    let query = `${username} in:login`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const url = `${BASE_URL}?q=${encodeURIComponent(query)}`;
    const response = await axios.get(url);
    
    return response.data.items || [];
  } catch (error) {
    console.error('GitHub API error:', error);
    throw error;
  }
};

export default {
  fetchUserData,
};
