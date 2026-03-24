import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Users from './pages/Users.jsx'
import Nav from './components/Nav.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    return (
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users/:username" element={<Users />} />
            </Routes>
          </Router>
        </div>
    );
}

export default App
