const bodyParser = require('body-parser');
const express = require('express');
var routes = require("./routes.js");

const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors({ credentials: true, origin: ['http://localhost:3000', 'https://ftp-eight.vercel.app', 'https://ftp-7vk24sew7-zoeybiulala.vercel.app'] }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



/* ---------------------------------------------------------------- */
/* ------------------- Route handler registration ----------------- */
/* ---------------------------------------------------------------- */

/* ---- (Dashboard) ---- */
// app.get('/total', routes.getTotalCase);
// app.get('/comparison', routes.)
app.get('/covid/confirm', routes.getTotalCase);
app.get('/covid/death', routes.getTotalDeath);
app.get('/fly', routes.getFlightInfo);

app.listen(process.env.PORT || 8080, () => {
	console.log(`Server listening on port ${process.env.PORT || 8080}`);
});
