import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Men.css";
import { Link, useParams } from "react-router-dom";
import Rating from "../Rating";

const Men = ({ addToCart }) => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = id
      ? `https://fakestoreapi.com/products/categories/${id}`
      : "https://fakestoreapi.com/products/category/men's clothing";
    axios.get(url).then((res) => {
      setData(id ? [res.data] : res.data);
    });
  }, [id]);

  return (
    <>
      <center>
        <div className="card-container">
          {data.map((value) => (
            <div className="card h-100" key={value.id}>
              <figure>
                <img src={value.image} alt={value.title} />
              </figure>
              <hr />
              <div className="card_body">
                <p>Price : {value.price}</p>
                <p>
                  <Rating stars={value.rating?.rate} />
                </p>

                <p>Title : {value.title}</p>
                <br />
                <div className="button-container">
                  <Link to={`/productDetails/${value.id}`}>
                    <button className="card-button">Read More</button>
                  </Link>
                  <Link to="/cart">
                    <button
                      onClick={() => addToCart(value)}
                      className="card-button"
                    >
                      Add to cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </center>
    </>
  );
};

export default Men;

// fetch("https://fakestoreapi.com/products/category/men's clothing")
//   .then((res) => res.json())
//   .then((json) => console.log(json));
