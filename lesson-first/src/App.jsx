
import { useState } from 'react'
import './App.css'
export default function App() {
  const[people, setPeople] = useState([
    {id : 101, name : "Armen", surname : "Sargsyan", salary : 240_000},
    {id : 102, name : "Sargis", surname : "Abgaryan", salary : 180_000},
    {id : 103, name : "Armine", surname : "Sahakyan", salary : 200_000},
    {id : 104, name : "Vachik", surname : "Qalantaryan", salary : 120_000},
    {id : 105, name : "Simon", surname : "Simonyan", salary : 250_000},
    {id : 106, name : "Karine", surname : "Kirakosyan", salary : 220_000},
  ])

  const handleSalaryUp = (id) => {
    let temp = [...people];
    let index = temp.findIndex(x => x.id == id);
    temp[index].salary += 50_000;
    setPeople(temp);
  }


  const handleSalaryDown = (id) => {
    let temp = [...people];
    let index = temp.findIndex(x => x.id == id);
    if (temp[index].salary - 50_000 < 50_000) {
      temp[index].salary = 50_000;
    } else {
      temp[index].salary -= 50_000;
    }
    setPeople(temp);
  }

  const removeEmployee = (id) => {
    let temp = people.filter(elem => elem.id != id);
    setPeople(temp);
  }

  return <>
    {
      people.map(item => <div key={item.id}>
        <p>{item.name} {item.surname} <strong>{item.salary} AMD</strong></p>
        <button onClick={() => handleSalaryUp(item.id)}>Salary up</button>
        <button onClick={() => handleSalaryDown(item.id)}>Salary down</button>
        <button onClick={() => removeEmployee(item.id)}>Remove</button>
      </div>
        
      )
    }
  </>
}