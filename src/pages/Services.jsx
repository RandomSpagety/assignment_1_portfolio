export default function Services() {
  const items = [
    { t: "Frontend Development", d: "React, Vite, accessibility, performance" },
    { t: "Backend APIs", d: "Node.js, Express, MongoDB, JWT" },
    { t: "DevOps Basics", d: "GitHub, CI/CD, cloud deploys" },
  ]
  return (
    <section>
      <h2>Services</h2>
      <div className="grid" style={{marginTop:16}}>
        {items.map((s, i) => (
          <div key={i} className="card">
            <h3>{s.t}</h3>
            <p className="muted">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
