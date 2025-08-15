import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="header">
      <div>
        <p className="muted small">Hi, I’m</p>
        <h1 className="hero">Nguyen Phan</h1>
        <p className="muted">Full‑stack student developer focused on React, Node.js, and databases. I love turning ideas into clean, usable products.</p>
        <div style={{display:'flex', gap:12, marginTop:16}}>
          <Link to="/projects" className="btn">View Projects</Link>
          <Link to="/about" className="btn" style={{background:'linear-gradient(90deg,#22d3ee,#6366f1)'}}>About Me</Link>
        </div>
      </div>
      <div className="card">
        <h3>Quick Facts</h3>
        <ul className="muted">
          <li>Based in Canada</li>
          <li>Backend + Frontend coursework (COMP 228/214/229)</li>
          <li>Open to internships and freelance</li>
        </ul>
      </div>
    </section>
  )
}
