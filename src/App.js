import React from 'react';
import { UserProvider } from './Components/UserContext';
import UsersList from './Components/UserList';
import AddUserForm from './Components/AddUserForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <AddUserForm/>
        <UsersList/>
      </UserProvider>
    </div>
  );
}

export default App;
