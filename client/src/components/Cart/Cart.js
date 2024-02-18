import React, { useEffect, useState } from "react";
import "./Cart.css";
import axios from "axios";
import CartItem from "../CartItem/CartItem";
import Loading from "../Modals/Loading";
import Error from "../Modals/Error";
import EmptyCart from "./8882810.jpg";

import { Link } from "react-router-dom";

// Cart component to display the user's cart
function Cart(props) {
  // Store cart data in a state variable
  const [cartData, setCartData] = useState();
  // Store products in a separate state
  const [products, setProducts] = useState();
  // When removing a cart item, item's id is stored in this state received as props from App component
  const { selectedId, setSelectedId } = props;
  const [orderPlaced, setOrderPlaced] = useState(false);

  // States for loading, error and message
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  // To fetch the cart data from the database
  useEffect(() => {
    async function getCart() {
      try {
        //Loading is set to true which is set to false at the end
        setLoading(true);
        setMessage("Loading your cart");

        //Store the response from the server
        //It will return 401 status(unauthorized) when not logged in
        const res = await axios.get(`${process.env.REACT_APP_API_BASEURL}api/cart/getCart`, {
          withCredentials: true,
        });
        // Set Cart data
        setCartData(res.data.cart);
        // Set Products from cart data
        setProducts(res.data.cart.product);

        //Loading is set to false
        setLoading(false);
      } catch (err) {
        // Loading is set to false once an error is encountered
        setLoading(false);
        if (err.response.status === 401) {
          setMessage("Login to view your Cart");
        } else if (err.response.status === 400) {
          setMessage("Server Error");
        }
        // Set error to true
        setError(true);
        // Error is set to true for 1second and then set to false
        setTimeout(() => {
          setError(false);
        }, 1000);
        console.error(err.message);
      }
    }
    //Calls the above function immediately to execute the function
    getCart();
  }, [selectedId, orderPlaced]);

  // Function to create cart item component from the array of data fetched from database
  function createCartItem(cartItem) {
    return (
      <CartItem
        setSelectedId={setSelectedId}
        key={cartItem._id}
        id={cartItem._id}
        brand={cartItem.brand}
        name={cartItem.name}
        img={cartItem.img}
        price={cartItem.price}
        quantity={cartItem.quantity}
        size={cartItem.size}
      />
    );
  }

  // Function to place order, executed on clicking the submit button
  async function submitHandler(event) {
    // prevents default behaviour
    event.preventDefault();
    try {
      //Loading is set to true which is set to false at the end
      setLoading(true);
      setMessage("Placing Order");

      // Post request to place order
      const res = await axios.post(
        `${process.env.REACT_APP_API_BASEURL}api/orders/placeOrder`,
        {
          products: cartData.product,
          total: cartData.total,
        },
        {
          withCredentials: true,
        }
      );
      // toggles the state variable
      // The Cart items should be cleared when the order is placed
      setOrderPlaced(!orderPlaced);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(true);
      setMessage(err.response.data.msg);
      setTimeout(() => {
        setError(false);
      }, 1000);
      console.error(err.message);
    }
  }

  return (
    <div className="cart">
      {loading && <Loading msg={message} />}
      {error && <Error msg={message} />}
      {products && products.length != 0 ? (
        <>
          <h2 className="cart-heading">Your Shopping Cart</h2>
          <div className="cart-wrapper">
            <div className="cart-details-wrapper">
              {products && products.map(createCartItem)}
            </div>

            <div className="cart-summary">
              <div className="cart-summary-details">
                <h2 className="cart-summary-heading">Summary</h2>
                <div className="cart-price-summary">
                  <div className="sub-total-wrapper">
                    <div className="cart-sub-total-heading">
                      <span>Sub-Total</span>
                    </div>
                    <div className="cart-sub-total">
                      <span>{cartData.total}</span>
                    </div>
                  </div>
                  <div className="delivery-fee-wrapper">
                  <div className="delivery-fee-heading">
                      <span>Delivery</span>
                    </div>
                    <div className="delivery-fee-total">
                      <span>Rs. 30</span>
                    </div>
                  </div>
                  <div className="total-wrapper">
                  <div className="total-heading">
                      <span>Total</span>
                    </div>
                    <div className="total-price">
                      <span>{(cartData.total)+30}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="total">
                <h4> Total </h4>
                {cartData ? (
                  <h3 className="total-amount">{cartData.total}</h3>
                ) : (
                  0
                )}
              </div>
              <div className="order-button-container">
                <button onClick={submitHandler} className="order-button">
                  Place Order
                </button>
              </div>
            </div>
          </div>
          {/* <div className="checkout-details">
              <div className="total">
              <h4> Sub-total </h4>
              {cartData ? <h3>{cartData.total}</h3> : 0}
              </div>
              <div className="checkout-button-container">
                <button className="checkout-button" onClick={submitHandler}>
                  Place Order
                </button>
              </div>
            </div> */}
        </>
      ) : (
        <>
          <div className="no-product-cart">
            <img src={EmptyCart} />
            <span>
              {message === "Login to view your Cart" ? (
                <Link to="/Login">Login to view your cart"</Link>
              ) : (
                "No Products in Cart"
              )}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
