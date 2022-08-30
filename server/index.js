const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");



const PORT = 5000;
const app = express();
app.listen(PORT, ()=>{console.log(`Listening on port ${PORT}`)})