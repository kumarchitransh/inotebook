//database se connect hone wala code

const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/inotebook";

//we can connect with the help of promise or asyn await.

const connectToMongo = async () => {
  mongoose.connect(mongoURI, () => {
    console.log("Succesfully Connected to MongoDB ❤️");
  });
};

module.exports = connectToMongo;
