import { useState } from 'react'

const services = [
  ['01', 'WEBSITE DEVELOPMENT', 'Modern, responsive websites designed around your business goals.'],
  ['02', 'E-COMMERCE', 'Online stores with product management, payments and a considered shopping experience.'],
  ['03', 'WEB APPLICATIONS', 'Custom web applications shaped around the way your business works.'],
  ['04', 'MOBILE APPLICATIONS', 'Useful, intuitive mobile experiences for Android and iOS.'],
  ['05', 'UI/UX DESIGN', 'Clear, thoughtful interfaces built to make every interaction feel natural.'],
  ['06', 'SEO & PERFORMANCE OPTIMIZATION', 'Technical foundations that improve speed, search visibility and usability.'],
  ['07', 'WEBSITE MAINTENANCE', 'Ongoing updates and practical support to keep your website current and dependable.'],
]

const projects = [
  {
    number: '01',
    title: 'WEBNEX BUSINESS WEBSITE',
    category: 'Business website',
    description: 'A confident digital home for a growing local business.',
    visual: 'business',
    size: 'project--large',
  },
  {
    number: '02',
    title: 'FASHION E-COMMERCE',
    category: 'E-commerce',
    description: 'A clean storefront that lets the collection do the talking.',
    visual: 'fashion',
    size: 'project--small',
  },
  {
    number: '03',
    title: 'RESTAURANT WEBSITE',
    category: 'Hospitality',
    description: 'A warm, direct path from first impression to the table.',
    visual: 'restaurant',
    size: 'project--small',
  },
  {
    number: '04',
    title: 'PHARMACY WEBSITE',
    category: 'Healthcare / Business',
    description: 'A helpful, accessible experience for a neighborhood pharmacy.',
    visual: 'pharmacy',
    size: 'project--large',
  },
  {
    number: '05',
    title: 'CUSTOM WEB APPLICATION',
    category: 'Web application',
    description: 'A clear interface for a complex, everyday workflow.',
    visual: 'application',
    size: 'project--full',
  },
]

const steps = [
  ['01', 'DISCOVER', 'We get to know the business, its audience and what success should look like.'],
  ['02', 'DESIGN', 'We set a visual direction and map out the experience before development begins.'],
  ['03', 'BUILD', 'We develop a responsive, reliable product with the right tools for the job.'],
  ['04', 'TEST', 'We check the details across devices, browsers, performance and functionality.'],
  ['05', 'LAUNCH', 'We make the handover clear and stay available for what comes next.'],
]

function SectionIntro({ index, title, accent, description, id }) {
  return (
    <div className="section-intro">
      <div className="section-intro__title">
        <p className="eyebrow">{index} / WEBNEX TECHNOLOGIES</p>
        <h2 id={id}>
          {title}
          {accent && (
            <>
              <br />
              <span>{accent}</span>
            </>
          )}
        </h2>
      </div>
      {description && <p className="section-intro__description">{description}</p>}
    </div>
  )
}

export function About() {
  return (
    <section className="section about container" data-reveal id="about" aria-labelledby="about-title">
      <SectionIntro index="01" title={<>WE BUILD<br />FOR THE</>} accent="DIGITAL WORLD." id="about-title" />
      <div className="about__body">
        <p className="about__lead">
          Webnex Technologies is a digital technology company focused on
          building modern websites, e-commerce platforms and software
          solutions for businesses and organizations.
        </p>
        <div className="about__detail">
          <p>
            We bring clean design, performance, usability and modern
            technology together to make digital tools feel useful from day
            one—and stay useful as your business grows.
          </p>
          <a className="text-link" href="#services">
            WHAT WE DO <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="about__rule">
        <span>DESIGNED WITH INTENT</span>
        <span>BUILT TO MOVE BUSINESS FORWARD</span>
      </div>
    </section>
  )
}

