import {
  createDepartment,
  deleteDepartmentById,
  getAllDepartments,
  getDepartment,
  updateDepartmentById,
} from "../services/department.service.js";

export async function createDepartmentHandler(req, res) {
  try {
    const departmentData = req.body;

    const department = await createDepartment(departmentData);
    return res.status(200).send(department);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error });
  }
}

export async function getAllDepartmentsHandler(req, res) {
  try {
    const departments = await getAllDepartments();

    return res.status(200).send(departments);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error });
  }
}

export async function getDepartmentHandler(req, res) {
  try {
    const { id } = req.params;

    const existingDepartment = await getDepartment({ _id: id });
    if (!existingDepartment) {
      res.status(404).send({ msg: "Department does not exist...!" });
    }

    return res.status(200).send(existingDepartment);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error });
  }
}

export async function updateDepartmentHandler(req, res) {
  try {
    const { id } = req.params;
    const update = req.body;

    const department = await getDepartment({ _id: id });

    if (!department) {
      res.status(404).send({ msg: "Department does not exist...!" });
    }

    const updatedDepartment = await updateDepartmentById(id, update);
    return res.status(200).send(updatedDepartment);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error });
  }
}

export async function deleteDepartmentHandler(req, res) {
  try {
    const { id } = req.params;

    const existingDepartment = await getDepartment({ _id: id });

    if (!existingDepartment) {
      res.status(404).send({ msg: "Department does not exist...!" });
    }

    const deletedDepartment = await deleteDepartmentById(id);
    return res.status(204).send(deletedDepartment);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error });
  }
}
