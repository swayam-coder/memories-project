const mongoose = require("mongoose");

require("dotenv").config();

const DB = process.env.DATABASE;

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true , useFindAndModify: false})
.then(() => console.log("connected to mongodb server"))
.catch((error) => console.log(error))


