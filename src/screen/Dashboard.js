// Dashboard.js
import React, { useState } from 'react';
import Employees from './Employees';
import {
  MDBContainer,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
} from 'mdb-react-ui-kit';
import './Dashboard.css';

function Dashboard() {
  const [users, setUsers] = useState(Employees);
  const [editUserId, setEditUserId] = useState(null);
  const [editUserName, setEditUserName] = useState('');
  const [editUserPassword, setEditUserPassword] = useState('');
  const [editUserEmail, setEditUserEmail] = useState('');
  const [editUserPhone, setEditUserPhone] = useState('');
  const [newUserName, setNewUserName] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserPhone, setNewUserPhone] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setEditUserId(id);
    setEditUserName(userToEdit.user_name);
    setEditUserPassword(userToEdit.password);
    setEditUserEmail(userToEdit.email);
    setEditUserPhone(userToEdit.phone);
    setIsModalOpen(true);
  };

  const handleUpdate = () => {
    const updatedUsers = users.map((user) =>
      user.id === editUserId
        ? {
            ...user,
            user_name: editUserName,
            password: editUserPassword,
            email: editUserEmail,
            phone: editUserPhone,
          }
        : user
    );
    setUsers(updatedUsers);
    setEditUserId(null);
    setEditUserName('');
    setEditUserPassword('');
    setEditUserEmail('');
    setEditUserPhone('');
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleCreate = () => {
    const newUser = {
      id: Date.now().toString(),
      user_name: newUserName,
      password: newUserPassword,
      email: newUserEmail,
      phone: newUserPhone,
    };
    setUsers([...users, newUser]);
    setNewUserName('');
    setNewUserPassword('');
    setNewUserEmail('');
    setNewUserPhone('');
  };

  return (
    <MDBContainer className="my-5 gradient-form">
      <div className="dashboard-container">
        <h2>Dashboard</h2>
        <MDBTable>
          <MDBTableHead>
            <tr>
              <th>ID</th>
              <th>User Name</th>
              <th>Password</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.user_name}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <MDBBtn
                    className="btn btn-primary me-2"
                    onClick={() => handleEdit(user.id)}
                  >
                    Edit
                  </MDBBtn>
                  <MDBBtn
                    className="btn btn-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </MDBBtn>
                </td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>

        <MDBModal isOpen={isModalOpen} toggle={() => setIsModalOpen(false)}>
          <MDBModalHeader>Edit User</MDBModalHeader>
          <MDBModalBody>
            <div className="mb-3">
              <label htmlFor="editUserName" className="form-label">
                User Name
              </label>
              <MDBInput
                type="text"
                id="editUserName"
                value={editUserName}
                onChange={(e) => setEditUserName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="editUserPassword" className="form-label">
                Password
              </label>
              <MDBInput
                type="password"
                id="editUserPassword"
                value={editUserPassword}
                onChange={(e) => setEditUserPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="editUserEmail" className="form-label">
                Email
              </label>
              <MDBInput
                type="email"
                id="editUserEmail"
                value={editUserEmail}
                onChange={(e) => setEditUserEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="editUserPhone" className="form-label">
                Phone
              </label>
              <MDBInput
                type="text"
                id="editUserPhone"
                value={editUserPhone}
                onChange={(e) => setEditUserPhone(e.target.value)}
              />
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </MDBBtn>
            <MDBBtn color="primary" onClick={handleUpdate}>
              Save Changes
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>

        <div className="mb-3">
          <h4>Create New User</h4>
          <div className="mb-3">
            <label htmlFor="newUserName" className="form-label">
              User Name
            </label>
            <MDBInput
              type="text"
              id="newUserName"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="newUserPassword" className="form-label">
              Password
            </label>
            <MDBInput
              type="password"
              id="newUserPassword"
              value={newUserPassword}
              onChange={(e) => setNewUserPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="newUserEmail" className="form-label">
              Email
            </label>
            <MDBInput
              type="email"
              id="newUserEmail"
              value={newUserEmail}
              onChange={(e) => setNewUserEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="newUserPhone" className="form-label">
              Phone
            </label>
            <MDBInput
              type="text"
              id="newUserPhone"
              value={newUserPhone}
              onChange={(e) => setNewUserPhone(e.target.value)}
            />
          </div>
          <MDBBtn color="primary" onClick={handleCreate}>
            Create User
          </MDBBtn>
        </div>
      </div>
    </MDBContainer>
  );
}

export default Dashboard;
