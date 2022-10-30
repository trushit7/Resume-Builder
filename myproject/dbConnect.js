const mongoose = require("mongoose");

const URL = `mongodb+srv://imthiyas:25031231@imthiyasdb.ulxm2.mongodb.net/resume?retryWrites=true&w=majority`;

mongoose.connect(URL);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("database connected successful");
});

connection.on("error", () => {
  console.log("not connected to database");
});
