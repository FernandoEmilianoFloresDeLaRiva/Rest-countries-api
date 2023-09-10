import React, { useState } from "react";
import "./Home.module.css";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Filter from "../../components/Filtered/Filter";
import useCountries from "../../hooks/useCountries";
import CountriesSection from "../../components/CountriesSection/CountriesSection";
import Footer from '../../components/footer/Footer'

function Home() {
  const [countrie, setCountrie] = useState("");
  const [region, setRegion] = useState("");
  const { countries } = useCountries({ countrie, region });
  const changeRegion = (name) => {
    setRegion(name);
  };
  const changeCountrie = (name) => {
    setCountrie(name);
    console.log(name);
  };
  return (
    <div className="home">
      <Header />
      <nav>
        <Input changeInput={changeCountrie} />
        <Filter changeSelect={changeRegion} />
      </nav>
      <main>
        <CountriesSection countries={countries} />
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
