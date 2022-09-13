// Backend for the project
const PORT = 5000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors({ origin: ["http://localhost:3000", "https://weather-app-by-ridvan.netlify.app"] }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/weather", (req, res) => {
  const options = {
    method: "GET",
    url: `http://api.weatherapi.com/v1/forecast.json?key=  ${process.env.REACT_APP_KEY}  &q=${req.query.location}&days=4&aqi=no&alerts=no`,
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(process.env.PORT || 5000);
