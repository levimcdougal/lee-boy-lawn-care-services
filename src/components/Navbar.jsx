import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Phone } from 'lucide-react'
import logo from '../assets/logo-small.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { const f = () => setScrolled(window.scrollY > 40); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [pathname])
  return <nav className={`navbar${!scrolled ? ' navbar-transparent' : ''}`}><div className="navbar-inner">
    <NavLink to="/" className="navbar-logo" onClick={() => setOpen(false)}><img src={logo} alt="LeeBoy Lawn Service" width="380" height="253" decoding="async" /></NavLink>
    <ul className={`navbar-links${open ? ' open' : ''}`}><li><NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink></li><li><NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink></li><li><NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink></li><li className="mobile-call"><a href="tel:+18035918147" onClick={() => setOpen(false)}><Phone size={17} /> Call (803) 591-8147</a></li></ul>
    <a className="nav-phone" href="tel:+18035918147"><Phone size={16} /> (803) 591-8147</a>
    <button className={`hamburger${open ? ' open' : ''}`} onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open}><span/><span/><span/></button>
  </div></nav>
}
