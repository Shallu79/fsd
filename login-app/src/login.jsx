import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    alert(data.message);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login Page</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}