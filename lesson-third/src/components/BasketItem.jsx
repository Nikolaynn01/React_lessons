export const BasketItem = ({id, name, price, count, elm, onAdd, onSub, onRemove}) => {
    return <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>{count}</td>
        <td>{count * price}</td>
        <td>
            <button onClick={() => onAdd(elm)}>+</button>
            <button onClick={() => onSub(elm)}>-</button>
            <button onClick={() => onRemove(elm)}>x</button>
        </td>
    </tr>
}