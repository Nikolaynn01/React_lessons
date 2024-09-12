import { useContext } from "react"
import { UserContext } from "../context/context"
import { IProduct } from "../context/types";

export const ProductList = () => {

    const context = useContext(UserContext);

    if (!context) {
        throw new Error("outside provider!")
    }

    const {state, dispatch} = context;

    return <div>
        {
            state.products.map((product : IProduct) => 
                <div key={product.id}>
                    <img src={product.photo}
                    style={{width:200, height:200, objectFit:"cover"}} 
                    />
                    <p>{product.name}</p>
                    <p><strong>{product.price} AMD</strong></p>
                    <button onClick={() => dispatch({type : "move", payload : product.id})}>move</button>
                </div>
            )
        }
    </div>
}