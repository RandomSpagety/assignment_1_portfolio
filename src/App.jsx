import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import logo from './assets/logo.svg'

export default function App() {
  return (
    <div>
      <nav className="nav">
        <div className="nav-inner container">
          <a className="brand" href="/">
            <img src={logo} alt="Logo" />
            <span>Nguyen Phan — Portfolio</span>
          </a>
          <div style={{display:'flex', gap:8}}>
            <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? 'active' : ''}>Projects</NavLink>
            <NavLink to="/services" className={({isActive}) => isActive ? 'active' : ''}>Services</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink>
          </div>
        </div>
      </nav>
      <main className="container" style={{paddingTop:24}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="footer">© {new Date().getFullYear()} Nguyen Phan. All rights reserved.</footer>
    </div>
  )
}
