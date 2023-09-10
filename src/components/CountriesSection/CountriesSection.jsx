import React from "react";
import "./CountriesSection.module.css";
import ArticleCountrie from "../ArticleCountrie/ArticleCountrie";

function CountriesSection({ countries }) {
  return (
    <section>
      {countries.map((countrie) => (
        <ArticleCountrie countrie={countrie} />
      ))}
    </section>
  );
}

export default CountriesSection;
