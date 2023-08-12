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
import { db } from "./firebase";
import { doc, setDoc } from "firebase/firestore"; 

function Payment() {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  useEffect(() => {
    //generate the special stripe secret which allows us to charge the customer
    //but whenever the basket changes we need to get a new secret

    const getClientSecret = async () => {
      try {
        const subtotal = findSubtotal(basket);
        const amountInSubunits = Math.max(Math.round(subtotal * 100), 100); // Ensure at least 100 subunits (1 unit)
    
        const { data } = await axios.post("https://amazon-gs.onrender.com/create-payment-intent", {
          amount: amountInSubunits,
      currency: "INR",
        });
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error("Error fetching client secret:", error);
      }
    };
    getClientSecret();
  }, [basket]);

  console.log("The secret is now =>", clientSecret);
  console.log("The user is : ",user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    try {
      const { paymentIntent, error } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        }
      );

     if (paymentIntent) {
        // Payment confirmation is received
        if (paymentIntent.status === "succeeded") {
          // Handle successful payment
          await setDoc(doc(db, "users", user?.uid, "orders", paymentIntent.id), {
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
          setSucceeded(true);
          setError(null);
          setProcessing(false);
          dispatch({
            type: "EMPTY_CART",
          });
          navigate("/orders");
        } else {
          // Handle failed payment
          setError("Payment was not successful. Please try again.");
          setProcessing(false);
        }
      }
    } catch (error) {
      console.error("Error confirming card payment:", error);
      setError("An error occurred while processing your payment.");
      setProcessing(false);
    }
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
