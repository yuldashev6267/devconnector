const mongoose = require("mongoose");
const db = process.env.DATABASE_CONNECTION.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
const connection = async () => {
  try {
    await mongoose.connect(db, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log("Error ", error.message);
  }
};
connection();
