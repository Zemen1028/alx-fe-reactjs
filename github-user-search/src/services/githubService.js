// services/githubService.js
const BASE_URL = 'https://api.github.com/search/users';

const advancedSearch = async (params) => {
  let queryParts = [];
  
  if (params.username) queryParts.push(`${params.username} in:login`);
  if (params.location) queryParts.push(`location:${params.location}`);
  if (params.minRepos) queryParts.push(`repos:>=${params.minRepos}`);
  if (params.language) queryParts.push(`language:${params.language}`);
  
  const queryString = queryParts.join('+');
  const url = `${BASE_URL}?q=${encodeURIComponent(queryString)}&per_page=10`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('API request failed');
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('GitHub API error:', error);
    throw error;
  }
};

export default {
  advancedSearch,
};
