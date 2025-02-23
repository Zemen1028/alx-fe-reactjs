import ProfilePage from './ProfilePage';
// src/UserContext.js
import React from 'react';

// Create a Context
const UserContext = React.createContext();

export default UserContext;

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return <ProfilePage userData={userData} />;
}

export default App;
