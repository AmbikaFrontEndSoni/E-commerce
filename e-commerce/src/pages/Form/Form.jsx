import React, { useState } from "react";
import "./Form.css";
import axios from 'axios'

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [states, setStates] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [mobileErr, setMobileErr] = useState(false);
  const [pincodeErr, setPincodeErr] = useState(false);
  const [cityErr, setCityErr] = useState(false);
  const [statesErr, setStatesErr] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();

    if (
      nameErr ||
      emailErr ||
      mobileErr ||
      pincodeErr ||
      cityErr ||
      statesErr
    ) {
      alert("Please fill the correct information");
    } else {
      setName("");
      setEmail("");
      setMobile("");
      setCity("");
      setPincode("");
      setStates("");
      setNameErr(false);
      setEmailErr(false);
      setMobileErr(false);
      setPincodeErr(false);
      setCityErr(false);
      setStatesErr(false);
    }

    const name = e.target.name.value;
    const email = e.target.email.value;
    const mobile = e.target.mobile.value;
    const city = e.target.city.value;
    const pincode = e.target.pincode.value;
    const states = e.target.states.value;
    const data = { name, email, mobile, city, pincode, states };

    axios
      .post("http://localhost:5000/data", data)
      .then((res) => {
        // console.log(res);
        // e.target.reset();
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const nameHandler = (e) => {
    const name = e.target.value;
    setNameErr(name.length < 2);
    // console.log(name);
    setName(name);
  };

  const emailHandler = (e) => {
    const email = e.target.value;
    setEmailErr(email.length < 12);
    // console.log(email);
    setEmail(email);
  };

  const mobileHandler = (e) => {
    const mobile = e.target.value;
    setMobileErr(mobile.length < 10);
    // console.log(mobile);
    setMobile(mobile);
  };

  const pincodeHandler = (e) => {
    const pincode = e.target.value;
    setPincodeErr(pincode.length < 6);
    setPincode(pincode);
    // console.log(pincode);
  };

  const cityHandler = (e) => {
    const city = e.target.value;
    setCityErr(city.length < 2);
    setCity(city);
    // console.log(city);
  };

  const statesHandler = (e) => {
    const states = e.target.value;
    setStatesErr(states.length < 2);
    setStates(states);
    // console.log(states);
  };

  return (
    <div className="col-sm-12 col-md-12 col-lg-6 m-auto">
      <form className="row g-3 contact_form" onSubmit={formHandler}>
        <div className="col-12">
          <label htmlFor="inputName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={name}
            onChange={nameHandler}
            className="form-control transparent-input input_styles"
            id="inputName"
          />
          {nameErr ? <span>* Please enter at least two letters</span> : ""}
        </div>

        <div className="col-md-12">
          <label htmlFor="inputEmail" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Your E-mail.."
            className="form-control transparent-input input_styles"
            id="inputEmail"
            name="email"
            value={email}
            onChange={emailHandler}
          />
          {emailErr ? <span>* Please enter a valid email</span> : ""}
        </div>

        <div className="col-md-12">
          <label htmlFor="inputMobile" className="form-label">
            Mobile Number
          </label>
          <input
            type="number"
            placeholder="Enter Your Mobile Number"
            name="mobile"
            value={mobile}
            onChange={mobileHandler}
            className="form-control transparent-input input_styles"
            id="inputMobile"
          />
          {mobileErr ? <span>* Please enter a valid mobile number</span> : ""}
        </div>

        <div className="col-md-12">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input
            type="text"
            placeholder="Enter City Name"
            className="form-control transparent-input input_styles"
            name="city"
            value={city}
            onChange={cityHandler}
            id="inputCity"
          />
          {cityErr ? <span>* Please enter at least two letters</span> : ""}
        </div>

        <div className="col-md-12">
          <label htmlFor="inputPincode" className="form-label">
            Pincode
          </label>
          <input
            type="number"
            placeholder="Enter Pincode"
            className="form-control transparent-input input_styles"
            name="pincode"
            value={pincode}
            onChange={pincodeHandler}
            id="inputPincode"
          />
          {pincodeErr ? <span>* Please enter a valid pincode</span> : ""}
        </div>

        <div className="col-md-12">
          <label htmlFor="inputStates" className="form-label">
            State
          </label>
          <input
            type="text"
            placeholder="Enter State Name"
            className="form-control transparent-input input_styles"
            name="states"
            value={states}
            onChange={statesHandler}
            id="inputStates"
          />
          {statesErr ? <span>* Please enter at least two letters</span> : ""}
        </div>

        <div className="col-lg-3 col-md-12 col-sm-12">
          <button
            type="submit"
            className="btn form_btn w-100 bg-dark text-white p-1 fs-6"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
