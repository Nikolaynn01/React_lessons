import { useContext } from "react"
import { UserContext } from "../context/context"
import { BasketItem } from "./basket-item";
import { IProduct } from "../context/types";

export const Basket= () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("outside provider!")
        
    }

    const {dispatch} = context;

    return <div>
        <table className="table table-dark table-bordered">
            <thead>
                <tr>
                    <th>product</th>
                    <th>price</th>
                    <th>count</th>
                    <th>subtotal</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    context.state.movedProducts.map((elm : IProduct) => 
                    <BasketItem key={elm.id} name={elm.name} price={elm.price} count={elm.count} product={elm} dispatch={dispatch}/>)
                }
            </tbody>
        </table>

    </div>
}