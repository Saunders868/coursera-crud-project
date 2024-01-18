import EmployeeModel from "../models/employee.model.js";
import { databaseResponseTimeHistogram } from "../utils/metrics.js";

export async function createEmployee(input) {
  const metricsLabels = {
    operation: "createEmployee",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
    const employee = await EmployeeModel.create(input);
    timer({ ...metricsLabels, success: true });
    return employee;
  } catch (error) {
    timer({ ...metricsLabels, success: false });
    throw new Error(error);
  }
}

export async function getAllEmployees() {
  const metricsLabels = {
    operation: "getAllEmployees",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
    const employees = await EmployeeModel.find().populate("department");
    timer({ ...metricsLabels, success: true });
    return employees;
  } catch (error) {
    timer({ ...metricsLabels, success: false });
    throw new Error(error);
  }
}

export async function getEmployee(filter) {
  const metricsLabels = {
    operation: "getEmployee",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
    const employee = await EmployeeModel.findOne(filter).populate("department");
    if (!employee) {
      throw new Error("Employee not found");
    }
    timer({ ...metricsLabels, success: true });
    return employee;
  } catch (error) {
    timer({ ...metricsLabels, success: false });
    throw new Error(error);
  }
}

export async function updateEmployeeById(employeeId, update) {
  const metricsLabels = {
    operation: "updateEmployee",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
    const employee = await EmployeeModel.findByIdAndUpdate(employeeId, update, {
      new: true,
    });
    if (!employee) {
      throw new Error("Employee not found");
    }
    timer({ ...metricsLabels, success: true });
    return employee;
  } catch (error) {
    timer({ ...metricsLabels, success: false });
    throw new Error(error);
  }
}

export async function deleteEmployeeById(employeeId) {
  const metricsLabels = {
    operation: "deleteEmployee",
  };

  const timer = databaseResponseTimeHistogram.startTimer();
  try {
    const employee = await EmployeeModel.findByIdAndDelete(employeeId);
    if (!employee) {
      throw new Error("Employee not found");
    }
    timer({ ...metricsLabels, success: true });
    return employee;
  } catch (error) {
    timer({ ...metricsLabels, success: false });
    throw new Error(error);
  }
}
