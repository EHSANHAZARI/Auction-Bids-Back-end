const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");

const dbUrl =
  "mongodb+srv://Auction:DaWcvAENC9JnSPbi@cluster0.tzzkwds.mongodb.net/?retryWrites=true&w=majority";
const connectionParams = {
  useNewUrlParser: true, // Corrected typo here: 'useNewUrlPaser' to 'useNewUrlParser'
  useUnifiedTopology: true,
};

mongoose
  .connect(dbUrl, connectionParams)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/hello", (req, res) => {
  res.send("Hello from the backend!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
