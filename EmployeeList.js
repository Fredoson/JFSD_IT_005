import React from 'react';

function EmployeeList({ employees, onDelete, onEdit }) {
  return (
    <div className="employee-list">
      <h2>Employees</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Department</th>
            <th>Experience</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>${employee.salary}</td>
              <td>{employee.department}</td>
              <td>{employee.experience} years</td>
              <td>
                <button onClick={() => onEdit(employee)}>Edit</button>
                <button onClick={() => onDelete(employee._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;