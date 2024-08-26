import { useState } from 'react'
import './App.css'
import { AddUser } from './components/AddUser'
import { UserList } from './components/UserList'

export default function App() {
  const[users, setUsers] = useState([
    {id : 101, name : "Tigran", age : 24, salary : 300000},
    {id : 102, name : "Anna", age : 26, salary : 420000},
    {id : 103, name : "Narek", age : 25, salary : 250000},
    {id : 104, name : "Hayk", age : 30, salary : 370000},
    {id : 105, name : "Lusine", age : 19, salary : 400000},
    {id : 106, name : "David", age : 27, salary : 600000}
  ]);

  const handleSalaryUp = id => {
    setUsers(users.map(user => 
      user.id != id ? user : {...user, salary : user.salary + 72000}
    ))
  }

  const addUser = user => {
    setUsers([...users, {...user, id : 101 + users.length}])
  }
  return <>
    <AddUser 
      onAdd={addUser}
    />
    <UserList
      users = {users}
      onSalaryUp = {handleSalaryUp}
    />
  </>
}