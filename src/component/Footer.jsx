import React from "react";
import "./CSS/style.css";
import "./CSS/utils.css";
import Logo from "../assets/fitnesslogo.png";

export default function Footer() {
  return (
    <div>
      <footer className="bg-light text-center text-lg-start">
        <div className="container p-4">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div className="d-flex justify-content-center mb-4 ">
            <a href="#" className="text-reset me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-reset me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-reset me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="text-reset me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-reset me-4">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-reset me-4">
              <i className="fab fa-github"></i>
            </a>
          </div>

          {/* Company information */}
          <section className="mb-4 text-center">
            <a href="#" className="d-inline-block mb-3">
              <img src={Logo} alt="Company Logo" className="img-fluid" style={{ maxWidth: '50px' }} />
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              non nulla malesuada lectus eleifend consequat at nec augue.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae;
            </p>
          </section>
         

          {/* Quick links */}
          <div className="row">
            <div className="col-md-3 mb-md-0 mb-3">
              <h4>Products</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-dark">
                    Angular
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    React
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Vue
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Laravel
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h4>Useful links</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-dark">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Help
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h4>Contact</h4>
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
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
}
