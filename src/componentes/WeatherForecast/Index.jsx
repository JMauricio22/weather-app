import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
import { imagesMapper } from "../../utils/imagesMapper";
import convertCelsiusToFahrenheit from "../../utils/convertCelsiusToFahrenheit";

export default function WeatherForecast({ weather, isCelsius }) {
  const deg = isCelsius ? "°C" : "°F";

  return (
    <div
      className='bg-primary px-3 py-4 mt-4 mx-sm-auto mx-auto mx-lg-1'
      style={{ width: 120 }}
    >
      <p className='text-center fs-6'>
        {new Date(weather.applicable_date).toLocaleDateString("en-GB", {
          weekday: "short",
          day: "numeric",
          month: "short",
        })}
      </p>
      <div className='d-flex justify-content-center my-3'>
        <Image
          style={{ width: 50, height: 60 }}
          src={imagesMapper[weather.weather_state_abbr]}
          alt=''
          fluid={true}
        />
      </div>
      <div className='d-flex justify-content-between px-1'>
        <span className='fs-6'>
          {(isCelsius
            ? weather.max_temp
            : convertCelsiusToFahrenheit(weather.max_temp)
          ).toFixed(0)}
          {deg}
        </span>
        <span className='fs-6 text-secondary'>
          {(isCelsius
            ? weather.min_temp
            : convertCelsiusToFahrenheit(weather.min_temp)
          ).toFixed(0)}
          {deg}
        </span>
      </div>
    </div>
  );
}

WeatherForecast.propTypes = {
  weather: PropTypes.object.isRequired,
  isCelsius: PropTypes.bool.isRequired,
};
