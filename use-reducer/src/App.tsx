import { useReducer } from 'react'
import './App.css'
import { Basket } from './components/basket'
import { ProductList } from './components/product-list'
import { initialState, UserContext } from './context/context'
import { reducer } from './context/reducer'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return <>
      <UserContext.Provider value={{state, dispatch}}>
        <ProductList/>
        <Basket/>
      </UserContext.Provider>
      
    </>
  
}

export default App
