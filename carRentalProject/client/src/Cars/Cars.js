import React from "react";
import Keys from "../images/cars/keys.jpg";
import "./Cars.css";

function Cars() {
  return (
    <>
      <div className="container">
        <div className="row pt-3 pb-3 ">
          <div className="col-sm">
            <div className="card text-white mt-4 mb-3" id="card1">
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <div className="link d-flex flex-row">
                  <h5 className="card-title">G Class</h5>
                  <div className="ms-auto">
                    <a href="/reservation" class="card-link btn btn-warning">
                      Book Car
                    </a>
                  </div>
                </div>

                <p className="card-text">
                <i class="fa-solid fa-people-group d-inline"></i>
                <span className="d-inline ms-1">5</span>
                <i class="fa-solid fa-snowflake d-inline ms-3"></i>
                <span className="d-inline ms-1">Air Conditioning</span>
                <i class="fa-solid fa-gas-pump d-inline ms-3"></i>
                <span className="d-inline ms-1">Petrol</span>
                <i class="fa-solid fa-dollar-sign d-inline ms-3 fa-1x"></i>
                <span className="d-inline ms-1">1000</span>
                </p>
                {/* <p class="card-text">Last updated 3 mins ago</p> */}
              </div>
            </div>
          </div>

          <div className="col-sm">
            <div className="card text-white mt-4 mb-3" id="card2">
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <div className="link d-flex flex-row">
                  <h5 className="card-title">McLaren</h5>
                  <div className="ms-auto">
                    <a href="/reservation" class="card-link btn btn-warning">
                      Book Car
                    </a>
                  </div>
                </div>

                <p className="card-text">
                <i class="fa-solid fa-people-group d-inline"></i>
                <span className="d-inline ms-1">2</span>
                <i class="fa-solid fa-snowflake d-inline ms-3"></i>
                <span className="d-inline ms-1">Air Conditioning</span>
                <i class="fa-solid fa-gas-pump d-inline ms-3"></i>
                <span className="d-inline ms-1">Petrol</span>
                <i class="fa-solid fa-dollar-sign d-inline ms-3 fa-1x"></i>
                <span className="d-inline ms-1">600</span>
                </p>
                {/* <p class="card-text">Last updated 3 mins ago</p> */}
              </div>
            </div>
          </div>

          <div className="col-sm">
            <div className="card text-white mt-4 mb-3" id="card3">
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <div className="link d-flex flex-row">
                  <h5 className="card-title">Audi Q3</h5>
                  <div className="ms-auto">
                    <a href="/reservation" class="card-link btn btn-warning">
                      Book Car
                    </a>
                  </div>
                </div>

                <p className="card-text">
                <i class="fa-solid fa-people-group d-inline"></i>
                <span className="d-inline ms-1">5</span>
                <i class="fa-solid fa-snowflake d-inline ms-3"></i>
                <span className="d-inline ms-1">Air Conditioning</span>
                <i class="fa-solid fa-gas-pump d-inline ms-3"></i>
                <span className="d-inline ms-1">Petrol</span>
                <i class="fa-solid fa-dollar-sign d-inline ms-3 fa-1x"></i>
                <span className="d-inline ms-1">450</span>
                </p>
                {/* <p class="card-text">Last updated 3 mins ago</p> */}
              </div>
            </div>
          </div>

          <div className="col-sm">
            <div className="card  text-white mt-4 mb-3" id="card4">
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <div className="link d-flex flex-row">
                  <h5 className="card-title">Hummer H1</h5>
                  <div className="ms-auto">
                    <a href="/reservation" class="card-link btn btn-warning">
                      Book Car
                    </a>
                  </div>
                </div>

                <p className="card-text">
                  <i class="fa-solid fa-people-group d-inline"></i>
                <span className="d-inline ms-1">5</span>
                <i class="fa-solid fa-snowflake d-inline ms-3"></i>
                <span className="d-inline ms-1">Air Conditioning</span>
                <i class="fa-solid fa-gas-pump d-inline ms-3"></i>
                <span className="d-inline ms-1">Petrol</span>
                <i class="fa-solid fa-dollar-sign d-inline ms-3 fa-1x"></i>
                <span className="d-inline ms-1">750</span>
                </p>
                {/* <p class="card-text">Last updated 3 mins ago</p> */}
              </div>
            </div>
          </div>

          <div className="col-sm">
            <div className="card  text-white mt-4 mb-3" id="card5">
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <div className="link d-flex flex-row">
                  <h5 className="card-title">1969 Ford Mustang</h5>
                  <div className="ms-auto">
                    <a href="/reservation" class="card-link btn btn-warning">
                      Book Car
                    </a>
                  </div>
                </div>

                <p className="card-text">
                  <i class="fa-solid fa-people-group d-inline"></i>
                <span className="d-inline ms-1">5</span>
                <i class="fa-solid fa-snowflake d-inline ms-3"></i>
                <span className="d-inline ms-1">Air Conditioning</span>
                <i class="fa-solid fa-gas-pump d-inline ms-3"></i>
                <span className="d-inline ms-1">Petrol</span>
                <i class="fa-solid fa-dollar-sign d-inline ms-3 fa-1x"></i>
                <span className="d-inline ms-1">800</span>
                </p>
                {/* <p class="card-text">Last updated 3 mins ago</p> */}
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card  text-white mt-4 mb-3" id="card6">
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <div className="link d-flex flex-row">
                  <h5 className="card-title">BMW i8 2019</h5>
                  <div className="ms-auto">
                    <a href="/reservation" class="card-link btn btn-warning">
                      Book Car
                    </a>
                  </div>
                </div>

                <p className="card-text">
                  <i class="fa-solid fa-people-group d-inline"></i>
                <span className="d-inline ms-1">2</span>
                <i class="fa-solid fa-snowflake d-inline ms-3"></i>
                <span className="d-inline ms-1">Air Conditioning</span>
                <i class="fa-solid fa-gas-pump d-inline ms-3"></i>
                <span className="d-inline ms-1">Petrol</span>
                <i class="fa-solid fa-dollar-sign d-inline ms-3 fa-1x"></i>
                <span className="d-inline ms-1">900</span>
                </p>
                {/* <p class="card-text">Last updated 3 mins ago</p> */}
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-lg-8 col-md-6 col-sm-12">
            <h3 className="fs-2 text-center text-capitalize">
              Renting policies
            </h3>
            <ul className="list-group">
              <li className="list-group-item">
                To be 25 years old (if you’re under 25, you may be required to
                pay a young driver’s fee).
              </li>
              <li className="list-group-item">
                A valid driver's license with a photo with expiration date later
                than the drop-off date.{" "}
              </li>
              <li className="list-group-item">
                A photo ID (For example: a driver’s license or passport).
              </li>
              <li className="list-group-item">
                Credit Card, Debit Card or Cash payment.
              </li>
              <li className="list-group-item">
                Any damage that is made to the car is full responsibilty of the
                renter and will require reimbursment for the damage.
              </li>
              <li className="list-group-item">
                Number of contact is required regarding the rented car.
              </li>
              <li className="list-group-item">
                The contract starts at the moment you acquire the car and lasts
                a minimum of 24 hours.{" "}
              </li>
              <li className="list-group-item">
                There is a 30 minute margin of lateness, if that is exceeded
                there is a lateness fee.{" "}
              </li>
              <li className="list-group-item">
                Incompliance of these policies will result to a contract end and
                legal matters will be taken into account.
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-5 pt-5">
            <img src={Keys} alt="" className="img-fluid pt-4" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cars;
