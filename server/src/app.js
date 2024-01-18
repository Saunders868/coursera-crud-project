import * as dotenv from "dotenv";
import createServer from "./utils/server.js";
import connect from "./utils/connect.js";
dotenv.config();

const port = process.env.PORT || 3000;
const app = createServer();

app.listen(port, async () => {
  console.info(`app listening at port: ${port}`);

  await connect();
});
