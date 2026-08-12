import { Link } from 'react-router-dom'
import { ArrowRight, Building2, CalendarCheck, Check, Leaf, Scissors, Shovel, Sparkles, TreePine } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import heroBg from '../assets/lawn-hero.png'
import yardImg from '../assets/yard.png'
import commercialOffice from '../assets/commercial-office.jpg'
import commercialMowing from '../assets/commercial-mowing.jpg'
import gallery1 from '../assets/IMG1.jpg'
import gallery2 from '../assets/IMG2.jpg'
import gallery3 from '../assets/IMG3.jpg'
import gallery4 from '../assets/IMG4.jpg'
import gallery5 from '../assets/IMG5.jpg'
import gallery6 from '../assets/IMG6.jpg'
import gallery7 from '../assets/IMG7.jpg'
import gallery8 from '../assets/IMG8.jpg'
import gallery9 from '../assets/IMG9.jpg'
import gallery10 from '../assets/IMG10.jpg'
import gallery11 from '../assets/IMG11.jpg'
import gallery12 from '../assets/IMG12.jpg'

const galleryPhotos = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12]

const services = [
  { Icon: Leaf, title: 'Lawn Mowing', desc: 'A clean, even cut with sharp striping that keeps your property looking its best.' },
  { Icon: Sparkles, title: 'Edging & Trimming', desc: 'Crisp borders around walks, drives, beds, fences, and every hard-to-reach area.' },
  { Icon: Scissors, title: 'Hedge Trimming', desc: 'Careful shaping and pruning for tidy, healthy shrubs and hedges.' },
  { Icon: TreePine, title: 'Tree Trimming', desc: 'Light tree trimming that clears overgrowth and improves your property’s appearance.' },
  { Icon: Shovel, title: 'Mulching', desc: 'Fresh mulch installation to protect beds, control weeds, and sharpen curb appeal.' },
  { Icon: Check, title: 'Debris Removal', desc: 'Yard waste, limbs, leaves, and storm debris cleared and hauled away.' },
]

export default function HomePage() {
  return (
    <main className="page-wrapper">
      <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-inner">
          <p className="hero-kicker"><span /> Proudly serving homes & businesses</p>
          <h1>Your lawn.<br /><em>Our priority.</em></h1>
          <p>Dependable lawn care with the clean cuts, sharp edges, and attention to detail your property deserves.</p>
          <div className="hero-buttons">
            <a href="tel:+18035918147" className="btn-primary">Call (803) 591-8147</a>
            <Link to="/services" className="btn-outline">Explore services <ArrowRight size={17} /></Link>
          </div>
          <div className="hero-trust"><Check size={17} /> Residential & commercial <span>•</span> Up to 60 miles</div>
        </div>
      </section>

      <section className="section services-home">
        <div className="section-inner">
          <FadeIn><div className="section-heading-row">
            <div><p className="section-label">What we do</p><h2 className="section-title">Everything your yard needs.</h2></div>
            <p className="section-subtitle">From routine mowing to seasonal cleanups, we do the hard work so you can simply enjoy your outdoor space.</p>
          </div></FadeIn>
          <div className="services-grid">
            {services.map(({ Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 65}><article className="service-card">
                <div className="service-icon"><Icon size={25} /></div>
                <h3>{title}</h3><p>{desc}</p>
              </article></FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="why-photo" style={{ backgroundImage: `url(${yardImg})` }} />
        <FadeIn><div className="why-content">
          <p className="section-label light">Why Lee Boy</p>
          <h2>Good work.<br />Straightforward service.</h2>
          <p>We believe a great lawn service should be simple: show up, work hard, and leave the property looking better than we found it.</p>
          <ul>
            <li><Check size={18} /> Reliable, careful service</li>
            <li><Check size={18} /> Homes and commercial properties</li>
            <li><Check size={18} /> Flexible scheduling and free estimates</li>
          </ul>
          <Link to="/contact" className="text-link">Get your free estimate <ArrowRight size={17} /></Link>
        </div></FadeIn>
      </section>

      <section className="commercial-section" aria-labelledby="commercial-title">
        <div className="section-inner commercial-layout">
          <FadeIn><div className="commercial-copy">
            <p className="section-label">Commercial lawn care</p>
            <h2 id="commercial-title">A property that looks <em>ready for business.</em></h2>
            <p className="commercial-intro">The outside of your business is part of the first impression. We provide dependable lawn and landscape maintenance that keeps your grounds clean, welcoming, and professional.</p>
            <div className="commercial-benefits">
              <div><span><CalendarCheck size={21} /></span><p><strong>Dependable scheduling</strong>Routine service plans built around your property’s needs.</p></div>
              <div><span><Building2 size={21} /></span><p><strong>Professional curb appeal</strong>Clean lines, trimmed shrubs, and tidy entrances for customers and tenants.</p></div>
            </div>
            <div className="property-types" aria-label="Commercial properties served">
              <span>Offices</span><span>Retail</span><span>Rental properties</span><span>HOAs</span><span>Churches</span>
            </div>
            <Link to="/contact" className="btn-commercial">Request a commercial estimate <ArrowRight size={17} /></Link>
          </div></FadeIn>
          <FadeIn delay={100}><div className="commercial-photos">
            <img className="commercial-photo-main" src={commercialOffice} alt="Professionally maintained lawn and landscaping at a commercial office property" loading="lazy" />
            <img className="commercial-photo-small" src={commercialMowing} alt="Commercial lawn mowing beside a small business property" loading="lazy" />
            <div className="commercial-badge"><strong>60</strong><span>mile service<br />area</span></div>
          </div></FadeIn>
        </div>
      </section>

      <section className="gallery-section" aria-labelledby="gallery-title">
        <FadeIn><div className="gallery-heading">
          <p className="section-label">Our work</p>
          <h2 id="gallery-title">Fresh cuts. <em>Real results.</em></h2>
          <p>A look at lawns and properties cared for by Lee Boy Lawn Service.</p>
        </div></FadeIn>
        <div className="gallery-marquee">
          <div className="gallery-track">
            {[...galleryPhotos, ...galleryPhotos].map((photo, index) => (
              <figure className="gallery-card" key={`${photo}-${index}`} aria-hidden={index >= galleryPhotos.length}>
                <img src={photo} alt={index < galleryPhotos.length ? `Lee Boy Lawn Service project ${index + 1}` : ''} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div><p className="section-label">Let’s get to work</p><h2>Ready for a yard you’re proud of?</h2><p>Tell us what your property needs. We’ll take it from here.</p></div>
        <a href="tel:+18035918147" className="btn-dark">Call for a free estimate <ArrowRight size={17} /></a>
      </section>
    </main>
  )
}
