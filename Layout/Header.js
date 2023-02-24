import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const router = useRouter();

  const path = router.pathname.replace("/", "");

  return (
    <div>
      <header id="header" className={path ? "header-top" : ""}>
        <div className="container">
          <h1>
            <Link href="/" className="text-decoration-none">
              {path ? "MS" : "Murli Manohar Soni"}
            </Link>
          </h1>

          <h2>
            I'm a passionate <span>Software Developer</span> from Jaipur,
            Rajasthan.
          </h2>

          <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link className="nav-link" href="/">
                  Home
                </Link>
                <Link className="nav-link" href="/about">
                  About
                </Link>
                <Link className="nav-link" href="/resume">
                  Resume
                </Link>
                <Link className="nav-link" href="/service">
                  Services
                </Link>
                <Link className="nav-link" href="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <div className="social-links">
            <Link
              href="https://www.linkedin.com/in/murli-manohar-soni-b6168a11a/"
              className="linkedin text-decoration-none"
            >
              <i className="fa fa-linkedin"></i>
            </Link>
            <Link href="#" className="facebook text-decoration-none">
              <i className="fa fa-facebook"></i>
            </Link>
            <Link href="#" className="instagram text-decoration-none">
              <i className="fa fa-instagram"></i>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
