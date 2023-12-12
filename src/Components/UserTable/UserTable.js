import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../constants/urls';
import './UserTable.css';
import Pagination from '../Pagination/Pagination';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${BASE_URL}?results=10`);
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      `${user.name.first} ${user.name.last}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const locale = 'pt-BR';

  const options = {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  };

  return (
    <div>
      <div>
        <h1>List Users</h1>
        <form className="search-bar">
          <input
            type="text"
            placeholder="Search user..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>

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
          {filteredUsers.map((user) => (
            <tr key={user.login.uuid}>
              <td>{user.login.uuid}</td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.name.title}</td>
              <td>{new Date(user.dob.date).toLocaleDateString(locale, options)}</td>
              <td>{user.dob.age}</td>
              <td>
                <button>View profile</button>
              </td>
            </tr>
          ))}
      <Pagination />
        </tbody>
        
      </table>
      
    </div>
    
    
  );
};

export default UserTable;
