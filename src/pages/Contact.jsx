import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    firstName: '', lastName: '', phone: '', email: '', message: ''
  })

  function onChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function onSubmit(e) {
    e.preventDefault()
    // Capture data locally (console/log) and redirect to Home per A1 requirement.
    console.log('Contact submission:', form)
    alert('Thanks! Your message has been captured locally for Assignment 1.')
    navigate('/')
  }

  return (
    <section>
      <h2>Contact</h2>
      <p className="muted">Fill out the form and I’ll get back to you. (In A1, this just captures data and redirects.)</p>
      <form className="grid" onSubmit={onSubmit} style={{marginTop:16}}>
        <div className="card">
          <label>First Name</label>
          <input className="input" name="firstName" value={form.firstName} onChange={onChange} required />
          <label style={{marginTop:10}}>Last Name</label>
          <input className="input" name="lastName" value={form.lastName} onChange={onChange} required />
          <label style={{marginTop:10}}>Phone</label>
          <input className="input" name="phone" value={form.phone} onChange={onChange} />
          <label style={{marginTop:10}}>Email</label>
          <input className="input" name="email" type="email" value={form.email} onChange={onChange} required />
        </div>
        <div className="card">
          <label>Message</label>
          <textarea className="textarea" name="message" value={form.message} onChange={onChange} />
          <button className="btn" type="submit" style={{marginTop:12}}>Send & Redirect</button>
        </div>
      </form>
    </section>
  )
}
