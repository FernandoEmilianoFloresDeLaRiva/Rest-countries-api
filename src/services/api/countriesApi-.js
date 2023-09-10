import { countries_URL } from "../../constants/countries_url";
import { filtro_URL } from "../../constants/filtrado_url";

export const getApi = async () => {
  const res = await fetch(`${countries_URL}/all${filtro_URL}`);
  return res.json();
};

export const getOneApi = async (name) => {
  const res = await fetch(`${countries_URL}/name/${name}/${filtro_URL}`);
  return res.json();
};

export const getByRegion = async (name) => {
  const res = await fetch(`${countries_URL}/region/${name}/${filtro_URL}`);
  return res.json();
};
