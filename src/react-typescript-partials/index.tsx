import React, { useState } from "react";

// Define the structure of the user profile object
interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const Partials01: React.FC = () => {
  // Initialize the state with an empty user profile object
  const [userProfile, setUserProfile] = useState<Partial<UserProfile>>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // Handle the input field changes and update the corresponding property in the user profile
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Handle the form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Perform validation and submit the updated user profile
    console.log("Updated User Profile:", userProfile);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
        <form onSubmit={handleSubmit}>
          {/* Input field for the name */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={userProfile.name}
              onChange={handleChange}
            />
          </div>
          {/* Input field for the email */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={userProfile.email}
              onChange={handleChange}
            />
          </div>
          {/* Input field for the phone */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              value={userProfile.phone}
              onChange={handleChange}
            />
          </div>
          {/* Input field for the address */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              value={userProfile.address}
              onChange={handleChange}
            />
          </div>
          {/* Submit button */}
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Partials01;
