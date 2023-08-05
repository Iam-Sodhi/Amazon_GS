import "./App.css";
import Header from "./Header"
import Home from "./Home"
import Login from "./Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout  from "./Checkout";
import { useEffect } from "react";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";



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
      else{ //user is logged in
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
          <Route path="checkout" element={ <div><Header/><Checkout/></div> }/>
          <Route path="/" element={<Header/> }>
          </Route>

        </Routes>

      </div>
    </Router>

  );
}

export default App;
