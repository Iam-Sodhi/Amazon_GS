import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./StateProvider";
import { Link, useNavigate } from "react-router-dom";
import { findSubtotal } from './reducer';
function Subtotal() {
    const [{basket},dispath]=useStateValue();
    const navigate = useNavigate();
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={ (value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className='subtotal-gift'>
                            <input type='checkbox' /> This order contains a gift
                        </small>
                    </>
                ) }

                decimalScale={ 2 }
                value={findSubtotal(basket)}
                displayType={ "text" }
                thousandsSeparator={ true }
                prefix={ "INR " }
            />

            <button onClick={e=> navigate("/payment")}>
                Proceed to Checkout
            </button>
        </div>
    )
}

export default Subtotal