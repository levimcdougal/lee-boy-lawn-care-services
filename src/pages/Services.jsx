import { Link } from 'react-router-dom'
import { ArrowRight, Check, Leaf, Scissors, Shovel, Sparkles, TreePine, Truck, Warehouse } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const services = [
  { Icon: Leaf, num: '01', title: 'Lawn Mowing', desc: 'Consistent, professional mowing for a healthy, polished lawn. We finish every visit with trimming and a clean blow-off.', items: ['Even, height-appropriate cut', 'Trimming around obstacles', 'Clippings cleared from hard surfaces'] },
  { Icon: Sparkles, num: '02', title: 'Edging & Trimming', desc: 'Clean edges make all the difference. We define the borders around your lawn for a finished, intentional look.', items: ['Sidewalks and driveways', 'Flower beds and curbs', 'Fences and hard-to-reach spaces'] },
  { Icon: Scissors, num: '03', title: 'Hedge Trimming', desc: 'Keep shrubs neat and manageable with careful trimming and shaping tailored to the plant and your property.', items: ['Shrub and hedge shaping', 'Overgrowth cutback', 'Cleanup of trimmed material'] },
  { Icon: TreePine, num: '04', title: 'Tree Trimming', desc: 'Light trimming for small trees and reachable limbs to remove unwanted growth and keep your yard open and tidy.', items: ['Low and reachable limbs', 'Small-tree shaping', 'Branch cleanup and removal'] },
  { Icon: Shovel, num: '05', title: 'Mulching', desc: 'Fresh mulch gives landscape beds a clean look while helping retain moisture and slow down weeds.', items: ['Bed preparation', 'Even mulch installation', 'Clean, defined bed edges'] },
  { Icon: Truck, num: '06', title: 'Debris Removal', desc: 'Reclaim your outdoor space. We clear and haul away common yard debris from seasonal work and cleanup projects.', items: ['Leaves, limbs, and brush', 'Storm and yard debris', 'Final rake and blow-off'] },
  { Icon: Warehouse, num: '07', title: 'Property Cleanups', desc: 'Give an overgrown or neglected property a fresh start with a thorough outdoor cleanup tailored to what the space needs.', items: ['Overgrowth and weed removal', 'Leaf, brush, and debris cleanup', 'Final rake, blow-off, and haul-away'] },
]

export default function Services() {
  return <main className="page-wrapper">
    <section className="page-hero"><p className="section-label light">Our services</p><h1>Care for every<br /><em>corner of your yard.</em></h1><p>Reliable outdoor maintenance for residential and commercial properties within about 60 miles.</p></section>
    <section className="section"><div className="section-inner services-list">
      {services.map(({ Icon, num, title, desc, items }, i) => <FadeIn key={title} delay={(i % 2) * 80}><article className="service-detail">
        <span className="service-num">{num}</span><div className="service-icon"><Icon size={27} /></div><h2>{title}</h2><p>{desc}</p>
        <ul>{items.map(item => <li key={item}><Check size={16} /> {item}</li>)}</ul>
      </article></FadeIn>)}
    </div></section>
    <section className="cta-banner"><div><p className="section-label">Free estimates</p><h2>Not sure what your yard needs?</h2><p>Give us a call. We’ll talk through the job and build a plan that fits.</p></div><Link to="/contact" className="btn-dark">Get in touch <ArrowRight size={17} /></Link></section>
  </main>
}
