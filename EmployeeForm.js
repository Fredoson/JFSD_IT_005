import React, { useState, useEffect } from 'react';

function EmployeeForm({ onSubmit, editEmployee, onUpdate }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    salary: '',
    department: '',
    experience: ''
  });

  useEffect(() => {
    if (editEmployee) {
      setFormData(editEmployee);
    }
  }, [editEmployee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editEmployee) {
      onUpdate(editEmployee._id, formData);
    } else {
      onSubmit(formData);
    }
    setFormData({
      name: '',
      age: '',
      salary: '',
      department: '',
      experience: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="salary"
        placeholder="Salary"
        value={formData.salary}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="department"
        placeholder="Department"
        value={formData.department}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="experience"
        placeholder="Experience (years)"
        value={formData.experience}
        onChange={handleChange}
        required
      />
      <button type="submit">
        {editEmployee ? 'Update Employee' : 'Add Employee'}
      </button>
    </form>
  );
}

export default EmployeeForm;