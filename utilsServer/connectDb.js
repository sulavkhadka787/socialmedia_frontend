const mongoose = require("mongoose");

async function connectDb() {
  try {
    await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("Mongodb connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDb;
