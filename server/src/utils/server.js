import express from "express";
import cors from "cors";
import routes from "../routes.js";
import { swaggerDocs } from "./swagger.js";
import { restResponseTimeHistogram, startMeticsServer } from "./metrics.js";
import responseTime from "response-time";

function createServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.disable("x-powered-by");

  app.use(
    responseTime((req, res, time) => {
      if (req?.route?.path) {
        restResponseTimeHistogram.observe(
          {
            method: req.method,
            route: req.route.path,
            status_code: req.statusCode,
          },
          time * 1000
        );
      }
    })
  );

  swaggerDocs(app);
  routes(app);

  startMeticsServer();

  return app;
}

export default createServer;
