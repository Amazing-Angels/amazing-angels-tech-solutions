import {
  ArrowRight, ArrowUpRight, Code2, Smartphone, Layers3, Megaphone,
  CheckCircle2, Sparkles, ShieldCheck, Zap, Menu, Globe2, Mail,
  MonitorSmartphone, Workflow, Search, ChartNoAxesCombined
} from "lucide-react";

const services = [
  { icon: Code2, number: "01", title: "Web Development", desc: "Fast, responsive websites and web experiences designed to turn visitors into customers.", tags: ["Business websites", "E-commerce", "Web applications"] },
  { icon: Smartphone, number: "02", title: "App Development", desc: "Thoughtful mobile experiences that help your customers connect with your business anywhere.", tags: ["Android & iOS", "UI/UX design", "App maintenance"] },
  { icon: Layers3, number: "03", title: "Software Solutions", desc: "Practical software built around your workflows, goals and the way your business operates.", tags: ["Custom software", "Automation", "Business tools"] },
  { icon: Megaphone, number: "04", title: "Digital Marketing", desc: "Build visibility, reach the right audience and create a stronger digital presence.", tags: ["SEO", "Social media", "Digital campaigns"] }
];

const process = [
  ["01", "Discover", "We understand your business, audience and what success should look like."],
  ["02", "Plan", "We shape the right solution, priorities, scope and delivery roadmap."],
  ["03", "Create", "We design, develop and refine with clear communication along the way."],
  ["04", "Launch & grow", "We help you launch confidently and identify what to improve next."]
];

