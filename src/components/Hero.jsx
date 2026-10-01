function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">
            <span className="eyebrow__dot" />
            WEB DEVELOPMENT <span className="eyebrow__separator">•</span> DIGITAL SOLUTIONS
          </p>
          <h1 id="hero-title">
            BUILD
            <br />
            <span className="hero__digital">DIGITAL</span>
            <br />
            <span className="hero__last">EXPERIENCES.</span>
          </h1>
          <p className="hero__intro">
            We design and build modern websites, e-commerce platforms and
            digital products that help businesses grow.
          </p>
          <div className="button-row">
            <a className="button button--primary" href="#contact">
              START A PROJECT <span aria-hidden="true">↗</span>
            </a>
            <a className="button button--text" href="#work">
              VIEW OUR WORK <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero__location">
            <span>ACCRA, GHANA</span>
            <span>BUILDING FOR WHAT’S NEXT</span>
          </div>
        </div>
        <div className="hero__visual">
          <img
            className="hero__photo"
            src="/hero-visual.svg"
            alt="A digital studio homepage and interface shown across an open browser window"
            fetchPriority="high"
          />
          <div className="hero__visual-shade" />
          <div className="hero__frame" aria-hidden="true">
            <div className="hero__frame-top">
              <span />
              <span />
              <span />
              <p>WEBNEX / STUDIO_01</p>
              <span className="hero__frame-index">01 — 05</span>
            </div>
            <div className="hero__frame-bottom">
              <span>DESIGN / DEVELOPMENT</span>
              <span>2026</span>
            </div>
          </div>
          <div className="hero__visual-caption">
            <span className="hero__caption-line" />
            <span>BUILT AROUND YOUR NEXT BIG IDEA</span>
          </div>
        </div>
      </div>
      <a className="hero__scroll" href="#about">
        SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
      </a>
    </section>
  )
}

export default Hero
