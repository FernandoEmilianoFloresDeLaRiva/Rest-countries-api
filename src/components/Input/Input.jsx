import React, { useState } from "react";
import "./Input.module.css";
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
    <form onSubmit={submitData}>
      <button>
        <img src={magnifying} alt="magnifying-glass" />.
      </button>
      <input
        placeholder="Search for a country..."
        onChange={changeCountry}
        value={country}
      />
    </form>
  );
}

export default Input;
