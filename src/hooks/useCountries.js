import { useState, useEffect } from "react";
import {
  getCountries,
  getCountriesByRegion,
  getOneCountrie,
} from "../services/services/countriesService";

export default function useCountries({
  countrie = { countrie: "" },
  region = { region: "" },
}) {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    if (countrie === "" && region === "") {
      getCountries()
        .then((res) => setCountries(res))
        .catch((err) => console.error(err));
    }
  }, [countrie, region]);
  useEffect(() => {
    if (countrie !== "") {
      getOneCountrie(countrie)
        .then((res) => setCountries(res))
        .catch((err) => console.error(err));
    }
  }, [countrie]);
  useEffect(() => {
    if (region === "") return;
    getCountriesByRegion(region)
      .then((res) => setCountries(res))
      .catch((err) => console.error(err));
  }, [region]);

  return { countries };
}
