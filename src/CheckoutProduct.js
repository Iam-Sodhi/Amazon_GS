import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{basket},dispatch]=useStateValue();
    const removeFromCart=()=>{
            //remove the item from the basket
            dispatch({
                type:'REMOVE_FROM_CART',
                id: id,
            })
    };
  return (
    
    <div className="checkoutProduct">
      <img className="checkoutProduct-image" src={image} alt="checkout-img" />
      <div className="checkoutProduct-info">
        <h2 className="checkoutProduct-title">{title}</h2>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
            {Array(rating).fill().map((_,i)=>(
                <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromCart}>
            Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
