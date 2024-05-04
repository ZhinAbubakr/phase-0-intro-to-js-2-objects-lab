// Write your solution in this file!

const employee = {
  name: "John Doe",
  age: 30,
  department: "Engineering",
  salary: 50000,
};

// Function to update an employee object with a new key-value pair
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return Object.assign({}, employee, { [key]: value });
}

// Function to update an employee object destructively with a new key-value pair
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// Function to delete a key from an employee object without modifying the original object
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = Object.assign({}, employee);
  delete newEmployee[key];
  return newEmployee;
}

// Function to delete a key from an employee object and modify the original object
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
