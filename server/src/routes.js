import { departmentRoutes } from "./routes/department.routes.js";
import { employeeRoutes } from "./routes/employee.routes.js";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./utils/swagger.js";

function routes(app) {
  /**
   * @openapi
   * /healthcheck:
   *  get:
   *     tags:
   *     - Healthcheck
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  app.get("/healthcheck", (req, res) => {
    res.sendStatus(200);
  });

  app.use("/api/employees", employeeRoutes);
  app.use("/api/departments", departmentRoutes);
}

export default routes;
