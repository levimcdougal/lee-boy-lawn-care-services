import { Link } from 'react-router-dom'
import { ArrowRight, Building2, CalendarCheck, Check, Leaf, Scissors, Shovel, Sparkles, TreePine } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import heroBg from '../assets/lawn-hero.optimized.jpg'
import yardImg from '../assets/yard.optimized.jpg'
import commercialOffice from '../assets/commercial-office.optimized.jpg'
import commercialMowing from '../assets/commercial-mowing.optimized.jpg'
import gallery1 from '../assets/IMG1.optimized.jpg'
import gallery2 from '../assets/IMG2.optimized.jpg'
import gallery3 from '../assets/IMG3.optimized.jpg'
import gallery4 from '../assets/IMG4.optimized.jpg'
import gallery5 from '../assets/IMG5.optimized.jpg'
import gallery6 from '../assets/IMG6.optimized.jpg'
import gallery7 from '../assets/IMG7.optimized.jpg'
import gallery8 from '../assets/IMG8.optimized.jpg'
import gallery9 from '../assets/IMG9.optimized.jpg'
import gallery10 from '../assets/IMG10.optimized.jpg'
import gallery11 from '../assets/IMG11.optimized.jpg'
import gallery12 from '../assets/IMG12.optimized.jpg'
import gallery13 from '../assets/IMG13.optimized.jpg'
import gallery14 from '../assets/IMG14.optimized.jpg'
import gallery15 from '../assets/IMG15.optimized.jpg'
import gallery16 from '../assets/IMG16.optimized.jpg'
import gallery17 from '../assets/IMG17.optimized.jpg'
import gallery18 from '../assets/IMG18.optimized.jpg'
import gallery19 from '../assets/IMG19.optimized.jpg'
import gallery20 from '../assets/IMG20.optimized.jpg'
import gallery21 from '../assets/IMG21.optimized.jpg'
import gallery22 from '../assets/IMG22.optimized.jpg'
import gallery23 from '../assets/IMG23.optimized.jpg'
import gallery24 from '../assets/IMG24.optimized.jpg'
import gallery25 from '../assets/IMG25.optimized.jpg'
import gallery26 from '../assets/IMG26.optimized.jpg'
import gallery27 from '../assets/IMG27.optimized.jpg'
import gallery28 from '../assets/IMG28.optimized.jpg'
import gallery29 from '../assets/IMG29.optimized.jpg'
import gallery30 from '../assets/IMG30.optimized.jpg'
import gallery31 from '../assets/IMG31.optimized.jpg'
import gallery32 from '../assets/IMG32.optimized.jpg'
import gallery33 from '../assets/IMG33.optimized.jpg'
import gallery34 from '../assets/IMG34.optimized.jpg'
import gallery35 from '../assets/IMG35.optimized.jpg'
import gallery36 from '../assets/IMG36.optimized.jpg'
import gallery37 from '../assets/IMG37.optimized.jpg'
import gallery38 from '../assets/IMG38.optimized.jpg'
import gallery39 from '../assets/IMG39.optimized.jpg'

const galleryPhotos = [
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9,
  gallery10, gallery11, gallery12, gallery13, gallery14, gallery15, gallery16, gallery17,
  gallery18, gallery19, gallery20, gallery21, gallery22, gallery23, gallery24, gallery25,
  gallery26, gallery27, gallery28, gallery29, gallery30,
  gallery31, gallery32, gallery33, gallery34, gallery35, gallery36, gallery37, gallery38,
  gallery39,
]

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
        <div className="why-photo"><img src={yardImg} alt="Freshly maintained lawn" loading="lazy" decoding="async" width="1400" height="1050" /></div>
        <FadeIn><div className="why-content">
          <p className="section-label light">Why LeeBoy</p>
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
            <img className="commercial-photo-main" src={commercialOffice} alt="Professionally maintained lawn and landscaping at a commercial office property" loading="lazy" decoding="async" width="1100" height="733" />
            <img className="commercial-photo-small" src={commercialMowing} alt="Commercial lawn mowing beside a small business property" loading="lazy" decoding="async" width="1100" height="733" />
            <div className="commercial-badge"><strong>60</strong><span>mile service<br />area</span></div>
          </div></FadeIn>
        </div>
      </section>

      <section className="gallery-section" aria-labelledby="gallery-title">
        <FadeIn><div className="gallery-heading">
          <p className="section-label">Our work</p>
          <h2 id="gallery-title">Fresh cuts. <em>Real results.</em></h2>
          <p>A look at lawns and properties cared for by LeeBoy Lawn Service.</p>
        </div></FadeIn>
        <div className="gallery-marquee">
          <div className="gallery-track">
            {[...galleryPhotos, ...galleryPhotos].map((photo, index) => (
              <figure className="gallery-card" key={`${photo}-${index}`} aria-hidden={index >= galleryPhotos.length}>
                <img src={photo} alt={index < galleryPhotos.length ? `LeeBoy Lawn Service project ${index + 1}` : ''} loading="lazy" decoding="async" fetchPriority="low" width="340" height="420" />
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
