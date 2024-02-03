import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaUnsplash } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';
import resume from '../assets/MANOJ-SRINIVASA-RESUME.pdf';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const openResume = () =>{
    window.open(resume);
  }

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
          <FaUnsplash />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Work</Nav.Link>
              <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
              </Nav>
            <span className="navbar-text">
              <div className="social-icon">
              <a href="https://www.linkedin.com/in/manojsrinivasa/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
                <a href="https://www.instagram.com/_manoj.photos/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
                <a href="https://github.com/jonumhills" target="_blank" rel="noopener noreferrer"> <BsGithub /></a>
                <a href="https://unsplash.com/@jonumhills" target="_blank" rel="noopener noreferrer"><FaUnsplash /></a>
              </div>
              <HashLink to='#resume'>
                <button className="vvd" onClick={openResume}><span>Resume</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}