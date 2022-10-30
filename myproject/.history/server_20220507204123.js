const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => res.send("HEllo World"));

app.listen(PORT, () => console.log("Port listen on " + PORT));
