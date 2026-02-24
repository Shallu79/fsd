import React, { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    id: "",
    name: "",
    contact: "",
    email: "",
    address: "",
    company: "",
    designation: ""
  });
  const [editMode, setEditMode] = useState(false);
  const [searchId, setSearchId] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.id) return;
    setUsers([...users, form]);
    resetForm();
  };

  const handleEdit = (id) => {
    const user = users.find((u) => u.id === id);
    setForm(user);
    setEditMode(true);
  };

  const handleUpdate = () => {
    setUsers(users.map((u) => (u.id === form.id ? form : u)));
    setEditMode(false);
    resetForm();
  };

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const resetForm = () => {
    setForm({
      id: "",
      name: "",
      contact: "",
      email: "",
      address: "",
      company: "",
      designation: ""
    });
  };

  const filteredUsers = searchId
    ? users.filter((u) => u.id.includes(searchId))
    : users;

  return (
    <div className="container">
      <h2>User Management</h2>

      <div className="form">
        <input name="id" placeholder="ID" value={form.id} onChange={handleChange} disabled={editMode}/>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange}/>
        <input name="contact" placeholder="Contact" value={form.contact} onChange={handleChange}/>
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange}/>
        <input name="address" placeholder="Address" value={form.address} onChange={handleChange}/>
        <input name="company" placeholder="Company" value={form.company} onChange={handleChange}/>
        <input name="designation" placeholder="Designation" value={form.designation} onChange={handleChange}/>

        {editMode ? (
          <button onClick={handleUpdate}>Update User</button>
        ) : (
          <button onClick={handleAdd}>Add User</button>
        )}
      </div>

      <div className="search">
        <input
          placeholder="Search by ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Address</th>
            <th>Company</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.contact}</td>
              <td>{u.email}</td>
              <td>{u.address}</td>
              <td>{u.company}</td>
              <td>{u.designation}</td>
              <td>
                <button onClick={() => handleEdit(u.id)}>Edit</button>
                <button onClick={() => handleDelete(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;