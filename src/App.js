// import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import DemoCards from "./components/DemoCards";
 import CartItem from "./components/CartItem";
 import {useState} from "react";
 
function App() {

  const products=[
    {
      id:1,
      title:"iPhone",
      price:1200000
    },
    {
      id:2,
      title:"iWatch",
      price:10000
    },
    {
      id:3,
      title:"iMac",
      price:80000
    },
    {
      id:4,
      title:"iCloth",
      price:12000
    },
    {
      id:5,
      title:"iPod",
      price:20000
    },
    {
      id:6,
      title:"iPad",
      price:40000
    }

  ]

  const [cart,setCart]=useState([])
  const [total,setTotal]=useState(0)

  let addToCart=(item)=>{
    setCart([...cart,item])
    setTotal(total+item.price)   
  }
let cancelItem =(item)=>{
  let index = cart.findIndex((obj)=>obj.id===item.id);
  cart.splice(index,1)
   setCart([...cart])
  setTotal(total-item.price)
}
  return (
    <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="row">
       {
        products.map((item,i)=>{
          return (
            <DemoCards item={item} key={i} handleAddToCart={addToCart} cartItems={cart}/>
          )
        }) 
       } 
        </div>
      </div>
      <div className="col-lg-4 ">
      <h1>CartList</h1>
        {
          cart.length===0 ? <div>No items in cart</div>
          :
          <div className="row">
        <ol className="list-group list-group-numbered">
          {
            cart.map((item,i)=>{
            return(
            <CartItem cartItem={item} key={i} handleCancelItem={cancelItem}/>
            )
          })
          }
          </ol>
          <h3>Total:{total}</h3>
        </div>
        }
      </div>
    </div>

    </div>
  );
}

export default App;
