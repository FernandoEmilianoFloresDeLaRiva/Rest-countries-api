import { getApi, getParticularApi } from "../api/countriesApi-";

export const getCountries = async () => {
  try {
    const res = await getApi("all");
    return res;
  } catch (err) {
    console.error("Error in fetching: ", err);
    throw err;
  }
};

export const getOneCountrie = async (name) => {
  try {
    const res = await getApi(`name/${name}`);
    return res;
  } catch (err) {
    console.error("Error in fetching", err);
    throw err;
  }
};

export const getCountriesByRegion = async (name) => {
  try {
    const res = await getApi(`region/${name}`);
    return res;
  } catch (err) {
    console.error("Error in fetching", err);
    throw err;
  }
};

export const getDetailsCountry = async (name) => {
  try {
    const res = await getParticularApi(name);
    return res;
  } catch (err) {
    console.error("Error in fetching", err);
    throw err;
  }
};
