
export const BasketItem = ({name, price, count, product, dispatch}) => {
    return <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{count}</td>
            <td>{count * price}</td>
            <td>
                <button onClick={() => dispatch({type : "add/count", payload : product.id})}>+</button>
                <button onClick={() => dispatch({type : "sub/count", payload : product.id})}>-</button>
                <button onClick={() => dispatch({type : "remove/product", payload : product.id})}>x</button>
            </td>
        </tr>
}