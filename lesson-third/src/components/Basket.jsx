import { BasketItem } from "./BasketItem"

export const Basket = ({cart, onAdd, onSub, onRemove}) => {
    return <div className="col-md-5">
        <h3>items : {cart.length}</h3>
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
                    cart.map(elm => <BasketItem key={elm} onAdd={onAdd} onSub={onSub} onRemove={onRemove} {...elm} elm={elm} />)
                }
            </tbody>
        </table>
    </div>
}