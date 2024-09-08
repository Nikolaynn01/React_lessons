
import { AddUser } from './components/AddUser'
import './App.css'
import { UserList } from './components/UserList'
import { useState } from 'react'
import { InputUser, IUser } from './types'
import { UserContext } from './context'

function App() {

  const [users, setUsers] = useState<IUser[]>([
    {id : 100, name : "Arman", age : 22, salary : 200000}
  ]);

  const removeUser = (id : number) : void => {
    setUsers(users.filter(user => user.id != id));
  }

  const handleAdd = (user : InputUser) : void => {
    setUsers([...users, {...user, id : Date.now()}]);
  }

  return <>

        <UserContext.Provider value={{users, removeUser, handleAdd}}>
            <AddUser/>
            <UserList/>
        </UserContext.Provider>
    </>
  
}

export default App
