import { useState } from 'react'

const links = [
  ['ABOUT', '#about'],
  ['SERVICES', '#services'],
  ['WORK', '#work'],
  ['PROCESS', '#process'],
  ['CONTACT', '#contact'],
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Webnex Technologies home">
          <span>WEBNEX</span>
          <small>TECHNOLOGIES</small>
        </a>
        <button
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <div
          id="primary-navigation"
          className={`nav__content${menuOpen ? ' is-open' : ''}`}
        >
          <a className="nav__home" href="#home" onClick={closeMenu}>
            HOME
          </a>
          <div className="nav__links">
            {links.map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
          </div>
          <a className="nav__cta" href="#contact" onClick={closeMenu}>
            START A PROJECT <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