export function Services() {
  return (
    <section className="section services" data-reveal id="services" aria-labelledby="services-title">
      <div className="container">
        <SectionIntro
          index="02"
          title="WHAT"
          accent="WE DO."
          id="services-title"
          description="Practical digital services, considered from the first conversation to the final detail."
        />
        <div className="services__list">
          {services.map(([number, title, description]) => (
            <article className="service" key={number}>
              <span className="service__number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="service__arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectPreview({ visual, number }) {
  return (
    <div className={`project__preview project__preview--${visual}`} aria-hidden="true">
      <div className="preview__browser">
        <div className="preview__bar">
          <span /><span /><span />
          <i>webnex.studio / project-{number}</i>
        </div>
        <div className="preview__page">
          <div className="preview__nav"><b>W<span>.</span></b><i /><i /><i /></div>
          <div className="preview__content">
            <div className="preview__copy">
              <span className="preview__eyebrow" />
              <span className="preview__heading" />
              <span className="preview__heading preview__heading--short" />
              <span className="preview__paragraph" />
              <span className="preview__button" />
            </div>
            <div className="preview__image">
              <span className="preview__image-shape" />
              <span className="preview__image-detail" />
            </div>
          </div>
          <div className="preview__footer"><i /><i /><i /></div>
        </div>
      </div>
    </div>
  )
}

export function Portfolio() {
  return (
    <section className="section portfolio container" data-reveal id="work" aria-labelledby="work-title">
      <SectionIntro
        index="03"
        title="SELECTED"
        accent="WORK."
        id="work-title"
        description="A few directions for the kinds of businesses and digital products we love to build."
      />
      <div className="portfolio__grid">
        {projects.map((project) => (
          <article className={`project ${project.size}`} key={project.number}>
            <ProjectPreview visual={project.visual} number={project.number} />
            <div className="project__meta">
              <div>
                <p className="project__category">{project.number} / {project.category}</p>
                <h3>{project.title}</h3>
                <p className="project__description">{project.description}</p>
              </div>
              <a href="#contact" aria-label={`Discuss a project like ${project.title}`}>
                VIEW PROJECT <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="portfolio__note">PROJECT PREVIEWS ARE SAMPLE CONCEPTS. YOUR BUSINESS, YOUR BRIEF, YOUR NEXT BUILD.</p>
    </section>
  )
}

export function Process() {
  return (
    <section className="section process" data-reveal id="process" aria-labelledby="process-title">
      <div className="container">
        <SectionIntro
          index="04"
          title="FROM IDEA"
          accent="TO LAUNCH."
          id="process-title"
          description="A straightforward process, with you involved at every step."
        />
        <div className="process__steps">
          {steps.map(([number, title, description]) => (
            <article className="process-step" key={number}>
              <span className="process-step__number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const reasons = [
  'Clean design',
  'Fast performance',
  'Responsive development',
  'Business-focused solutions',
  'Modern technology',
  'Reliable support',
]

export function WhyWebnex() {
  return (
    <section className="section why container" data-reveal aria-labelledby="why-title">
      <SectionIntro index="05" title="WHY" accent="WEBNEX?" id="why-title" />
      <div className="why__content">
        <p>
          Good digital work should make the next step clearer—for your team
          and for the people you serve. We keep the technology considered,
          the communication direct and the result focused on your goals.
        </p>
        <ul>
          {reasons.map((reason) => <li key={reason}>{reason}</li>)}
        </ul>
      </div>
    </section>
  )
}

function ContactDetails() {
  return (
    <aside className="contact__details" aria-label="Webnex contact details">
      <p className="eyebrow">WEBNEX TECHNOLOGIES</p>
      <p>Ghana</p>
      <dl>
        <div><dt>EMAIL</dt><dd>[ADD EMAIL]</dd></div>
        <div><dt>PHONE</dt><dd>[ADD PHONE]</dd></div>
      </dl>
      <div className="contact__socials">
        <p className="eyebrow">FIND US</p>
        <div>
          {['Instagram', 'Facebook', 'TikTok', 'LinkedIn', 'WhatsApp'].map((name) => (
            <a href="#contact" key={name}>{name}</a>
          ))}
        </div>
      </div>
    </aside>
  )
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section contact container" data-reveal id="contact" aria-labelledby="contact-title">
      <SectionIntro index="06" title="LET’S" accent="WORK TOGETHER." id="contact-title" />
      <div className="contact__grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <p className="eyebrow">TELL US A LITTLE ABOUT YOUR PROJECT</p>
          <div className="contact-form__fields">
            <label>
              <span>NAME *</span>
              <input name="name" autoComplete="name" required />
            </label>
            <label>
              <span>EMAIL *</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              <span>PHONE</span>
              <input name="phone" type="tel" autoComplete="tel" />
            </label>
            <label>
              <span>COMPANY</span>
              <input name="company" autoComplete="organization" />
            </label>
            <label>
              <span>PROJECT TYPE</span>
              <select name="projectType" defaultValue="">
                <option value="" disabled>Select a service</option>
                {['Website', 'E-commerce', 'Web application', 'Mobile application', 'UI/UX design', 'Other'].map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </label>
            <label>
              <span>BUDGET RANGE</span>
              <select name="budget" defaultValue="">
                <option value="" disabled>Select a range</option>
                {['Let’s discuss', 'Under GHS 5,000', 'GHS 5,000–15,000', 'GHS 15,000–30,000', 'GHS 30,000+'].map((range) => (
                  <option key={range}>{range}</option>
                ))}
              </select>
            </label>
            <label className="contact-form__wide">
              <span>PROJECT DETAILS *</span>
              <textarea name="details" rows="4" required />
            </label>
          </div>
          <button className="button button--primary" type="submit">
            SEND PROJECT REQUEST <span aria-hidden="true">↗</span>
          </button>
          <p className="contact-form__note" aria-live="polite">
            {submitted
              ? 'Thanks for sharing your brief. Connect a form service to enable delivery.'
              : 'This form is a front-end preview and is not connected to a submission service yet.'}
          </p>
        </form>
        <ContactDetails />
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div>
            <a className="wordmark" href="#home">
              <span>WEBNEX</span>
              <small>TECHNOLOGIES</small>
            </a>
            <p>Digital experiences built for modern businesses.</p>
          </div>
          <div className="footer__links">
            <div>
              <p className="eyebrow">EXPLORE</p>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#work">Work</a>
              <a href="#process">Process</a>
            </div>
            <div>
              <p className="eyebrow">SAY HELLO</p>
              <a href="#contact">Contact</a>
              <a href="#contact">Instagram</a>
              <a href="#contact">Facebook</a>
              <a href="#contact">TikTok</a>
              <a href="#contact">LinkedIn</a>
              <a href="#contact">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 WEBNEX TECHNOLOGIES. ALL RIGHTS RESERVED.</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </div>
    </footer>
  )
}
