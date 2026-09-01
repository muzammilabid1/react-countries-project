export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const handleSelectChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  const sortCountries = (order) => {
    const sortedCountries = [...countries].sort((a, b) => {
    //   if (order === "Asc") {
    //     return a.names.common.localeCompare(b.names.common);
    //   } else {
    //     return b.names.common.localeCompare(a.names.common);
    //   }
    return order === "Asc"
      ? a.names.common.localeCompare(b.names.common)
      : b.names.common.localeCompare(a.names.common);
    });
    setCountries(sortedCountries);
  };
  return (
    <section className="section-searchFilter container">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleInputChange}
      />
      <div>
        <select
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div>
        <button onClick={() => sortCountries("Asc")}>Asc</button>
        <button onClick={() => sortCountries("Des")}>Des</button>
      </div>
    </section>
  );
};
