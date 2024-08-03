import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { Link, useParams } from "react-router-dom";
import Rating from "../Rating";

const Home = ({ addToCart }) => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = id
      ? `https://fakestoreapi.com/products/${id}`
      : "https://fakestoreapi.com/products";
    axios.get(url).then((res) => {
      setData(id ? [res.data] : res.data);
    });
  }, [id]);

  return (
    <>
      <center>
        <div className="card-container">
          {data.map((value) => (
            <div className="card " key={value.id}>
              <figure>
                <Link to={`/productDetails/${value.id}`}>
                  {" "}
                  <img src={value.image} alt={value.title} />
                </Link>
              </figure>
              <hr />
              <div className="card_body h-100">
                <div>Price : {value.price}</div>
                <div>
                  <Rating stars={value.rating?.rate} />
                </div>

                <div>Title : {value.title}</div>
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

export default Home;
