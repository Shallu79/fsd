import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Links() {
    function Home() {
        return <h2>Home Page</h2>
    }

    function About() {
        return <h2>About Page</h2>
    }

    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <Router>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Router>
        </div>
    )
}

export default Links