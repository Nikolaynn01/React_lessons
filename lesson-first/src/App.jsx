import { UserContext } from './consstext'
import { useState } from 'react'
import './App.css'
import { Dashboard } from './components/Dashboard'

export default function App() {
  
  const [users, setUsers] = useState([
    {id : 100, name : " Armen", age : 29, salary : 230_000},
    {id : 101, name : " Arman", age : 39, salary : 330_000},
    {id : 102, name : " Karmen", age : 49, salary : 430_000},
    {id : 103, name : " Armine", age : 19, salary : 250_000}
  ]);


  const removeUser = id => {
    setUsers(users.filter(user => user.id != id));
  }

  const handleAdd = user => {
    setUsers([...users, {...user, id : Date.now()}]);
  }

  return <>
    <UserContext.Provider value={{users, onRemove : removeUser, onAdd : handleAdd}}>
      <Dashboard/>
    </UserContext.Provider>
  </>
}