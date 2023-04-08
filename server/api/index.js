const routes = require("../routes");
const app = require('express')();

app.get('/covid/confirm', routes.getTotalCase);
app.get('/covid/death', routes.getTotalDeath);
app.get('/fly', routes.getFlightInfo);

module.exports = app;