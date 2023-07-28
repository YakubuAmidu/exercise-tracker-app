const express = require('express');
const cors = require('cors');
// logger = require('morgan');
var morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8484;

app.use(cors());
// app.use(logger('combined'));
app.use(morgan('tiny'));
app.use(express.json());

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

mongoose.connect(process.env.ATLAS_URI)
        .then(() => {
            // Listen for request
            app.listen(port, () => {
              console.log(`Connected to mongodb database, and app listening on port ${port}`);
            });
        }).catch((err) => {
            console.log('Error: ' + err.message);
        })
