export default function createIteratorObject(report) {
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;
  const departments = Object.keys(report.allEmployees);

  const iterator = {
    next: function () {
      if (currentDepartmentIndex < departments.length) {
        const currentDepartment = departments[currentDepartmentIndex];
        const currentEmployees = report.allEmployees[currentDepartment];

        if (currentEmployeeIndex < currentEmployees.length) {
          const result = {
            value: currentEmployees[currentEmployeeIndex],
            done: false,
          };
          currentEmployeeIndex++;
          return result;
        } else {
          currentEmployeeIndex = 0;
          currentDepartmentIndex++;
          return this.next();
        }
      } else {
        return { done: true };
      }
    },
  };

  return iterator;
}

