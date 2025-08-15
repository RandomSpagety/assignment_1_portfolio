import headshot from '../assets/headshot.pdf';

export default function About() {
  return (
    <section className="grid">
      <div className="card">
        <img src={headshot} alt="Headshot" style={{width:'100%'}}/>
      </div>
      <div className="card">
        <h2>About — <span className="muted">Nguyen Phan</span></h2>
        <p>
          I’m a software development student focusing on modern web stacks. My interests include
          API design, data modeling, and building accessible UIs.
        </p>
        <p className="muted">Legal name: Nguyen Phan</p>
        <div style={{display:'flex', gap:12}}>
          <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">View Resume (PDF)</a>
        </div>
      </div>
    </section>
  )
}
