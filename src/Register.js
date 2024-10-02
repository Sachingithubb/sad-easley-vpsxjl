import React, { useState } from "react";

const Register = ({ setUserData }) => {
  const [formData, setFormData] = useState({
    full_name: "",
    username: "",
    email_id: "",
    mobile_number: "",
    password: "",
    referral_id: "developer",
    country_row_id: "101",
  });
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const { full_name, username, email_id, mobile_number, password } = formData;

    if (!full_name || !username || !email_id || !mobile_number || !password) {
      setError("All fields are required");
      return;
    }

    const response = await fetch(
      "https://lobster-app-ddwng.ondigitalocean.app/user/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          api_key: "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();
    if (response.ok) {
      setUserData(data); // Pass user data to parent
    } else {
      setError(data.message || "Registration failed");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          value={formData.full_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email_id"
          placeholder="Email"
          value={formData.email_id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="mobile_number"
          placeholder="Mobile Number"
          value={formData.mobile_number}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