export default function Home() {
  return (
    <main>
      <div className="topline"><div className="container topline-inner"><span><span className="status-dot" /> Digital solutions for ambitious businesses</span><a href="#contact">Let’s talk <ArrowUpRight size={13}/></a></div></div>
      <header className="header">
        <div className="container nav">
          <a className="brand" href="#" aria-label="Amazing Angels Tech Solutions home">
            <span className="brand-mark"><Sparkles size={22}/></span>
            <span className="brand-name">AMAZING ANGELS<span>TECH SOLUTIONS</span></span>
          </a>
          <nav className="desktop-nav">
            <a href="#services">Services</a><a href="#about">About</a><a href="#process">Our process</a><a href="#contact">Contact</a>
          </nav>
          <a className="nav-cta" href="#contact">Start a project <ArrowUpRight size={16}/></a>
          <a className="mobile-menu" href="#services" aria-label="Jump to services"><Menu/></a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-grid" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line"/> YOUR DIGITAL GROWTH PARTNER</div>
            <h1>Ideas deserve<br/> <span className="blue-text">brilliant</span> digital<br/>experiences.</h1>
            <p className="hero-lead">We help businesses move forward with purposeful websites, mobile apps, custom software and digital marketing.</p>
            <div className="hero-actions"><a className="button button-primary" href="#contact">Let’s build something <ArrowRight size={17}/></a><a className="text-link" href="#services">Explore our services <ArrowUpRight size={16}/></a></div>
            <div className="hero-proof"><div className="proof-icon"><ShieldCheck size={18}/></div><span>Thoughtful solutions. Clear communication. A focus on outcomes.</span></div>
          </div>
          <div className="hero-art" aria-label="Abstract digital technology illustration">
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
            <div className="art-glow"/>
            <div className="glass-card main-card">
              <div className="card-top"><span className="tiny-label">DIGITAL EXPERIENCE</span><span className="live-pill"><i/> BUILDING</span></div>
              <div className="browser-dots"><i/><i/><i/></div>
              <div className="mock-heading"><span/><span/><span/></div>
              <div className="mock-content"><div className="mock-panel"><div className="mock-circle"/><div className="mock-lines"><i/><i/><i/></div></div><div className="mock-side"><i/><i/><i/><i/></div></div>
              <div className="mock-footer"><span/><span/><span/></div>
            </div>
            <div className="float-card float-code"><Code2 size={18}/><span>Clean code<br/><b>Built to scale</b></span></div>
            <div className="float-card float-growth"><ChartNoAxesCombined size={19}/><span>Digital growth<br/><b>Made purposeful</b></span></div>
            <div className="art-caption"><span className="caption-dot"/> WEB • APP • SOFTWARE • GROWTH</div>
          </div>
        </div>
        <div className="container hero-bottom"><span>WHAT WE DO</span><div/><span>Technology with purpose</span><span>Built around your goals <ArrowDownIcon/></span></div>
      </section>

      <section className="services section" id="services">
        <div className="container">
          <div className="section-head"><div><div className="eyebrow"><span className="eyebrow-line"/> OUR CAPABILITIES</div><h2>Everything you need to<br/><span className="blue-text">move forward.</span></h2></div><p>From your first digital presence to the next stage of growth, we bring the right mix of creativity and technology to the table.</p></div>
          <div className="service-grid">{services.map((s) => <article className="service-card" key={s.number}><div className="service-top"><span className="service-icon"><s.icon size={22}/></span><span className="service-number">{s.number}</span></div><h3>{s.title}</h3><p>{s.desc}</p><div className="tag-list">{s.tags.map(t=><span key={t}>{t}</span>)}</div><a href="#contact" className="card-link">Discuss this service <ArrowUpRight size={15}/></a></article>)}</div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="container about-layout">
          <div className="about-visual"><div className="about-blue-block"><div className="blue-block-orbit"/><div className="blue-block-content"><span>THE BIG PICTURE</span><strong>Make technology<br/>work for you.</strong><div className="block-rule"/></div><div className="block-grid"/></div><div className="about-note"><Globe2 size={19}/><span>Connected by technology.<br/><b>Focused on your business.</b></span></div></div>
          <div className="about-copy"><div className="eyebrow"><span className="eyebrow-line"/> ABOUT AMAZING ANGELS</div><h2>Good technology<br/>starts with <span className="blue-text">understanding.</span></h2><p className="about-lead">Amazing Angels Tech Solutions is a virtually operated digital services startup focused on helping businesses build, improve and grow their digital presence.</p><p>We believe technology should solve real problems, simplify everyday work and create meaningful experiences for the people who use it. That belief guides every project we take on.</p><div className="value-list"><div><CheckCircle2/><span><b>Business-first thinking</b><small>Solutions shaped around your goals.</small></span></div><div><CheckCircle2/><span><b>Practical, modern technology</b><small>Built with usability and future growth in mind.</small></span></div><div><CheckCircle2/><span><b>Clear collaboration</b><small>Open communication from brief to launch.</small></span></div></div><a className="text-link" href="#contact">Tell us what you’re building <ArrowUpRight size={16}/></a></div>
        </div>
      </section>

      <section className="process section" id="process">
        <div className="container">
          <div className="section-head process-head"><div><div className="eyebrow"><span className="eyebrow-line"/> HOW WE WORK</div><h2>A clear path from<br/><span className="blue-text">idea to impact.</span></h2></div><p>Great outcomes come from a shared understanding and a process that keeps everyone moving in the same direction.</p></div>
          <div className="process-grid">{process.map(([n,t,d])=><div className="process-item" key={n}><span className="process-number">{n}</span><div className="process-line"/><h3>{t}</h3><p>{d}</p></div>)}</div>
        </div>
      </section>

      <section className="cta-band"><div className="container cta-inner"><div><div className="eyebrow light"><span className="eyebrow-line"/> HAVE A PROJECT IN MIND?</div><h2>Let’s turn your next<br/>big idea into reality.</h2><p>Tell us where you want to go. We’ll help you explore what’s possible.</p></div><a className="button button-white" href="#contact">Start a conversation <ArrowUpRight size={17}/></a><div className="cta-orb"/></div></section>

      <section className="contact section" id="contact">
        <div className="container contact-layout">
          <div className="contact-copy"><div className="eyebrow"><span className="eyebrow-line"/> GET IN TOUCH</div><h2>Have a challenge?<br/><span className="blue-text">Let’s talk.</span></h2><p>Share a little about your idea, business or project. We’ll take it from there.</p><div className="contact-detail"><span className="contact-icon"><Mail size={19}/></span><div><small>EMAIL</small><b>Use the enquiry form</b><span>We’ll respond using the contact details you provide.</span></div></div><div className="contact-detail"><span className="contact-icon"><Globe2 size={19}/></span><div><small>OPERATING MODEL</small><b>Virtual-first</b><span>Working remotely with clients and collaborators.</span></div></div></div>
          <form className="contact-form" action="https://formsubmit.co/" method="POST">
            <div className="form-top"><span>PROJECT ENQUIRY</span><span className="form-step">LET’S CONNECT <ArrowUpRight size={14}/></span></div>
            <label>Your name<input name="name" placeholder="Enter your name" required/></label>
            <div className="form-row"><label>Email address<input name="email" type="email" placeholder="you@company.com" required/></label><label>Phone (optional)<input name="phone" type="tel" placeholder="+91"/></label></div>
            <label>What do you need help with?<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Web Development</option><option>App Development</option><option>Software Solutions</option><option>Digital Marketing</option><option>Something else</option></select></label>
            <label>Tell us about your project<textarea name="message" rows={4} placeholder="A short description of your idea or requirement..." required/></label>
            <p className="form-note">Before launch, connect this form to your business email or preferred form service. Setup instructions are included in the project README.</p>
            <button className="button button-primary submit-button" type="button" onClick={() => alert("The contact form is a launch-ready layout. Before publishing, connect it to your business email or a form service. See README.md for setup steps.")}>Send enquiry <ArrowRight size={17}/></button>
          </form>
        </div>
      </section>

      <footer className="footer"><div className="container footer-main"><a className="brand footer-brand" href="#"><span className="brand-mark"><Sparkles size={22}/></span><span className="brand-name">AMAZING ANGELS<span>TECH SOLUTIONS</span></span></a><p>Turning ideas into digital reality.</p><a href="#top" className="back-top">BACK TO TOP ↑</a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Amazing Angels Tech Solutions. All rights reserved.</span><span>Web • Apps • Software • Digital Growth</span></div></footer>
    </main>
  );
}

function ArrowDownIcon() { return <span aria-hidden="true">↓</span>; }
