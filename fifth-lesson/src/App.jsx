import { useEffect, useState } from 'react'
import './App.css'
import { Child } from './Child';

function App() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0)
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then(resp => resp.json())
    .then(data => {
      setProducts(data);
      console.log(data)
    })
  }, [count]);

  const remove = id => {
    setProducts(products.filter(x => x.id != id));
  }
  return <>
    <p>count {products.length}</p>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>Up</button>
    {
      products.map(p => <Child key={p.id} id={p.id}  onRemove = {remove}/>)
    }
  </>
}

export default App
