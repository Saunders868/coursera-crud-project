import mongoose from "mongoose";

async function connect() {
  const dbUri = process.env.DB_CONNECTION;

  return mongoose
    .connect(dbUri)
    .then(() => {
      console.info("Connected to DB");
    })
    .catch((error) => {
      console.error("Could not connect to DB: ", error);
      process.exit(1);
    });
}

export default connect;
