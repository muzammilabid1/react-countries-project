import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.restcountries.com/countries/v5",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_REST_COUNTRIES_API_KEY}`,
  },
});
export const getCountryData = () => {
  return api.get("", {
    params: {
      limit: 100,
      response_fields: "names.common,population,region,capitals,flag",
    },
  });
};

// get individual country data by name
export const getCountryByName = (name) => {
  return api.get(`/names.common/${name}`, {
    params: {
      response_fields:
        "names,population,region,subregion,capitals,flag,tld,currencies,languages",
    },
  });
};
