import React from "react";
import "./Details.css";
import Header from "../../components/Header/Header";
import BackButton from "../../components/BackButton/BackButton";
import DetailContent from "../../components/DetailContent/DetailContent";
import Footer from "../../components/footer/Footer";
import useDetails from "../../hooks/useDetails";

function Details() {
  const { countrie, loading } = useDetails();
  return (
    <div className="home">
      <Header />
      <nav className="navBack">
        <BackButton />
      </nav>
      <main className="mainDetails">
        {loading ? (
          <p>Cargando datos</p>
        ) : (
          <DetailContent countrie={countrie} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Details;
