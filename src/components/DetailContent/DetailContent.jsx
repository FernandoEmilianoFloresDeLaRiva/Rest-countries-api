import React from "react";
import "./DetailContent.css";
import BorderCountries from "../BorderCountries/BorderCountries";

function DetailContent({ countrie }) {
  const currencies = Object.values(countrie.currencies);
  const languages = Object.values(countrie.languages);
  console.log(countrie)
  return (
    <div>
      <section className="sectionDetail">
        <aside className="asideImg">
          <img
            src={countrie.flags.svg}
            alt={countrie.flags.alt}
            className="img-country"
          />
        </aside>
        <div className="all-content">
          <h1>{countrie.name.common}</h1>
          <div className="content-country">
            <div className="content1">
              <p>
                <strong>Official Name: </strong>
                <small>{countrie.translations.nld.official}</small>
              </p>
              <p>
                <strong>Population: </strong>
                <small>{countrie.population}</small>
              </p>
              <p>
                <strong>Region: </strong>
                <small>{countrie.region}</small>
              </p>
              <p>
                <strong>Sub Region: </strong>
                <small>{countrie.subregion}</small>
              </p>
              <p>
                <strong>Capital: </strong>
                <small>{countrie.capital[0]}</small>
              </p>
            </div>
            <div className="content1">
              <p>
                <strong>Top Level Domain: </strong>
                <small>{countrie.tld}</small>
              </p>
              <p>
                <strong>Currencies: </strong>
                {currencies.map((current) => {
                  return <small>{current.name}, </small>;
                })}
              </p>
              <p>
                <strong>Languages: </strong>
                {languages.map((current) => {
                  return <small>{current}, </small>;
                })}
              </p>
            </div>
            <BorderCountries border={countrie.borders}/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetailContent;
