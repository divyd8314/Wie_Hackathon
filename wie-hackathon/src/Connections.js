import React, { useState } from 'react';

const Connections = ({ setCurrentPage }) => {
  // Sample initial profiles
  const [profiles, setProfiles] = useState([
    {
      name: "John Smith",
      nationality: "American",
      location: "New York",
      socialMedia: "twitter.com/john",
      about: "Software developer interested in AI"
    },
    {
      name: "Maria Garcia",
      nationality: "Mexican",
      location: "Mexico City",
      socialMedia: "linkedin.com/maria",
      about: "UX designer and artist"
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    nationality: '',
    location: '',
    socialMedia: '',
    about: ''
  });

  const [filter, setFilter] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfiles([...profiles, formData]);
    setFormData({
      name: '',
      nationality: '',
      location: '',
      socialMedia: '',
      about: ''
    });
  };

  const filteredProfiles = profiles.filter(profile =>
    filter === '' || profile.nationality.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Back Button */}
      <button 
        onClick={() => setCurrentPage('home')}
        className="mb-6 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
      >
        Back to Home
      </button>

      {/* Add Profile Form */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Add Your Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Nationality:</label>
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Social Media URL:</label>
            <input
              type="text"
              name="socialMedia"
              value={formData.socialMedia}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-1">About Me:</label>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Add Profile
          </button>
        </form>
      </div>

      {/* Filter Profiles */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Find Connections</h2>
        <input
          type="text"
          placeholder="Filter by nationality..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full max-w-md p-2 border rounded"
        />
      </div>

      {/* Display Profiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProfiles.map((profile, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">{profile.name}</h3>
            <p className="text-gray-600 mb-1">Nationality: {profile.nationality}</p>
            <p className="text-gray-600 mb-1">Location: {profile.location}</p>
            {profile.socialMedia && (
              <p className="text-gray-600 mb-1">
                Social Media:{' '}
                <a
                  href={profile.socialMedia.startsWith('http') ? profile.socialMedia : `https://${profile.socialMedia}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Link
                </a>
              </p>
            )}
            <p className="text-gray-700 mt-2">{profile.about}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connections;