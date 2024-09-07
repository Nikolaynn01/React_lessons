import { useState } from 'react'
import './App.css'
import { AddUser } from './components/AddUser'
import { UserList } from './components/UserList'

function App() {

  const [users, setUsers] = useState([]);

  const addUser = user => {
    setUsers([...users, {...user}])
  }

  return <>
      <AddUser
        onAdd={addUser}
      />
      <UserList
        users={users}
      />
    </>
}

export default App
