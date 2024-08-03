import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductDetails.css";
import { useParams, Link } from "react-router-dom";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = `https://fakestoreapi.com/products/${id}`;
    axios.get(url).then((res) => {
      // console.log(res);
      setData(res.data);
    });
  }, [id]);

  return (
    <>
      <center>
        <div className="card-container">
          <div className="card h-100">
            <figure>
              <img src={data.image} alt={data.title} />
            </figure>
            <hr />
            <div className="card_body">
              <h4>Price : {data.price}</h4>
              <p>
                <b>Rating : </b>
                {/* {data.rating.rate} */}
              </p>
              <h5>Title : {data.title}</h5>
              <br />
              <Link to="/cart" onClick={() => addToCart(data)}>
                <button className="btn btn-dark">Add to cart</button>
              </Link>
            </div>
          </div>
        </div>
        <Link to="/">Back to home</Link>
      </center>
    </>
  );
};

export default ProductDetails;
