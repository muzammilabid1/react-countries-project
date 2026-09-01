import { NavLink } from "react-router-dom";

export const CountryCard = ({ country }) => {
  const { flag, names, population, region, capitals } = country;
  // console.log(names.common);
  
  return (
    <li className="country-card card">
      <div className="container-card bg-white-box">
        <img
          src={flag.url_svg || `${import.meta.env.BASE_URL}images/akhzbiaflag.jpg`}
          alt={flag.description || `flag of ${names.common}`}
        />
        <div className="countryInfo">
          <p className="card-title">
            {names.common.length > 10
              ? names.common.slice(0, 10) + "..."
              : names.common}
          </p>
          <p>
            <span className="card-description">Population:</span>
            {population}
          </p>
          <p>
            <span className="card-description">Region:</span>
            {region}
          </p>
          <p>
            <span className="card-description">Capital:</span>
            {capitals?.[0]?.name || "No capital"}
          </p>
          <NavLink to={`/country/${names.common}`}>
            <button>Read More</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
