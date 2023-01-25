import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <>
      <div className="container-fluid footerDiv">
        <footer className="text-center text-lg-start text-muted">
          <section className="p-4 border-bottom">
            <div className="container d-flex justify-content-between flex-wrap">
              <div className="row ps-4">
                <div className="d-flex d-lg-block">
                  <span>Get connected with us on social networks:</span>
                </div><br />
              </div>
              <div className="row">
                  <div className="col-12 d-flex justify-content-center">
                  <a href="" className="me-4">
                    <SocialIcon
                      url="https://www.facebook.com/"
                      style={{ height: 25, width: 25 }}
                    />
                  </a>
                  <a href="" className="me-4">
                    <SocialIcon
                      url="https://www.twitter.com/"
                      style={{ height: 25, width: 25 }}
                    />
                  </a>
                  <a href="" className="me-4">
                    <SocialIcon
                      url="https://www.instagram.com/"
                      style={{ height: 25, width: 25 }}
                    />
                  </a>
                  <a href="" className="me-4">
                    <SocialIcon
                      url="https://www.linkedin.com/"
                      style={{ height: 25, width: 25 }}
                    />
                  </a>
                  </div>
              </div>
            </div>
           
          </section>
          <section className="">
            <div className="container text-center text-md-start mt-2">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto m-1">
                  <h6 className="text-uppercase fw-bold m-1">
                    <i className="fas fa-gem me-3"></i>Washington Rent A Car
                  </h6>
                  <p>
                    Washington Car Rental is focused on attending to customer
                    needs and values. Through our multiple services we believe
                    we can accomodate and add value to your trip as you do to
                    our company. Thank you for chosing Washington Car Rental as
                    your first choice!
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto m-1">
                  <h6 className="text-uppercase fw-bold m-1">Navigate</h6>
                  <p>
                    <a href="/" className="text-reset">
                      Home
                    </a>
                  </p>
                  <p>
                    <a href="/about" className="text-reset">
                      About
                    </a>
                  </p>
                  <p>
                    <a href="/reservation" className="text-reset">
                      Reservation
                    </a>
                  </p>
                  <p>
                    <a href="/cars" className="text-reset">
                      Cars
                    </a>
                  </p>
                  <p>
                    <a href="/contact" className="text-reset">
                      Contact
                    </a>
                  </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 m-1">
                  <h6 className="text-uppercase fw-bold m-1">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3"></i>Pristina, Kosovo
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    washington@rent.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3"></i> +12345678
                  </p>
                  <p>
                    <i className="fas fa-print me-3"></i> +12345678
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="text-center p-2">
            © 2022 Copyright:{" "}
            <span className="text-reset fw-bold">Washington Rent a Car</span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
