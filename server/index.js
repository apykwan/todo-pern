const express = require('express');
const cors = require('cors');

const todoRoute = require('./routes');

const app = express();
// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROUTES//
app.use(todoRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listen on port ${port}`)
});