import React, { useState } from "react";

// Define the structure of the user profile object
interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface InputProps {
  label: string;
  name: keyof UserProfile;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const Partials01: React.FC = () => {
  // Initialize the state with an empty user profile object
  const [userProfile, setUserProfile] = useState<Partial<UserProfile>>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  /**
   * Handle the input field changes and update the corresponding property in the user profile.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The event object containing the input field changes.
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  /**
   * Handle the form submission.
   *
   * @param {React.FormEvent} event - The form submission event.
   */
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
          <Input
            label="Name"
            name="name"
            type="text"
            value={userProfile.name}
            onChange={handleChange}
          />

          {/* Input field for the email */}
          <Input
            label="Email"
            name="email"
            type="email"
            value={userProfile.email}
            onChange={handleChange}
          />

          {/* Input field for the phone */}
          <Input
            label="Phone"
            name="phone"
            type="tel"
            value={userProfile.phone}
            onChange={handleChange}
          />

          {/* Input field for the address */}
          <Input
            label="Address"
            name="address"
            type="text"
            value={userProfile.address}
            onChange={handleChange}
          />

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
