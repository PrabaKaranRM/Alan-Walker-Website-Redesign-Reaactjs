import React from 'react'
import "./store.css"
import Storebg from "../../assets/store-bg.png"
import Hood from "../../assets/hood.png"
import Mask from "../../assets/mask.png"
import Pend from "../../assets/pendent.png"

const store = () => {
  return (
    <div className="store-cont">
    <img src= { Storebg } className="store-bg" ></img>  
    <div className="store-t">STORE</div>
    <div className="card-cont">
      <div className="card-1">
         <div className="core">CORE COLLECTION</div>
         <div className="item-name">Alan Walker Hoodie</div>
         <img src={Hood} className="product-img"></img>
         <div className="price">$ 45 Dollar</div>
         <button className="buy-b">
          <div className= "buy-t">BUY</div>
         </button>
         
      </div>
      <div className="card-2">
         <div className="core">CORE COLLECTION</div>
         <div className="item-name">Alan Walker Mask</div>
         <img src={Mask} className="product-img"></img>
         <div className="price">$ 26 Dollar</div>
         <button className="buy-b">
          <div className= "buy-t">BUY</div>
         </button>
         
      </div>
      <div className="card-3">
         <div className="core">CORE COLLECTION</div>
         <div className="item-name">Alan Walker Pendant</div>
         <img src={Pend} className="product-img"></img>
         <div className="price">$ 21 Dollar</div>
         <button className="buy-b">
          <div className= "buy-t">BUY</div>
         </button>
         
      </div>
     
    </div>
    <div className="store-link">
        GO TO STORE
      </div>
    </div>
  )
}

export default store