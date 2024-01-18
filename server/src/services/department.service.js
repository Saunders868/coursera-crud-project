import DepartmentModel from "../models/department.model.js";
import { databaseResponseTimeHistogram } from "../utils/metrics.js";

export async function createDepartment(input) {
  const metricsLabels = {
    operation: "createDepartment",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
    const department = await DepartmentModel.create(input);
    timer({ ...metricsLabels, success: true });
    return department;
  } catch (error) {
    timer({ ...metricsLabels, success: false });
    throw new Error(error);
  }
}

export async function getAllDepartments() {
  const metricsLabels = {
    operation: "getAllDepartments",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
    const departments = await DepartmentModel.find();
    timer({ ...metricsLabels, success: true });
    return departments;
  } catch (error) {
    timer({ ...metricsLabels, success: false });
    throw new Error(error);
  }
}

export async function getDepartment(filter) {
  const metricsLabels = {
    operation: "getDepartment",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
    const department = await DepartmentModel.findOne(filter);
    if (!department) {
      throw new Error("Department not found");
    }
    timer({ ...metricsLabels, success: true });
    return department;
  } catch (error) {
    timer({ ...metricsLabels, success: false });
    throw new Error(error);
  }
}

export async function updateDepartmentById(departmentId, update) {
  const metricsLabels = {
    operation: "updateDepartment",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
    const department = await DepartmentModel.findByIdAndUpdate(
      departmentId,
      update,
      { new: true }
    );
    if (!department) {
      throw new Error("Department not found");
    }
    timer({ ...metricsLabels, success: true });
    return department;
  } catch (error) {
    timer({ ...metricsLabels, success: false });
    throw new Error(error);
  }
}

export async function deleteDepartmentById(departmentId) {
  const metricsLabels = {
    operation: "deleteDepartment",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
    const department = await DepartmentModel.findByIdAndDelete(departmentId);
    if (!department) {
      throw new Error("Department not found");
    }
    timer({ ...metricsLabels, success: true });
    return department;
  } catch (error) {
    timer({ ...metricsLabels, success: false });
    throw new Error(error);
  }
}
