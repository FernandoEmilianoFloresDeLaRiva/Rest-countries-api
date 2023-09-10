import React from "react";
import "./BorderCountries.css";

function BorderCountries({ border }) {
  return (
    <div className="container-borders">
      BorderCountries:
      <div>
        {border.map((current) => {
          return <span className="border">{current}</span>;
        })}
      </div>
    </div>
  );
}

export default BorderCountries;
