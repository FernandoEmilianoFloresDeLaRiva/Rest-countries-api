import React from "react";
import { useNavigate } from "react-router-dom";
import "./ArticleCountrie.module.css";

function ArticleCountrie({ countrie }) {
  const changePage = useNavigate();
  const changeToDetais = () => {
    changePage(`/details/?name=${countrie.name.common}`);
  };
  return (
    <article>
      <button onClick={changeToDetais}>
        <figure>
          <img src={countrie.flags.svg} alt={countrie.flags.alt} />
          <figcaption>{countrie.name.common}</figcaption>
        </figure>
      </button>
      <div>
        <p>
          <strong>Population: </strong>
          <small>{countrie.population}</small>
        </p>
        <p>
          <strong>Region: </strong>
          <small>{countrie.region}</small>
        </p>
        <p>
          <strong>Capital: </strong>
          <small>{countrie.capital[0]}</small>
        </p>
      </div>
    </article>
  );
}

export default ArticleCountrie;
