import { getApi, getOneApi, getByRegion } from "../api/countriesApi-";

export const getCountries = async () => {
  try {
    const res = await getApi();
    return res;
  } catch (err) {
    console.error("Error in fetching: ", err);
    throw err;
  }
};

export const getOneCountrie = async (name) => {
  try {
    const res = await getOneApi(name);
    return res;
  } catch (err) {
    console.error("Error in fetching", err);
    throw err;
  }
};

export const getCountriesByRegion = async (name) => {
  try {
    const res = await getByRegion(name);
    return res;
  } catch (err) {
    console.error("Error in fetching", err);
    throw err;
  }
};
