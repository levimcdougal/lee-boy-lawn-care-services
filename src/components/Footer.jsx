import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import logo from '../assets/logo-small.png'
export default function Footer() { return <footer className="footer"><div className="footer-inner"><div className="footer-brand"><img src={logo} alt="LeeBoy Lawn Service" width="380" height="253" loading="lazy" decoding="async" /></div><p>Honest work. Clean results. Lawn care for homes and businesses within about 60 miles.</p><div className="footer-links"><Link to="/">Home</Link><Link to="/services">Services</Link><Link to="/contact">Contact</Link><a href="tel:+18035918147"><Phone size={14}/> (803) 591-8147</a></div><div className="footer-bottom">© {new Date().getFullYear()} LeeBoy Lawn Service. All rights reserved.</div></div></footer> }
