import React, { useState } from "react";

// Define the structure of the user profile object
interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
}

/**
 * Custom Input structure
 */
interface InputProps {
  label: string; // Label for the input field
  name: keyof UserProfile; // Name of the field in the user profile object
  type: string; // Type of the input field
  value: string; // Value of the input field
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Event handler for input change
}

/**
 * Custom Input component that simplifies the rendering of input fields
 */
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

/**
 * Partials01 component
 */
const Partials01: React.FC = () => {
  const [userProfile, setUserProfile] = useState<Partial<UserProfile>>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  /**
   * Event handler for input field changes
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  /**
   * Event handler for form submission
   */
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
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
            value={userProfile.name || ""}
            onChange={handleChange}
          />

          {/* Input field for the email */}
          <Input
            label="Email"
            name="email"
            type="email"
            value={userProfile.email || ""}
            onChange={handleChange}
          />

          {/* Input field for the phone */}
          <Input
            label="Phone"
            name="phone"
            type="tel"
            value={userProfile.phone || ""}
            onChange={handleChange}
          />

          {/* Input field for the address */}
          <Input
            label="Address"
            name="address"
            type="text"
            value={userProfile.address || ""}
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
