const reservationInfo = require("../models/ReservationSchema");
const router = require("./Routes");

const routerReservation = require("express").Router();

routerReservation.post("/insertreservation", async (req, res) => {
  const name = req?.body?.name;
  const surname = req?.body?.surname;
  const driversLicenceId = req?.body?.driversLicenceId;
  const car = req?.body?.car;
  const pickupDate = req?.body?.pickupDate;
  const dropoffDate = req?.body?.dropoffDate;

  const reservationFull = new reservationInfo({
    name: name,
    surname: surname,
    driversLicenceId: driversLicenceId,
    car: car,
    pickupDate: pickupDate,
    dropoffDate: dropoffDate,
  });

  try {
    const newReserve = await reservationFull.save();
    res.status(201).json(newReserve);
  } catch (error) {
    res.status(404).json(`Post nuk u krijua ${error}`);
  }
});

routerReservation.get("/read", async (req, res) => {
  reservationInfo
    .find()
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

routerReservation.route("/update/:id").put((req, res, next) => {
  reservationInfo.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Update successfully");
      }
    }
  );
});

routerReservation.delete("/delete/:id", async (req, res) => {
  try {
    // gjetja e postit
    await reservationInfo.findByIdAndRemove(req.params.id).exec();
    res.status(200).json("Post u fshi.");

    // res.send("deleted");
  } catch (error) {
    res.status(404).json(`Posti nuk u fshi ${error}`);
  }
});

module.exports = routerReservation;
