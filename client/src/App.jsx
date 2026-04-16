import { useState } from 'react';

function App() {
  
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); 

    
    alert(`You are submitting:\n\nName: ${name}\nEmail: ${email}\nPassword: ${password}`);

    try {
      const response = await fetch('http://localhost:5001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({ name: name, email: email, password: password }), 
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Server says:", data.message);
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error("Failed to connect:", error);
      alert("Connection failed! Make sure your backend server is running.");
    }
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h2>SIGNUP PAGE</h2>
      
      <form onSubmit={handleLogin}>
        
        {/* Name Input (Fixed type="text") */}
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text" 
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ padding: '8px', width: '250px' }}
          />
        </div>

        {/* Email Input */}
        <div style={{ marginBottom: '10px' }}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: '8px', width: '250px' }}
          />
        </div>
        
        {/* Password Input */}
        <div style={{ marginBottom: '10px' }}>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ padding: '8px', width: '250px' }}
          />
        </div>
        
        {/* Submit Button */}
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Send to Backend
        </button>
      </form>
    </div>
  );
}

export default App;