import express from "express";
import {
  createEmployeeHandler,
  deleteEmployeeHandler,
  getAllEmployeesHandler,
  getEmployeeHandler,
  updateEmployeeHandler,
} from "../controllers/employee.controller.js";

export const employeeRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   name: Employees
 *   description: Operations related to employees
 *
 * definitions:
 *   Employee:
 *     type: object
 *     properties:
 *       firstName:
 *         type: string
 *         description: The first name of the employee
 *         example: John
 *       lastName:
 *         type: string
 *         description: The last name of the employee
 *         example: Doe
 *       email:
 *         type: string
 *         description: The email of the employee
 *         example: john.doe@example.com
 *       department:
 *         type: string
 *         description: The ID of the department the employee belongs to
 *         example: 60f9a1839c3c6e15fc1307d3
 *
 * /api/employees:
 *   post:
 *     tags:
 *       - Employees
 *     summary: Create a new employee
 *     requestBody:
 *       description: Employee data to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Employee'
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Employee'
 *       409:
 *         description: Email already exists
 *
 *   get:
 *     tags:
 *       - Employees
 *     summary: Get all employees
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Employee'
 *
 * /api/employees/{id}:
 *   get:
 *     tags:
 *       - Employees
 *     summary: Get employee by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the employee
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Employee'
 *       404:
 *         description: Employee does not exist
 *
 *   put:
 *     tags:
 *       - Employees
 *     summary: Update employee by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the employee
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Employee data to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Employee'
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Employee'
 *       404:
 *         description: Employee does not exist
 *
 *   delete:
 *     tags:
 *       - Employees
 *     summary: Delete employee by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the employee
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Employee deleted successfully
 *       404:
 *         description: Employee does not exist
 */

employeeRoutes.get("/", getAllEmployeesHandler);
employeeRoutes.get("/:id", getEmployeeHandler);
employeeRoutes.post("/", createEmployeeHandler);
employeeRoutes.put("/:id", updateEmployeeHandler);
employeeRoutes.delete("/:id", deleteEmployeeHandler);
