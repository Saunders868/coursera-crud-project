import {
  createEmployee,
  deleteEmployeeById,
  getAllEmployees,
  getEmployee,
  updateEmployeeById,
} from "../services/employee.service.js";

export async function createEmployeeHandler(req, res) {
  try {
    const employeeData = req.body;
    const employee = await createEmployee(employeeData);
    return res.status(200).send(employee);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error });
  }
}

export async function getAllEmployeesHandler(req, res) {
  try {
    const employees = await getAllEmployees();

    return res.status(200).send(employees);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error });
  }
}

export async function getEmployeeHandler(req, res) {
  try {
    const { id } = req.params;

    const existingEmployee = await getEmployee({ _id: id });
    if (!existingEmployee) {
      res.status(404).send({ msg: "Employee does not exist...!" });
    }

    return res.status(200).send(existingEmployee);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error });
  }
}

export async function updateEmployeeHandler(req, res) {
  try {
    const { id } = req.params;
    const update = req.body;

    const existingEmployee = await getEmployee({ _id: id });

    if (!existingEmployee) {
      res.status(404).send({ msg: "Employee does not exist...!" });
    }

    const updatedEmployee = await updateEmployeeById(id, update);
    return res.status(200).send(updatedEmployee);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error });
  }
}

export async function deleteEmployeeHandler(req, res) {
  try {
    const { id } = req.params;

    const existingEmployee = await getEmployee({ _id: id });

    if (!existingEmployee) {
      res.status(404).send({ msg: "Employee does not exist...!" });
    }

    const deletedEmployee = await deleteEmployeeById(id);
    return res.status(204).send(deletedEmployee);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error });
  }
}
