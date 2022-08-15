import React from "react";

function CartItem({cartItem,handleCancelItem}){
    
    return(
<li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">{cartItem.title}
        </div>
      {cartItem.price}
    </div>
    <button  className="badge bg-primary rounded-pill" onClick={()=>handleCancelItem(cartItem)}>X</button>
  </li>
    )
}

export default CartItem;