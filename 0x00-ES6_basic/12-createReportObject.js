export default function createReportObject(employeesList) {
  const getNumberOfDepartments = (employees) => Object.keys(employees).length;

  const reportObject = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments,
  };

  return reportObject;
}
