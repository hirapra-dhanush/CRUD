const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./src/DB/db');
const { ErrorMiddle } = require('./src/middlewares/ErrorMiddl');
const router = require('./src/router/user.router');

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:5173' }));

db();

app.use("/api/v1", router);

app.use(ErrorMiddle);
module.exports = app;
