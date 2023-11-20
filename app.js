// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require("./config/ConnectDB");
const route = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to mongoDB
connectDB.connect();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

route(app);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

