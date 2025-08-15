const data = [
  {
    id: 1,
    title: "Dentistry Hub",
    role: "Full‑stack (MERN)",
    outcome: "Built appointment booking with JWT auth",
    img: "https://dummyimage.com/640x360/11162a/ffffff&text=Dentistry+Hub"
  },
  {
    id: 2,
    title: "JavaFX Student Viewer",
    role: "Java/Oracle",
    outcome: "Connected to Oracle DB to filter students by city",
    img: "https://dummyimage.com/640x360/11162a/ffffff&text=JavaFX+App"
  },
  {
    id: 3,
    title: "Portfolio v1",
    role: "React/Vite",
    outcome: "Deployed to Vercel with Lighthouse 95+",
    img: "https://dummyimage.com/640x360/11162a/ffffff&text=Portfolio"
  }
]

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <p className="muted">A few things I’ve built and shipped recently.</p>
      <div className="grid" style={{marginTop:16}}>
        {data.map(p => (
          <article key={p.id} className="card">
            <img src={p.img} alt={p.title} style={{width:'100%', borderRadius:12, marginBottom:10}}/>
            <h3>{p.title}</h3>
            <p className="muted"><strong>Role:</strong> {p.role}</p>
            <p className="muted"><strong>Outcome:</strong> {p.outcome}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
