import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader.jsx";
import { CountryCard } from "../components/Layout/CountryCard.jsx";
import { SearchFilter } from "../components/UI/SearchFilter.jsx";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryData();
        setCountries(res.data.data.objects);
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  const searchCountry = (country) => {
    if (search) {
      return country.names.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region.toLowerCase() === filter.toLowerCase();
  };

  // here is the main logic
  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country),
  );
  // console.log(filterCountries);
  // setCountries(filterCountries || countries);

  if (isPending) return <Loader />;
  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />
      <ul className="grid grid-four-cols">
        {filterCountries.map((curCountry, index) => {
          return <CountryCard key={index} country={curCountry} />;
        })}
      </ul>
    </section>
  );
};
