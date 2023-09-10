import React from "react";
import "./Filter.module.css";

function Filter({ changeSelect }) {
  const changeValue = ({ target }) => {
    changeSelect(target.value);
  };
  return (
    <select onChange={changeValue}>
      <option value="" hidden>
        Filter by Region
      </option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}

export default Filter;
