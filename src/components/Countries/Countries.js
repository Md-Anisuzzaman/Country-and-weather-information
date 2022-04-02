import React, { useState } from "react";
import './Countries.css'
import { Link } from "react-router-dom";
import SearchInput from "../SearchCompo/SearchBar";



const AllCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getCountryByName = async (countryName) => {
    try {
      const getData = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);

      if (!getData.ok) throw new Error("The country you entered is not found");

      const data = await getData.json();
      setCountries(data);
      setError("");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  console.log(countries);

  return (
    <div className="countries__wrapper">
      <div className="country__top">
        <div className="search">
          <SearchInput onSearch={getCountryByName} />
        </div>

      </div>

      <div className="country__bottom">
        {error && !isLoading && <h5>{error}</h5>}
        {countries?.map((country) => (
          <div className="country__card">
            <div className="country__img">
              <img src={country.flags.png} alt="" />
            </div>

            <div className="country__data">
              <div className="div-wrap">
                <h3>{country.name.common}</h3>
                <h5>Capital: {country.capital}</h5>
                <h5>
                  Population: {new Intl.NumberFormat().format(country.population)}
                </h5>
                <h5>Latitude: {country.latlng[0]}</h5>
                <h5>Longitude: {country.latlng[1]}</h5>
                <Link className="link-style" to={`/${country.capital}`}>Weather Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCountries;
