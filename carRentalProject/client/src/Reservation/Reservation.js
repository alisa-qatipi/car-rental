import React from "react";
import "./Reservation.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { render } from "@testing-library/react";
import ReservationModal from "./ReservationModal";
//toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

//export to excel
// import { DownloadTableExcel } from 'react-export-table-to-excel';



// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useLocation } from "react-router";

function Reservation() {

  //table ref - with library
  // const TableRef = useRef(null);

  //export table without library
  // const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  // const fileExtension = ".xlsx";

  // const exportToExcel =()=>{
  //   const ws = XLSX.utils.json_to_sheet(reservationInformation);
  //   const wb = {Sheets: {'reservations': ws}, SheetNames:[`reservations`]};
  //   const ExcelBuffer = XLSX.write(wb, {bookType:`xlsx`, type:`array`});
  //   const data = new Blob([ExcelBuffer], {type:fileType});
  //   FileSaver.saveAs(data, `Reservation List` + fileExtension);
  // }

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [driver, setDriver] = useState("");
  const [car, setCar] = useState("");
  const [pickupDate, setPickupDate] = useState();
  // new Date().toISOString().slice(0, 10)
  const [dropoffDate, setDropoffDate] = useState();
  // new Date().toISOString().slice(0, 10)

  const handlepickupDate = (e) => {
    e.preventDefault();
    setPickupDate(e.target.value);
  };

  const [reservationInformation, setReservationInformation] = useState([]);

  const addReservation = (e) => {
    e.preventDefault();
    const reservationdata = {
      name: name,
      surname: surname,
      driversLicenceId: driver,
      car: car,
      pickupDate: pickupDate,
      dropoffDate: dropoffDate,
    };

    if (
      name == "" ||
      surname == "" ||
      driver == "" ||
      car == "" ||
      pickupDate == "" ||
      dropoffDate == ""
    ) {
      toast.error("Please fill out all the information!", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      try {
        axios
          .post(
            "http://localhost:8080/api/insertreservations/insertreservation",
            reservationdata
          )
          .then((data) => {
            console.log("data", data.data);
            showReservations();
          });
      } catch (error) {
        console.log(`Posti nuk u  krijua ${error}`);
        toast.error("");
      }
      toast.success("Reservation completed!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(reservationdata);
    }
    setName("");
    setSurname("");
    setDriver("");
    setCar("");
    setPickupDate("");
    setDropoffDate("");
  };
  const showReservations = () => {
    axios
      .get("http://localhost:8080/api/insertreservations/read")
      .then((data) => {
        setReservationInformation(data?.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  // const showReservations = async () => {
  //   const res = await axios.get(
  //     "http://localhost:8080/api/insertreservations/read"
  //   );
  //   setReservationInformation(res?.data);
  // };

  useEffect(() => {
    showReservations();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/api/insertreservations/delete/` + id)
      .then((data) => {
        console.log("deleted ajshe", data.data);
        toast.success("Deleted successfully!");
        showReservations();
      })
      .catch((err) => {
        console.log("err", err);
        toast.error("Something went WRONG!");
      });
  };
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row mt-4 mb-4">
            <h2 className="mb-3 text-center">Make your reservation now!</h2>
            <div className="col-10 offset-1 p-5 shadow-lg">
              <form className="needs-validation" onSubmit={addReservation}>
                <div className="row g-3">
                  <div className="col-lg-6 col-md-12">
                    <label for="fName" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      aria-label="First name"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                    />
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <label for="lName" className="form-label">
                      Surname
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      aria-label="Last name"
                      id="surname"
                      value={surname}
                      onChange={(event) => {
                        setSurname(event.target.value);
                      }}
                    />
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <label for="driverLicence" className="form-label">
                      Driver Licence ID
                    </label>
                    <input
                      value={driver}
                      type="text"
                      className="form-control"
                      placeholder="Driver Licence ID"
                      aria-label="Driver Licence ID"
                      id="driver"
                      onChange={(event) => {
                        setDriver(event.target.value);
                      }}
                    />
                  </div>
                  <div className="col-6">
                    <label for="carType" className="form-label">
                      Car
                    </label>
                    <select
                      className="form-select"
                      id="car"
                      value={car}
                      onChange={(event) => {
                        setCar(event.target.value);
                      }}
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
                    <label for="pDate" className="form-label">
                      Pick-up Date
                    </label>
                    <input
                      value={pickupDate}
                      type="date"
                      className="form-control"
                      id="pickupDate"
                      onChange={handlepickupDate}
                    />
                    {/* <DatePicker
                      className="form-control"
                      id="dropoffDate"
                      selected={pickupDate}
                      onChange={(date) => setPickupDate(date)}
                      selectsStart
                      startDate={setPickupDate}
                      endDate={dropoffDate}
                    /> */}
                  </div>
                  {/* {console.log("pickup", pickupDate.slice(0,10))} */}
                  <div className="col-6">
                    <label for="pDate" className="form-label">
                      Drop-off Date
                    </label>
                    <input
                      value={dropoffDate}
                      type="date"
                      className="form-control"
                      id="dropoffDate"
                      onChange={(event) => {
                        setDropoffDate(event.target.value);
                      }}
                    />
                    {/* <DatePicker
                      selected={dropoffDate}
                      onChange={(date) => setDropoffDate(date)}
                      selectsEnd
                      startDate={pickupDate}
                      endDate={dropoffDate}
                      minDate={pickupDate}
                    /> */}
                  </div>

                  <div className="col-12 text-center ">
                    <button
                      className="btn btn-lg btn-warning mt-4"
                      type="submit"
                      id="submitBtn"
                    >
                      Reserve
                    </button>
                    <ToastContainer />
                  </div>
                </div>
              </form>
            </div>

            <div className="container mt-5">
              <div className="table-responsive">
                <table className="table overflow-auto">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Surname</th>
                      <th scope="col">Driver's Licence ID</th>
                      <th scope="col">Car</th>
                      <th scope="col">Pickup Date</th>
                      <th scope="col">Dropoff Date</th>
                      <th scope="col">Action</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>

                  {reservationInformation.length ? (
                    <tbody>
                      {reservationInformation.map((val, key) => {
                        return (
                          <>
                            <tr key={key}>
                              <td>{val._id}</td>
                              <td>{val.name}</td>
                              <td>{val.surname}</td>
                              <td>{val.driversLicenceId}</td>
                              <td>{val.car}</td>
                              <td>{val.pickupDate}</td>
                              <td>{val.dropoffDate}</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  onClick={() => handleDelete(val._id)}
                                >
                                  Delete
                                </button>
                              </td>
                              <td>
                                <button
                                  className="btn btn-secondary"
                                  onClick={() =>
                                    //changed to ReservationModal2 PROVE
                                    render(<ReservationModal data={val} />)
                                  }
                                >
                                  Edit
                                </button>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  ) : (
                    <h2>No Users Found</h2>
                  )}
                </table>
              </div>
            </div>

            {/* <div>
              <DownloadTableExcel filename="table" sheet="cars" currentTableRef={TableRef.current}>
              <button className="btn btn-success">Export</button>
              </DownloadTableExcel>
            </div> */}
            {/* <div>
            <button className="btn btn-success" onClick={exportToExcel}>Export</button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Reservation;
