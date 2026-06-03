import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const response = await axios.get(
      "https://full-s2wo.onrender.com/api/employees/"
    );

    setEmployees(response.data);
  };

  const addEmployee = async () => {
    const response = await axios.post(
      "https://full-s2wo.onrender.com/api/employees/",
      {
        name,
        role,
      }
    );

    console.log(response.data);

    fetchEmployees();

    setName("");
    setRole("");
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Directory</h1>

      <input
        placeholder="Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <br />
      <br />

      <button onClick={addEmployee}>
        Add Employee
      </button>

      <hr />

      <h2>Employees</h2>

      {employees.map((employee) => (
        <div key={employee.id}>
          <strong>{employee.name}</strong> - {employee.role}
        </div>
      ))}

      <hr />

      <p>Name: {name}</p>
      <p>Role: {role}</p>
    </div>
  );
}

export default App;