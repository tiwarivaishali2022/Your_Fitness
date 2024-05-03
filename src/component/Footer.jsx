import React from "react";
import "./CSS/style.css";
import "./CSS/utils.css";

export default function Footer() {
  return (
    <div>
      <footer className="bg-light text-center text-lg-start border-top border-bottom border-dark">
        <div className="container p-4 bg-secondary-subtle">
          <div className="me-5 d-none d-lg-block fw-bold text-danger">
            <span>Get connected with us on social networks:</span>
          </div>
          <div className="d-flex justify-content-end mb-4 ">
            <a href="#" className="text-reset me-4" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-reset me-4" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-reset me-4" aria-label="Google">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="text-reset me-4" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-reset me-4" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-reset me-4" aria-label="Github">
              <i className="fab fa-github"></i>
            </a>
          </div>

          {/* Company information */}
          <section className="mb-4 text-center">
            <h1 className="text-danger fw-bold">GOLD'S GYM</h1>
            <p>Take care of your body. It's the only place you have to live.</p>
          </section>
          {/* Quick links */}
          <div className="row">
            <div className="col-md-3 mb-md-0 mb-3">
              <h4 className="fw-bold">Products</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/about" className="text-dark text-decoration-none">
                    About
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-dark text-decoration-none hover-underline">
                    Services
                  </a>
                </li>

                <li>
                  <a href="https://react.dev/learn" className="text-dark text-decoration-none">
                    React js
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.w3schools.com/nodejs/"
                    className="text-dark text-decoration-none"
                  >
                    Node js
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h4 className="fw-bold">Useful links</h4>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://www.linkedin.com/in/vaishali-tiwari-93063a255/"
                    className="text-dark text-decoration-none"
                  >
                    Linkdin
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/tiwarivaishali2022"
                    className="text-dark text-decoration-none"
                  >
                    Github
                  </a>
                </li>

                <li>
                  <a href="https://www.google.com" className="text-dark text-decoration-none" >
                    Google
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" className="text-dark text-decoration-none">
                    You Tube
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h4 className="fw-bold">Contact</h4>
              <ul className="list-unstyled">
                <li>
                  <i className="fas fa-home me-3"></i> Uttar-Pradesh,India
                </li>
                <li>
                  <i className="fas fa-envelope me-3"></i> info@example.com
                </li>
                <li>
                  <i className="fas fa-phone me-3"></i> 9234567898
                </li>
                <li>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center p-4 bg-secondary text-light ">
          © 2024 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
}
