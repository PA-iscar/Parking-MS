const express = require("express");
const cors = require("cors");
const connect = require("./configs/db");
require("dotenv").config();
const lotController = require("./controllers/lot.controller");
const vehicleController = require("./controllers/vehicle.controller");
// const historyController = require("./controllers/history.controller");

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.status(200).json("Loading Success"));
app.get("/check", (req, res)=> res.status(200).json("Connection success"))

app.use("/lot", lotController);
app.use("/vehicle", vehicleController);
// app.use("/history", historyController);

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`listening to PORT: ${PORT}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
});
