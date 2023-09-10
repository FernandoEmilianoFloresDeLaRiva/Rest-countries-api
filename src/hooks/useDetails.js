import { useState, useEffect } from "react";
import { getDetailsCountry } from "../services/services/countriesService";

export default function useDetails() {
  const url = new URL(window.location.href);
  const name = url.searchParams.get("name");
  const [loading, setLoading] = useState(true);
  const [countrie, setCountrie] = useState({});
  useEffect(() => {
    getDetailsCountry(name)
      .then((res) => {
        const countryData = res[0];
        setCountrie(countryData);
      })
      .catch((error) => {
        console.error("Error al obtener los detalles del país:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [name]);

  return { countrie, loading };
}
