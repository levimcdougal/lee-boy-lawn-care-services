import { useState } from 'react'
import { MapPin, MessageSquare, Phone, ArrowRight, Clock, ChevronDown } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const faqs = [
  { q: 'How do I get a free estimate?', a: 'Call or text us at (803) 591-8147 and tell us a little about your property and the work you need. We’ll discuss the details and help you take the next step.' },
  { q: 'How far do you travel?', a: 'LeeBoy Lawn Service covers residential and commercial properties within about a 60-mile radius.' },
  { q: 'Do you service both homes and businesses?', a: 'Yes. We provide lawn care and outdoor maintenance for both residential and commercial properties.' },
  { q: 'What lawn services do you offer?', a: 'Our services include lawn mowing, edging and trimming, hedge trimming, light tree trimming, mulching, yard debris removal, and full property cleanups.' },
  { q: 'Can I schedule recurring lawn care?', a: 'Contact us to discuss your property, preferred schedule, and current availability. We’ll help determine a service plan that fits your needs.' },
  { q: 'Do I need to be home during service?', a: 'In many cases, no. As long as we can safely access the service areas and have confirmed the work in advance, you can continue with your day.' },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return <div className={`contact-faq-item${open ? ' open' : ''}`}>
    <button type="button" onClick={() => setOpen(!open)} aria-expanded={open}>
      <span>{q}</span><ChevronDown size={21} />
    </button>
    <div className="contact-faq-answer"><p>{a}</p></div>
  </div>
}

export default function Contact() {
  return <main className="page-wrapper">
    <section className="page-hero"><p className="section-label light">Contact us</p><h1>Let’s make your lawn<br /><em>look its best.</em></h1><p>Call or text LeeBoy Lawn Service for a free estimate. Tell us what you need and we’ll take it from there.</p></section>
    <section className="contact-section"><div className="section-inner contact-layout">
      <FadeIn><div className="contact-copy"><p className="section-label">Start a conversation</p><h2>Simple, local lawn care starts here.</h2><p>No complicated forms or long waits. Reach out directly and we’ll respond as soon as we can.</p>
        <a className="big-phone" href="tel:+18035918147"><span><Phone size={24} /></span><div><small>Call LeeBoy</small>(803) 591-8147</div><ArrowRight size={22} /></a>
      </div></FadeIn>
      <FadeIn delay={120}><div className="contact-info">
        <div><MessageSquare /><h3>Call or text</h3><p>Use the same number to call or send us a text about your property.</p><a href="sms:+18035918147">Send a text →</a></div>
        <div><MapPin /><h3>Service area</h3><p>Residential and commercial work within about a 60-mile radius.</p></div>
        <div><Clock /><h3>Scheduling</h3><p>Contact us to check availability and find a service time that works for you.</p></div>
      </div></FadeIn>
    </div></section>
    <section className="contact-bottom"><p>Residential <span>•</span> Commercial <span>•</span> Free estimates</p></section>
    <section className="faq-section"><div className="section-inner">
      <FadeIn><div className="faq-heading"><p className="section-label">Good to know</p><h2>Frequently asked questions.</h2><p>Quick answers to common questions about working with LeeBoy Lawn Service.</p></div></FadeIn>
      <FadeIn delay={100}><div className="contact-faq-list">{faqs.map(faq => <FaqItem key={faq.q} {...faq} />)}</div></FadeIn>
    </div></section>
  </main>
}
