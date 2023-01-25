const express = require("express");
const app = express();
const mongoose = require("mongoose");

const routess = require("./app/Routes/Routes");
const reserveRoute = require("./app/Routes/ReservationRoute");

app.use(express.json());

const PORT = 8080;

const cors = require("cors");
app.use(cors());

// const messages = require("./app/models/MessageSchema");

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Node application." });
});

// Database
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://alisa:mernproject@project.feqqe0z.mongodb.net/ContactMessages?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    // .then(()=>{
    //   console.log("database connected")
    // });
  } catch (error) {
    console.error(`Ka nje gabim ne lidhje me DB ${error}`);
  }
};

//therritja databazes
connectDB();

// lidhja ndermjet frontend dhe backend , therritja e router
app.use("/api/posts", routess);

app.use("/api/insertreservations", reserveRoute);

//if the app is built correctly, you will see the message below on clg
//and Welcome to Node application on browser http://localhost:8080/
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
