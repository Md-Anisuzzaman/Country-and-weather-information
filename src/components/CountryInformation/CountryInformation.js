import React, { useEffect, useState } from "react";
import './CountryInformation.css'
import { Link, useParams } from "react-router-dom";

const CountryInfo = () => {
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { capital } = useParams();


  useEffect(() => {
    const getCountryByName = async () => {
      try {
        const getData = await fetch(`http://api.weatherstack.com/current?access_key=5caf3368ebdf626ba51c5bbefd7caa76&query=/${capital}`);

        if (!getData.ok) throw new Error("sorry not found write the correct one");

        const data = await getData.json();
        setWeather(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };
    getCountryByName();

  }, []);
  console.log(weather);
  return (
    <div className="country_body">
      <div className="country_wrapper">
        {isLoading && !error && <h4>Loading........</h4>}
        {error && !isLoading && { error }}
        {
          <div className="country_container">
            <div className="country_img">
              <img src={weather?.current?.weather_icons[0]} alt="" />
            </div>
            <div className="country_info">
              <h3>{weather?.location?.country}</h3>
              <h3>{weather?.location?.name}</h3>
              <div className="country_left">
                <h3>
                  Temparature: <span>{weather?.current?.temperature}</span>
                </h3>
                <h3>
                  Wind Speed: <span>{weather?.current?.wind_speed}</span>
                </h3>
                <h3>
                  Precip: <span>{weather?.current?.precip}</span>
                </h3>
              </div>
            </div>
          </div>
        }
      </div>
      <button className="back_home">
        <Link className="home_route" to="/">Home</Link>
      </button>
    </div>
  );
};

export default CountryInfo;
