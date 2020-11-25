const cors = require("cors");
const express = require("express");
const app = express();

global.__basedir = __dirname;

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

/* -------------------------------------------------------------------------- */
/*                                SETUP ROUTES                                */
/* -------------------------------------------------------------------------- */

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

/* -------------------------------------------------------------------------- */
/*                            SETUP PORT AND LISTEN                           */
/* -------------------------------------------------------------------------- */

let port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
