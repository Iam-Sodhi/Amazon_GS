import React, { useEffect, useState } from "react";
import "./Orders.css";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Order from "./Order";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    if (user) {
      async function fetchOrderedOrders() {
        const userId = user?.uid;
        // Reference to the collection you want to read and order
        const ordersCollectionRef = collection(db, "users", userId, "orders");
        // Create a query to order the documents by the 'created' field in descending order
        const orderedQuery = query(
          ordersCollectionRef,
          orderBy("created", "desc")
        );
        // Fetch the ordered collection
        try {
          const querySnapshot = await getDocs(orderedQuery);
          setOrders(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        } catch (error) {
          console.error("Error getting documents:", error);
        }
      }
      // Call the async function to fetch and log ordered orders
      fetchOrderedOrders();
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders-order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
