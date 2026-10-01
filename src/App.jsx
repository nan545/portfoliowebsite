import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import {
  About,
  Services,
  Portfolio,
  Process,
  WhyWebnex,
  Contact,
  Footer,
} from './components/Sections'
import './App.css'

function App() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    document.documentElement.classList.add('has-js')
    const sections = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          currentObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('has-js')
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <WhyWebnex />
        <section className="final-cta" data-reveal aria-labelledby="cta-title">
          <div className="container final-cta__inner">
            <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
            <h2 id="cta-title">
              HAVE A PROJECT
              <br />
              <span>IN MIND?</span>
            </h2>
            <p>Let’s turn your idea into a digital experience that works.</p>
            <div className="button-row">
              <a className="button button--primary" href="#contact">
                START A PROJECT <span aria-hidden="true">↗</span>
              </a>
              <a className="button button--text" href="#contact">
                CONTACT WEBNEX
              </a>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
