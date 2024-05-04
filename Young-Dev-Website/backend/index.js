const express = require("express");
const app = express();
const PORT = 5000;
const bodyparser = require("body-parser");
const userRouter = require('./routes/userRoutes');
require('./utils/db');

const cors = require('cors');

app.use(cors());

// Middleware
app.use(bodyparser.json());

// Starter routes
app.use('/api', userRouter);

app.get('/welcome', (req, res) => {
    res.send("Welcome: Alishba");
})

app.listen(PORT, () => {
    console.log("App is listening on port", PORT);
})
