import React, { useEffect, useState } from "react";
import "./Payment.css";
import { findSubtotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  useEffect(() => {
    //generate the special stripe secret which allows us to charge the customer
    //but whenever the basket changes we need to get a new secret

    const getClientSecret = async () => {
      const response = await axios({
          method: 'post',
          // Stripe expects the total in a currencies subunits
          url: `/clone-cbf82/us-central1/api/payments/create?total=${findSubtotal(basket) * 100}`,

      });
      setClientSecret(response.data.clientSecret)
  }

  getClientSecret();
}, [basket])
  
  console.log("The secret is now =>", clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent =payment confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: 'EMTPY_CART'
        })

        navigate("/orders");
      });
  };
  const handleChange = (e) => {
    //listen for changes in the cardElement and display any errors as the customer types card details
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout (
          <Link style={{ textDecoration: "none" }} to="/checkout">
            {basket?.length} items
          </Link>
          )
        </h1>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <p>123 React Road</p>
            <p>Gurdaspur, Punjab</p>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review Items and delivery</h3>
          </div>
          <div className="payment-items">
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment-details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment-priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={findSubtotal(basket)}
                  displayType={"text"}
                  thousandsSeparator={true}
                  prefix={"INR "}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"} </span>
                </button>
              </div>
            </form>
            {/* Errors */}
            {error && <div>{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
