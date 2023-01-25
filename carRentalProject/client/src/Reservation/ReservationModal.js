import "./ReservationModal.scss";
//import "./ReservationModal.css";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import Moment from 'react-moment';
// import 'moment-timezone';
//import moment from "moment";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const ReservationModal = (props) => {
  const [openModal, setOpenModal] = useState(true);

  const handleEditReservation = (e) => {
    console.log("Reservimi", e);
    e.preventDefault();
    const editReservationData = {
      name: e.target.name.value,
      surname: e.target.surname.value,
      driversLicenceId: e.target.driversLicenceId.value,
      car: e.target.car.value,
      pickupDate: new Date(e.target.pickupDate.value),
      dropoffDate: new Date(e.target.dropoffDate.value),
    };
    console.log("dataaaa", props.data.pickupDate);

    axios
      .put(
        `http://localhost:8080/api/insertreservations/update/` + props.data._id,
        editReservationData
      )
      .then((data) => {
        console.log("data", data.data);
        // window.location.replace("/reservation");
        toast.success("Update completed!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
//blabla
  if (openModal === true) {
    return (
      <div className="modali">
        <div className="modal-contenti ps-2 pe-2">
          <div className="mx-auto d-flex flex-row me-4 ms-3">
            <h2 className="mt-2 text-left mr-auto p-2 col-8 title">
              Update your reservation
            </h2>
            <h2
              className="close mt-2 p-2 col-4 text-end"
              onClick={() => setOpenModal(false)}
            >
              X
            </h2>
          </div>
          <form
            onSubmit={handleEditReservation}
            className="needs-validation mt-3 ps-4 pe-4"
          >
            <div className="row g-3">
              <div className="col-lg-6 col-md-12">
                <label for="fName" className="form-label">
                  Name
                </label>
                {/* {console.log("name", props.data.name)} */}
                <input
                  defaultValue={props.data.name}
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                  id="name"
                  name="name"
                  // onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-lg-6 col-md-12">
                <label for="lName" className="form-label">
                  Surname
                </label>
                <input
                  defaultValue={props.data.surname}
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                  id="surname"
                  name="surname"
                  // onChange={(e) => setSurname(e.target.value)}
                />
              </div>
              <div className="col-lg-6 col-md-12">
                <label for="driverLicence" className="form-label">
                  Driver Licence ID
                </label>
                <input
                  defaultValue={props.data.driversLicenceId}
                  type="text"
                  className="form-control"
                  placeholder="Driver Licence ID"
                  aria-label="Driver Licence ID"
                  id="driversLicenceId"
                  name="driversLicenceId"
                  // onChange={(e) => setdriversLicenceId(e.target.value)}
                />
              </div>
              <div className="col-6">
                <label for="carType" className="form-label">
                  Car
                </label>
                <select
                  defaultValue={props.data.car}
                  className="form-select"
                  id="car"
                  name="car"
                  // onChange={(e) => setCar(e.target.value)}
                >
                  <option selected>Car</option>
                  <option value="G Class">G Class</option>
                  <option value="McLaren">McLaren</option>
                  <option value="Audi Q3">Audi Q3</option>
                  <option value="Hummer H1">Hummer H1</option>
                  <option value="1969 Ford Mustang">1969 Ford Mustang</option>
                  <option value="BMW i8 2019">BMW i8 2019</option>
                </select>
              </div>
              <div className="col-6">
                <label for="pickupDate" className="form-label">
                  Pick-up Date
                </label>
                {console.log("pickup", props.data.pickupDate)}
                {console.log("drop", props.data.dropoffDate)}

                <input
                  defaultValue={new Date(props.data.pickupDate).toISOString().slice(0, 10)}
                  type="date"
                  className="form-control"
                  id="pickupDate"
                  name="pickupDate"

                  // onChange={(e) => setPickupDate(e.target.value)}
                />
              </div>
              <div className="col-6">
                <label for="dropoffDate" className="form-label">
                  Drop-off Date
                </label>
                <input
                  defaultValue={new Date(props.data.dropoffDate).toISOString().slice(0, 10)}
                  type="date"
                  className="form-control"
                  name="dropoffDate"
                  id="dropoffDate"
                />
              </div>
              {/* <DatePicker
              className="form-control dataa"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
              /> */}
              {/* <DatePicker
              className="form-control dataa"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
              /> */}
              <div className="col-12 text-center">
                <button className="btn btn-lg btn-warning mt-2" type="submit">
                  Update Reservation
                </button>
                <ToastContainer />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  } else return null;
};

export default ReservationModal;
