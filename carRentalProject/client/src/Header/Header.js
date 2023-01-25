import logo from "../images/Logo.png";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {

  return (
    <>
    
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              height="35px"
              alt="Logo"
              className="d-inline-block align-text-top"
            />
            Washington&nbsp;Rent&nbsp;A&nbsp;Car
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerCars"
            aria-controls="navbarTogglerCars"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerCars">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item" >
                {/* <a className="nav-link" activeclassname='active' aria-current="page" href="/">
                  Home
                </a> */}
                <NavLink className="nav-link" to="/" activeclassname="active" >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/cars">
                  Cars
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/reservation">
                  Reservation
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
