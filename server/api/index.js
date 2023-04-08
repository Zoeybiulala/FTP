const routes = require("./routes.js");
const app = require('express')();

app.get('/api/covid/confirm', routes.getTotalCase);
app.get('/api/covid/death', routes.getTotalDeath);
app.get('/api/fly', routes.getFlightInfo);

module.exports = app;