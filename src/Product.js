import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({id,title, image, price, rating }) {
  const [{basket},dispath] = useStateValue();
  const addToCart = () => {
    //dispath the item into the data layer
    dispath({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product-info">
        <h2>{title}</h2>
        <p className="product-price">
          <small>INR </small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="cardphoto" />
      <button onClick={addToCart}>Add to Cart </button>
    </div>
  );
}

export default Product;
