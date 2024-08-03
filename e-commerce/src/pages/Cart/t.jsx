import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import axios from "axios";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const [Cart, setCart] = useState([]);
  const [total, setTotal] = useState();

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(
          "http://localhost:2000/api/v1/get-user-cart",
          { headers }
        );
        // console.log(response);
        setCart(response.data.data);
        calculateTotal(response.data.data);
      } catch (error) {
        console.error("Error fetching cart", error);
      }
    };
    fetchCart();
  }, []);

  const calculateTotal = (cartItems) => {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotal(totalPrice);
  };

  const deleteItem = async (bookId) => {
    try {
      const response = await axios.put(
        `http://localhost:2000/api/v1/remove-from-cart/${bookId}`,
        {},
        { headers }
      );
      alert(response.data.message);
      const updatedCart = Cart.filter((item) => item._id !== bookId);
      setCart(updatedCart);
      calculateTotal(updatedCart);
    } catch (error) {
      console.error("Error removing book from cart", error);
    }
  };

  useEffect(() => {
    if (Cart && Cart.length > 0) {
      let total = 0;
      Cart.map((items) => {
        total += items.price;
      });
      setTotal(total);
      total = 0;
    }
  }, [Cart]);

  const placeOrder = async () => {
    try {
      const response = await axios.post(
        `http://localhost:2000/api/v1/place-order`,
        { order: Cart },
        { headers }
      );
      console.log(response.data.message);
      alert(response.data.message);
      navigate("/profile/orderHistory");
    } catch (error) {
      console.error("Error placing order", error);
    }
  };

  return (
    <>
      {!Cart && <Loader />}
      {Cart && Cart.length === 0 && (
        <div className="container">
          <div className="row">
            <h1 className="text-center">Empty Cart</h1>
          </div>
        </div>
      )}

      {Cart && Cart.length > 0 && (
        <>
          <div className="container">
            <h1 className="text-center text-white">Your cart</h1>
            <div
              className="row  my-1 text-center p-2"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="col-2">
                <h5>Book</h5>
              </div>

              <div className="col-2">
                <h5>Title</h5>
              </div>
              <div className="col-2">
                <h5>Description</h5>
              </div>
              <div className="col-2">
                <h5>Author</h5>
              </div>
              <div className="col-2">
                <h5>Price</h5>
              </div>

              <div className="col-2">
                <h5>Delete</h5>
              </div>
              <hr className="my-2" />
            </div>
            {Cart.map((items, i) => (
              <div
                key={i}
                className="row  my-1 text-center p-2"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="col-2">
                  <img
                    src={`http://localhost:2000/${items.file}`}
                    alt="book_image"
                    style={{ width: "4rem" }}
                  />
                </div>

                <div className="col-2">
                  <p>{items.title}</p>
                </div>
                <div className="col-2">
                  <p>{items.desc.slice(0, 100)}</p>
                </div>
                <div className="col-2">
                  <p>by {items.author}</p>
                </div>
                <div className="col-2">
                  <p>{items.price}</p>
                </div>

                <div className="col-2">
                  <button onClick={() => deleteItem(items._id)}>
                    <MdDelete style={{ fontSize: "2rem" }} />
                  </button>
                </div>
                <hr className="my-2" />
              </div>
            ))}
          </div>
        </>
      )}
      {Cart && Cart.length > 0 && (
        <div className="bg-dark text-white py-2 container my-2">
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="col-3">
              <h5>Total amount</h5>
            </div>

            <div className="col-3">
              <h5> Quantity : {Cart.length} books</h5>
            </div>
            <div className="col-3">
              <h5>₹ {total}</h5>
            </div>
            <div className="col-3">
              <button className="btn btn-primary" onClick={placeOrder}>
                place order
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
