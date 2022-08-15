import React from "react";
 import Rating from "./rating/Rating"
function DemoCards({item,cartItems,handleAddToCart}){
    
    return (
       <div className="col-lg-4 mt-4">
        <div className="card " style={{width: "15rem"}}>
        <img src="https://picsum.photos/200/150" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title ">{item.title}</h5>
          <p className="card-text">{item.price}.</p>
          <Rating />
          <button disabled={cartItems.some((obj)=>obj.id===item.id)} onClick= {()=>{handleAddToCart(item)}} className="btn btn-primary mt-2">Add to cart</button>
        </div>
      </div>
      </div>

    )
}

export default DemoCards;


