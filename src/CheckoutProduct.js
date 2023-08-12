import React, { forwardRef } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = forwardRef(
  ({ id, image, title, price, rating,hideButton }, ref) => {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromCart = () => {
      //remove the item from the basket
      dispatch({
        type: "REMOVE_FROM_CART",
        id: id,
      });
    };
    return (
      <div ref={ref} className="checkoutProduct">
        <img className="checkoutProduct-image" src={image} alt="checkout-img" />
        <div className="checkoutProduct-info">
          <h2 className="checkoutProduct-title">{title}</h2>
          <p className="checkoutProduct-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct-rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          {!hideButton && (
            <button onClick={removeFromCart}>Remove from Basket</button>
          )}
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
