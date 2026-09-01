import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryByName } from "../../api/postApi";
import { Loader } from "../UI/Loader";

export const CountryDetails = () => {
  const { id } = useParams();

  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const res = await getCountryByName(id);

        console.log(res.data.data);

        setCountry(res.data.data.objects[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getCountry();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        {country && (
          <div className="country-image grid grid-two-cols">
            <img
              src={country.flag.url_svg}
              alt={country.names.common}
              className="flag"
            />
            <div className="country-content">
              <p className="card-title"> {country.names.common} </p>

              <div className="infoContainer">
                <p>
                  <span className="card-description"> Native Names:</span>
                  {country.languages[0].native_name || "No native name"}
                </p>
                <p>
                  <span className="card-description"> Official Name:</span>
                  {country.names.official || "No official name"}
                </p>
                <p>
                  <span className="card-description"> Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="card-description"> Region:</span>
                  {country.region}
                </p>
                <p>
                  <span className="card-description"> Sub Region:</span>
                  {country.subregion}
                </p>
                <p>
                  <span className="card-description"> Capital:</span>
                  {country?.capitals[0]?.name || "No capital"}
                </p>

                {/* <p>
                  <span className="card-description">Top Level Domain:</span>
                  {country.tld[0]}
                </p> */}
                <p>
                  <span className="card-description"> Currencies: </span>
                  {country.currencies[0]?.name || "No currency"}
                </p>
                <p>
                  <span className="card-description">Languages: </span>
                  {Object.keys(country.languages[0])
                    .map((key) => country.languages[0][key])
                    .splice(0, 4)
                    .join(", ") || "No languages"}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="country-card-backBtn">
          <NavLink to="/country" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
