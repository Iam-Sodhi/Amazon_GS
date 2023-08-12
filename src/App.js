import "./App.css";
import Header from "./Header"
import Home from "./Home"
import Login from "./Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout  from "./Checkout";
import { useEffect } from "react";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment  from "./Payment";
import Orders from "./Orders";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise=loadStripe('pk_test_51NdCXmSFEEyTQkqeVhj1gweKV4tSx26svAPwosPLXMsNWWiOTxq77VTCGdMwG2z4jM1fyFz5CJZLLbePHD1lakWN004TATazej');
function App() {
 const [{},dispatch]=useStateValue();
  useEffect(()=>{   // runs only once when the app component loads
    auth.onAuthStateChanged(authUser=>{
      console.log("THE USER IS >>> ",authUser);
      if(authUser){  //if user just logged in or the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      }
      else{ //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  },[]);
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/login" element={<h1><Login /></h1>} />
          <Route index element={<div><Header/><Home/></div>}/>
          <Route path="/checkout" element={ <div><Header/><Checkout/></div> }/>
          <Route path="/payment" element={ <div><Header/><Elements stripe={promise}><Payment/></Elements></div> }/>
          <Route path="/orders" element={ <div><Header/><Orders/></div> }/>
          <Route path="/" element={<Header/> }>
          </Route>

        </Routes>

      </div>
    </Router>

  );
}

export default App;
