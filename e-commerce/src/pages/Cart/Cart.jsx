// import React from "react";
// import "./Cart.css";
// import { Link } from "react-router-dom";
// import Loader from "../../components/Loader";

// const Cart = ({ cart, handleDec, handleInc }) => {
//   let totalCartPrice;
//   // console.log(cart);
//   return (
//     <>
//       {!cart && <Loader />}
//       {cart && cart.length === 0 && (
//         <div className="container">
//           <div className="row">
//             <h1 className="text-center">Empty Cart</h1>
//           </div>
//         </div>
//       )}

//       {cart && cart.length > 0 && (
//         <>
//           <div className="container">
//             <h1 className="text-center text-white">Your cart</h1>

//             {cart.map((value, i) => (
//                  totalCartPrice += value.price * value.quantity;

//               <div key={i} className="row  my-1 text-center p-2">
//                 <div className="col-lg-2 col-md-6">
//                   <img
//                     src={value.image}
//                     alt={value.title}
//                     style={{ width: "4rem" }}
//                   />
//                 </div>
//                 <div className="col-lg-2 col-md-6">
//                   <p>{value.title}</p>
//                 </div>
//                 <div className="col-lg-2 incre-decre-btn">
//                   {/* <p> */}

//                   <button
//                     className="btn btn-dark"
//                     onClick={() => handleDec(value.id)}
//                   >
//                     -
//                   </button>
//                   <button className="btn btn-dark">{value.quantity}</button>
//                   <button
//                     className="btn btn-dark"
//                     onClick={() => handleInc(value.id)}
//                   >
//                     +
//                   </button>
//                   {/* </p> */}
//                 </div>
//                 <div className="col-lg-2 col-md-6">
//                   <p>Price: {value.price}</p>
//                 </div>
//                 <div className="col-lg-2 col-md-6">
//                   <p>Total: {value.price * value.quantity}</p>
//                 </div>

//                 <hr className="my-2" />
//               </div>
//             ))}

//             <div className="row">
//               <div className="col-lg-4 col-md-6">
//                 {/* <p>Total: {value.price * value.quantity}</p> */}
//               </div>
//             </div>
//           </div>
//         </>
//       )}

//       <Link to="/">Back to home</Link>
//     </>
//   );
// };
// export default Cart;

import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";

const Cart = ({ cart, handleDec, handleInc }) => {
  let totalCartPrice = 0; // Initialize totalCartPrice

  return (
    <>
      {!cart && <Loader />}
      {cart && cart.length === 0 && (
        <div className="container">
          <div className="row">
            <h1 className="text-center">Empty Cart</h1>
          </div>
        </div>
      )}

      {cart && cart.length > 0 && (
        <>
          <div className="container">
            <h1 className="text-center text-white">Your cart</h1>

            {cart.map((value, i) => (
              <div key={i} className="row  my-1 text-center p-2">
                <div className="col-lg-2 col-md-6">
                  <img
                    src={value.image}
                    alt={value.title}
                    style={{ width: "4rem" }}
                  />
                </div>
                <div className="col-lg-2 col-md-6">
                  <p>{value.title}</p>
                </div>
                <div className="col-lg-2 incre-decre-btn">
                  <button
                    className="btn btn-dark"
                    onClick={() => handleDec(value.id)}
                  >
                    -
                  </button>
                  <button className="btn btn-dark">{value.quantity}</button>
                  <button
                    className="btn btn-dark"
                    onClick={() => handleInc(value.id)}
                  >
                    +
                  </button>
                </div>
                <div className="col-lg-2 col-md-6">
                  <p>Price: ${value.price}</p>
                </div>
                <div className="col-lg-2 col-md-6">
                  <p>Total: ${value.price * value.quantity}</p>
                </div>
                <hr className="my-2" />
              </div>
            ))}

            {/* Calculate and display total cart price */}
            <div className="row border">
              <div className="col-lg-4 col-md-6 ">
                <h6>
                  Total Cart Price: $
                  {cart.reduce(
                    (acc, curr) => acc + curr.price * curr.quantity,
                    0
                  )}
                </h6>
              </div>
            </div>
          </div>
        </>
      )}

      <Link to="/">Back to home</Link>
    </>
  );
};

export default Cart;
