import { FiGithub, FiUser, FiMapPin, FiLink, FiDatabase } from 'react-icons/fi';

const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-6 mb-4">
          <img
            src={user.avatar_url}
            alt={`${user.login}'s avatar`}
            className="w-20 h-20 rounded-full border-2 border-blue-200"
          />
          <div>
            <h2 className="text-xl font-bold">{user.name || user.login}</h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center gap-1"
            >
              <FiGithub /> @{user.login}
            </a>
          </div>
        </div>

        {user.bio && <p className="text-gray-700 mb-4">{user.bio}</p>}

        <div className="grid grid-cols-2 gap-4 text-sm">
          {user.location && (
            <div className="flex items-center gap-2 text-gray-600">
              <FiMapPin /> {user.location}
            </div>
          )}

          {user.blog && (
            <div className="flex items-center gap-2 text-blue-600">
              <FiLink />
              <a href={user.blog} target="_blank" rel="noopener noreferrer" className="hover:underline">
                Website
              </a>
            </div>
          )}

          <div className="flex items-center gap-2 text-gray-600">
            <FiUser /> {user.followers} followers · {user.following} following
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <FiDatabase /> {user.public_repos} public repos
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
