import React, { useState, useEffect } from 'react';
import './UserTable.css';
import Header from '../Header/Header';

const UserTable = () => {
 const [users, setUsers] = useState([]);

 useEffect(() => {
    fetchUsers();
 }, []);

 const fetchUsers = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=10');
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
 };

 return (
  <div>
    <Header />
  
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Title</th>
          <th>Date</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.login.uuid}>
            <td>{user.login.uuid}</td>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.name.title}</td>
            <td>{user.dob.date}</td>
            <td>{user.dob.age}</td>
            <td>
              <button>View profile</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
 );
};

export default UserTable;