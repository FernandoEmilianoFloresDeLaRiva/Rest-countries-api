import { countries_URL } from "../../constants/countries_url";
import { particular_URL } from "../../constants/particular_url";
import { filterParticular_URL } from "../../constants/filterParticular_url";
import { filtro_URL } from "../../constants/filtrado_url";

export const getApi = async (endpoint) => {
  const res = await fetch(`${countries_URL}/${endpoint}/${filtro_URL}`);
  return res.json();
};

export const getParticularApi = async (name) => {
  const res = await fetch(`${particular_URL}/${name}${filterParticular_URL}`);
  return res.json();
};
