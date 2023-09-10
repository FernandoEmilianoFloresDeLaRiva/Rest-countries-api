import React, { useState } from "react";
import "./Input.css";
import magnifying from "../../assets/magnifying.svg";

function Input({ changeInput }) {
  const [country, setCountry] = useState("");
  const submitData = (e) => {
    e.preventDefault();
    changeInput(country);
  };
  const changeCountry = ({ target }) => {
    setCountry(target.value);
    if (target.value === "") {
      changeInput("");
    }
  };
  return (
    <form onSubmit={submitData}className="formInput">
      <button className="magnifyingButton">
        <img src={magnifying} alt="magnifying-glass" className="imgButton"/>.
      </button>
      <input
        placeholder="Search for a country..."
        onChange={changeCountry}
        value={country}
        className="inputIndex"
      />
    </form>
  );
}

export default Input;
