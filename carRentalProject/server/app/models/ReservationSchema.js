const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  driversLicenceId: {
    type: String,
    required: true,
  },
  car: {
    type: String,
    required: true,
  },
  pickupDate: {
    type: Date,
    required: true,
  },
  dropoffDate: {
    type: Date,
    required: true,
  },
});

const Reservation = mongoose.model("ReservationSchema", ReservationSchema);
module.exports = Reservation;
