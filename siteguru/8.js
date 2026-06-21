const employees = [
    { id: 1, name: 'A', salary: 10000 },
    { id: 2, name: 'B', salary: 25000 },
    { id: 3, name: 'C', salary: 18000 },
    { id: 4, name: 'D', salary: 35000 }
];

// Keep only employees whose salary is greater than 15000
const filteredEmployees = employees.filter(employee => {
    return employee.salary > 15000;
});

// Sort employees in descending order of salary
filteredEmployees.sort((a, b) => {
    return b.salary - a.salary;
});

console.log(filteredEmployees);
