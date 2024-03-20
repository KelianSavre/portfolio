import "../stylesheets/header/header.css";
import Logo from "../images/Logo.webp";
import React, { useState } from "react";


export default function Header() {
  const [MobileNav, setMobileNav] = useState(false);

  const NavOpen = () => {
    setMobileNav(!MobileNav);
  };

  return (
    <>
      <nav className="navbar">
          {MobileNav === true && (
            <div className={`mobile-nav, ${MobileNav ? "active" : ""}`}>
              <div className="mobile-nav-container">
                <button className="navbar-mobile-exit-button" onClick={NavOpen}>
                  <i className="fa-solid fa-x"></i>
                </button>
                <ul>
                  <li>
                    <a className="navbar-anchor" href="#anchor-introduction" onClick={NavOpen}>
                      Présentation
                    </a>
                  </li>
                  <li>
                    <a className="navbar-anchor" href="#anchor-skills" onClick={NavOpen}>
                      Compétences
                    </a>
                  </li>
                  <li>
                    <a className="navbar-anchor" href="#anchor-projects" onClick={NavOpen}>
                      Projets
                    </a>
                  </li>
                  <button className="navbar-contact">Contactez-moi</button>
                </ul>
              </div>
            </div>
          )}
        <div className="navbar-content">
          {MobileNav === false && (
            <>
              <img className="navbar-logo" src={Logo} alt="Logo" />
              <ul className="navbar-desktop">
                <li>
                  <a className="navbar-anchor" href="#anchor-introduction">
                    Présentation
                  </a>
                </li>
                <li>
                  <a className="navbar-anchor" href="#anchor-skills">
                    Compétences
                  </a>
                </li>
                <li>
                  <a className="navbar-anchor" href="#anchor-projects">
                    Projets
                  </a>
                </li>
                <button className="navbar-contact">Contactez-moi</button>
              </ul>
              <button className="navbar-mobile-button" onClick={NavOpen}>
                <i className="fa-solid fa-bars"></i>
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
