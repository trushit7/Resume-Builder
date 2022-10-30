const express = require("express");
const dbConnect = require("./dbConnect");
const app = express();
const userRoute = require("./routes/userRoute");

app.use(express.json());

const PORT = 5000;

app.use("/api/user", userRoute);

app.get("/", (req, res) => res.send("HEllo World"));

app.listen(PORT, () => console.log("Port listen on " + PORT));
