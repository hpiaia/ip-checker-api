"use strict";

const express = require("express");
const fetch = require("node-fetch");

const PORT = 5000;
const HOST = "0.0.0.0";

const app = express();

app.get("/", async (req, res) => {
  const ip = await fetch("https://api.ipify.org/").then((res) => res.text());

  res.send({ ip });
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
