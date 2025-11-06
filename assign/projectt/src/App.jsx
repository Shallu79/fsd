import { Link, Routes, Route } from 'react-router-dom'
import './App.css'
import Count from './Components/count'
import Login from './Components/login'
import Register from './Components/register'

function App() {
  return (
    <div className='App'>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/register">Register</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Count />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
