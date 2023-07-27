const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8484;

app.use(cors());
app.use(express.json());

const exercisesRouter = require('./routes/users');
const usersRouter = require('./routes/exercises');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

mongoose.connect(process.env.ATLAS_URI)
        .then(() => {
            // Listen for request
            app.listen(port, () => {
              console.log(`Connected to mongodb database, and listening on port ${port}`);
            });
        }).catch((err) => {
            console.log('Error: ' + err.message);
        })
