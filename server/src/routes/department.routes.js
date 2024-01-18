import express from "express";
import {
  createDepartmentHandler,
  deleteDepartmentHandler,
  getAllDepartmentsHandler,
  getDepartmentHandler,
  updateDepartmentHandler,
} from "../controllers/department.controller.js";

export const departmentRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   name: Departments
 *   description: Operations related to departments
 *
 * definitions:
 *   Department:
 *     type: object
 *     properties:
 *       name:
 *         type: string
 *         description: The name of the department
 *         example: HR
 *
 * /api/departments:
 *   post:
 *     tags:
 *       - Departments
 *     summary: Create a new department
 *     requestBody:
 *       description: Department data to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Department'
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Department'
 *       409:
 *         description: Department already exists
 *
 *   get:
 *     tags:
 *       - Departments
 *     summary: Get all departments
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Department'
 *
 * /api/departments/{id}:
 *   get:
 *     tags:
 *       - Departments
 *     summary: Get department by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the department
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Department'
 *       404:
 *         description: Department does not exist
 *
 *   put:
 *     tags:
 *       - Departments
 *     summary: Update department by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the department
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Department data to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Department'
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Department'
 *       404:
 *         description: Department does not exist
 *
 *   delete:
 *     tags:
 *       - Departments
 *     summary: Delete department by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the department
 *         schema:
 *           type: string
 *     responses:
 *        204:
 *          description: Department deleted successfully
 *        404:
 *          description: Department does not exist
 */
departmentRoutes.get("/", getAllDepartmentsHandler);
departmentRoutes.get("/:id", getDepartmentHandler);
departmentRoutes.post("/", createDepartmentHandler);
departmentRoutes.put("/:id", updateDepartmentHandler);
departmentRoutes.delete("/:id", deleteDepartmentHandler);
