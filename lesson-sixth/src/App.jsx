import { useState } from 'react'
import './App.css'
import { AddUser } from './components/add-user'
import { UserList } from './components/userlist'

function App() {
  return <>
    <AddUser/>
    <UserList
      age = {"52"}
    />
  </>
}

export default App
