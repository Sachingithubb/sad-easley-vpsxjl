import React, { useState } from "react";

const Login = ({ setUserData }) => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!loginId || !password) {
      setError("Please fill in all fields");
      return;
    }

    const response = await fetch(
      "https://lobster-app-ddwng.ondigitalocean.app/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          api_key: "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH",
        },
        body: JSON.stringify({ login_id: loginId, password }),
      }
    );

    const data = await response.json();
    if (response.ok) {
      setUserData(data); // Pass user data to parent
    } else {
      setError(data.message || "Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
