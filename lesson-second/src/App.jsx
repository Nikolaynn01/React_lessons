import { useState } from 'react'
import './App.css'

function App() {
  const[products, setProducts] = useState([
    {id : 101, name : "Psychology", price : 27_000, pic : "https://m.media-amazon.com/images/I/91AiNeHUoNL._SL1500_.jpg"},
    {id : 102, name : "Religions", price : 20_000, pic : "https://m.media-amazon.com/images/I/81GFfkDIVTL._SL1500_.jpg"},
    {id : 103, name : "Mythology", price : 37_000, pic : "https://m.media-amazon.com/images/I/81nFqD2Au7L._SL1500_.jpg"},
    {id : 104, name : "Philosophy", price : 25_000, pic : "https://m.media-amazon.com/images/I/91AiNeHUoNL._SY466_.jpg"},
    {id : 105, name : "Socyology", price : 19_000, pic : "https://images-na.ssl-images-amazon.com/images/I/81ztfIYXRQL._AC_UL165_SR165,165_.jpg"},
    {id : 106, name : "Economics", price : 28_000, pic : "https://images-na.ssl-images-amazon.com/images/I/81x4TMV20wL._AC_UL165_SR165,165_.jpg"},
    {id : 107, name : "History", price : 40_000, pic : "https://images-na.ssl-images-amazon.com/images/I/91liAp+oaQL._AC_UL165_SR165,165_.jpg"},
    {id : 108, name : "Astronomy", price : 24_000, pic : "https://images-na.ssl-images-amazon.com/images/I/81g1KNlQj+L._AC_UL165_SR165,165_.jpg"},
  ]);

  const[basket, setBasket] = useState([]);
  const moveToCart = prod => {
    const result = basket.find(x => x.id == prod.id);
      if(result) {
        result.count++;
        setBasket([...basket])
      } else {
        setBasket([...basket, {...prod, count : 1}])
      }
  }

 const addProduct = prod => {
    prod.count++;
    setBasket([...basket])
 }


 const subProduct = prod => {
    if (prod.count > 1) {
      prod.count--;
      setBasket([...basket]);
    }
 }

 const removeProduct = prod => {
    let temp = basket.filter(elm => elm.id != prod.id);
    setBasket([...temp]);
 }

  return <>
    <h1>Online Shop</h1>
    <div className='content'>

      <div>
        <h3>Products</h3>
        <div className='list'>
          {
            products.map(prod => <div key={prod.id}>
              <img src={prod.pic}/>
              <p>{prod.name}</p>
              <strong>{prod.price}AMD</strong>
              <button onClick={()=>moveToCart(prod)}>move</button>
            </div>)
          }
        </div>
      </div>

      <div>
        <h3>Cart</h3>

        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>price</th>
              <th>count</th>
              <th>subtotal</th>
              <th>actions</th>
            </tr>
          </thead>

          <tbody>
            {
              basket.map(item => <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.count}</td>
                <td>{item.count * item.price}</td>
                <td> 
                  <button onClick={() => addProduct(item)}>+</button>
                  <button onClick={() => subProduct(item)}>-</button>
                  <button onClick={() => removeProduct(item)}>x</button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  </>
}

export default App;
