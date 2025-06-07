import React from 'react';
import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
  // Sample profile data
  const profiles = [
    {
      id: 1,
      name: "Sonam Zangmo",
      role: "Software Developer",
      avatar: "https://cdn.pfps.gg/pfps/3671-aesthetic-anime-17.png",
      skills: ["React", "JavaScript", "CSS", "HTML"],
      location: "Phuntsholing, Bhutan"

    },
   
  ];

  return (
    <div className="App">
      <header>
        <h1>Profile</h1>
      </header>
      <div className="profiile-container">
        {profiles.map(profile => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            role={profile.role}
            avatar={profile.avatar}
            skills={profile.skills}
          />
        ))}
      </div>
    </div>
  )
}

export default App;