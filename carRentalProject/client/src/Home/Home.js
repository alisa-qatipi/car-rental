import React from "react";
// import "./Home.css";
import "./Home.scss";
import fleet1 from "../images/homepage/fleet1.jpg";
import mustang from '../images/cars/mustang.jpg';
import hummer from '../images/cars/hummer.jpg';
function Home() {
  return (
    <>
      <div className="container-fluid text-center text-white" id="startBanner">
        <h3>The definition of a royal ride</h3>
        <h1>Rent your car Today!</h1>

        <a
          id="btnBanner"
          href="/cars"
          className="btn btn-warning text-white rounded-pill mt-3"
        >
          <h5 className="d-inline">Rent Car Now</h5>
          {/* <FontAwesomeIcon
            icon={faHandPointRight}
            className="ms-3 d-inline fa-1x"
          /> */}
          <i class="fa-solid fa-hand-point-right ms-2 d-inline fa-1x"></i>
        </a>
      </div>
      <div className="container">
        <h2 className="text-center mt-5 mb-3">
          WITH SO MANY OPTIONS OUT THERE, WHY US?
        </h2>
        <h4 className="text-center mb-5">
          This is why we are your best option
        </h4>
        <div className="row gy-5">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="bg-warning rounded p-4 benefits">
              <i class="fa-solid fa-money-bill-1 d-inline fa-2x"></i>
              <h4 className="d-inline ms-3">SPECIAL PRICES</h4>
              <p className="mt-3 fs-5">
                Our services guarantee you the least-costly price available. Our
                company has ranked first in the affordability grade for the last
                5 years, and we focus on providing the very best for our
                customers.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="bg-warning rounded p-4 benefits">
              <i class="fa-solid fa-shield-halved d-inline fa-2x"></i>
              <h4 className="d-inline ms-3">SAFEST OPTION</h4>
              <p className="mt-3 fs-5">
                By using our service you are doing yourself a favour. With our
                vehicles you won't have to worry about safety at any time.
                Safety is our number one priority on and off the road.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="bg-warning rounded p-4 benefits">
              {/* <FontAwesomeIcon icon={faClock} className="d-inline fa-2x" /> */}
              <i class="fa-solid fa-clock d-inline fa-2x"></i>
              <h4 className="d-inline ms-3">TIME EFFICIENT</h4>
              <p className="mt-3 fs-5">
                Easy and time-efficient booking at multiple points across the
                country and online using our website platform. No excessive
                time-consuming regulations, pick your car and go.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid row mt-5 mb-5 gy-3">
        <div className="col-lg-5 col-md-6 col-sm-12 ">
          <h2>A PIECE OF OUR FLEET</h2>
          <p className="fs-4">
            Each piece of our fleet is chosen carefully with great attention to
            detail.
          </p>
          <a href="/cars" className="btn btn-lg btn-outline-warning text-black">
            Our fleet
          </a>
        </div>
        <div className="col-lg-7 col-md-6 col-sm-12">
          <div
            id="carCarusel"
            className="carousel slide rounded"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2500">
                <img src={fleet1} className="d-block w-100" alt="Fleet 1" />
              </div>
              <div className="carousel-item" data-bs-interval="2500">
                <img src={mustang} className="d-block w-100" alt="Fleet 1" />
              </div>
              <div className="carousel-item" data-bs-interval="2500">
                <img src={hummer} className="d-block w-100" alt="Fleet 1" />
              </div>
            </div>
            <button
              className="carousel-control-prev text-warning"
              type="button"
              data-bs-target="#carCarusel"
              data-bs-slide="prev"
            >
              {/* <FontAwesomeIcon
                icon={faArrowAltCircleLeft}
                className="d-inline fa-2x"
              /> */}
              <i class="fa-solid fa-circle-arrow-left d-inline fa-2x"></i>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next text-warning"
              type="button"
              data-bs-target="#carCarusel"
              data-bs-slide="next"
            >
              {/* <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                className="d-inline fa-2x"
              /> */}
              <i class="fa-solid fa-circle-arrow-right d-inline fa-2x"></i>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
