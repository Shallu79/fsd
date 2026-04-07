import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios.post("http://localhost:5000/login", {
      email,
      password
    })
    .then(res => alert(res.data))
    .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Login</h2>

      <input type="email" placeholder="Email"
        onChange={(e) => setEmail(e.target.value)} />

      <input type="password" placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleLogin}>Login</button>

      <p>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}

export default Login;