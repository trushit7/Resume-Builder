const express = require("express");
const dbConnect = require("./dbConnect");
const app = express();

app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => res.send("HEllo World"));

app.listen(PORT, () => console.log("Port listen on " + PORT));
