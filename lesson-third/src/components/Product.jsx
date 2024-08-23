export const Product = ({id, name, price, photo, onMove, elm}) => {
    return <div className="col-md-4">
        <img src={photo}
        style={{width:200, height:200, objectFit:"cover"}} 
         />
         <p>{name}</p>
         <p><strong>{price} USD</strong></p>
         <button onClick={() => onMove(elm)} className="btn btn-primary">move</button>
    </div>
}