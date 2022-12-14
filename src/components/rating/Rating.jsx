import React,{useState} from 'react'
import "./rating.css";
import {FaStar} from "react-icons/fa"
function Rating() {
  const [rating,setRating]=useState(null);
  const [hover,setHover]=useState(null);
  return (
    <div>
        {[...Array(5)].map((star,i)=>{
          const ratingValue = i+1;
          return (
            <label>
            <input type="radio" name="rating" value={ratingValue} onClick={()=>setRating(ratingValue)}/>
            <FaStar key={i}
            className=" star " 
            color={ratingValue<= (hover ||rating) ? "#ffc107" : "#e4e5e9"}
            onMouseEnter={()=>setHover(ratingValue)}
            onMouseLeave={()=>setHover(null)}
             />
            </label>
          )
        })
        }
    </div>
  )
}

export default Rating