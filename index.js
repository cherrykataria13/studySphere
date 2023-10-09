const express = require('express');
var cors = require('cors');
const database = require('./database');
const studentPath = require('./routes/student');
const dashboardPath = require('./routes/dashboard');
const progressPath = require('./routes/progress');
const comparePath = require('./routes/compare');

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/student',studentPath);
// app.use('/dashboard',dashboardPath);
// app.use('/progress',progressPath);
// app.use('/compare',comparePath);

module.exports = app;