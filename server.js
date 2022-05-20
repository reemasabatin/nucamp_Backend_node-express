const express = require("express");
const morgan = require("morgan");
<<<<<<< HEAD
=======
const campsiteRouter = require("./routes/campsiteRouter");
const promotionsRouter = require("./routes/promotionRouter");
const partnerRouter = require("./routes/partnerRouter");
>>>>>>> 32df324c99d7c811ef454c82a243064236b99ada

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));
<<<<<<< HEAD
=======
app.use(express.json());

app.use("/campsites", campsiteRouter);
app.use("/promotions", promotionsRouter);
app.use("/partners", partnerRouter);
>>>>>>> 32df324c99d7c811ef454c82a243064236b99ada

app.use(express.static(__dirname + "/public"));

app.use((req, res) => {
  res.statusCode = 200;
  console.log(req.headers);
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
