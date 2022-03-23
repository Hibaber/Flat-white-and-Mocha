
require("dotenv/config");
require("./db");


const express = require("express");
const hbs = require("hbs");
const app = express();

require("./config")(app);
require("./config/session.config")(app)

app.locals.appTitle = `Flat White & Mocha`;
app.locals.GOOGLEMAPS_KEY = process.env.GOOGLEMAPS_KEY;
app.locals.CLOUDINARY_KEY = process.env.CLOUDINARY_KEY;


require("./routes")(app)


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;

