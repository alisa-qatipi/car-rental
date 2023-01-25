import React from "react";
import "./About.css";
import hand from "../images/about/hand.jpg";
import driving from "../images/about/driving.jpg";
import maserati from "../images/about/maserati_article.jpg";
import audiRs4 from "../images/about/audi_rs4.jpg";
import caterham from "../images/about/caterham.jpg";
import delmarinaLopez from "../images/about/delmarinaLopez.jpg";
import pierrePerson from "../images/about/pierrePerson.jpg";
import williamShatner from "../images/about/williamShatner.jpg";
// import banner2 from './images/about/banner2.jpg';

function About() {
  return (
    <>
      <div className="banner container-fluid p-0">
        <div className="container">
          <div className="row pt-5">
            <h1 className="text-white pt-5 text-center">Who we are</h1>
          </div>
        </div>
      </div>

      <div className="container d-flex flex-wrap align-items-center justify-content-center">
        {/* REVIEWS */}
        <div className="row">
          <div className="box">
            <div className="body">
              <div className="imgContainer">
                <img src={delmarinaLopez} />
              </div>
              <div className="content d-flex flex-column align-items-center justify-content-center">
                <div>
                  <h3 className="text-white fs-5">Delmarina Lopez</h3>
                  <p className="fs-6 text-white">
                    I needed a good car for my stay in the city, Washington Rent
                    A Car gave me an affordable and fashionable option. They
                    were also understanding when I needed to extend my renting
                    period. Definitly will rent a car again when I'm back.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="box">
            <div className="body">
              <div className="imgContainer">
                <img src={pierrePerson} />
              </div>
              <div className="content d-flex flex-column align-items-center justify-content-center">
                <div>
                  <h3 className="text-white fs-5">Pierre Person</h3>
                  <p className="fs-6 text-white">
                    Booked a hire car via the App. An easy procedure with a
                    great selection of cars and companies matched by competitive
                    prices . The added fully covered insurance again at prices
                    cheaper than the hire companies is a bonus and allows worry
                    free motoring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="box">
            <div className="body">
              <div className="imgContainer">
                <img src={williamShatner} />
              </div>
              <div className="content d-flex flex-column align-items-center justify-content-center">
                <div>
                  <h3 className="text-white fs-5">William Shatner</h3>
                  <p className="fs-6 text-white">
                    A good selection of cars is always available and the booking
                    process is easy. It’s also reassuring to know that free
                    cancellation is available if necessary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* artikuj */}
      <div className="container-fluid">
        <div className="container">
          <div className="row pt-2 pb-2 greyBackground d-flex flex-wrap">
            <div className="col-lg-6 col-sm-12">
              <img className="aboutImage" src={maserati} />
            </div>
            <div className="col-lg-6 col-sm-12 pt-5">
              <div>
                <h3>2023 Maserati GranTurismo revealed</h3>
              </div>
              <div>
                <p>
                  New Maserati GranTurismo gets two V6 engine options plus a
                  fully electric version that produces 750bhp. Here’s everything
                  you need to know, including the price, specs and release
                  date...
                </p>
                <p>On sale: Spring 2023 | Price from: £125,000 (est)</p>
              </div>
              <div>
                <a
                  className="btn btn-warning"
                  href="https://www.whatcar.com/news/2023-maserati-granturismo-revealed/n25043"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="row pt-2 pb-2">
            <div className="col-lg-6 col-sm-12 pt-5">
              <div>
                <h3>2022 Audi RS4 Avant Competition review</h3>
              </div>
              <div>
                <p>
                  With a focus on the track, the limited edition Audi RS4 Avant
                  Competition is faster and handles better than the normal RS4.
                  But should you snap one up or stick to the standard car?...
                </p>
                <p>On sale Now | Price from £84,600</p>
              </div>
              <div>
                <a
                  className="btn btn-warning"
                  href="https://www.whatcar.com/news/2022-audi-rs4-avant-competition-review/n25031"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <img className="aboutImage" src={audiRs4} />
            </div>
          </div>
          <div className="row pt-2 pb-2 greyBackground">
            <div className="col-lg-6 col-sm-12">
              <img src={caterham} className="pb-2 aboutImage" />
            </div>
            <div className="col-lg-6 col-sm-12 pt-5">
              <div>
                <h3>Revealed: Every brand's most popular car</h3>
              </div>
              <div>
                <p>
                  What are the most popular cars with What Car? readers? Here's
                  every brand's number one – and some of them might surprise
                  you...
                </p>
                <p>
                  If it wasn’t for the Caterham Seven’s LED headlights and brake
                  lights, it could easily be mistaken for something from the
                  1950s. That’s because it’s remained largely the same since it
                  first appeared as the Lotus Seven in 1957.
                </p>
              </div>
              <div>
                <a
                  className="btn btn-warning"
                  href="https://www.whatcar.com/news/revealed-every-brands-most-popular-car/n25015#10"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
