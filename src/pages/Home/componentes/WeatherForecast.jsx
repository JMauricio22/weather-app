import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
import { imagesMapper } from "../utils/imagesMapper";

export default function WeatherForecast({ weather }) {
  return (
    <div
      className='bg-primary px-3 py-4 mt-4 mx-md-auto'
      style={{ width: 118 }}
    >
      <p className='text-center'>
        {new Date(weather.applicable_date).toLocaleDateString("en-GB", {
          weekday: "short",
          day: "numeric",
          month: "short",
        })}
      </p>
      <div className='d-flex justify-content-center my-3'>
        <Image
          style={{ width: 50, height: 50 }}
          src={imagesMapper[weather.weather_state_abbr]}
          alt=''
          fluid={true}
        />
      </div>
      <div className='d-flex justify-content-between px-1'>
        <span className='fs-6'>{Number(weather.max_temp).toFixed(0)}°C</span>
        <span className='fs-6 text-secondary'>
          {Number(weather.min_temp).toFixed(0)}°C
        </span>
      </div>
    </div>
  );
}

WeatherForecast.propTypes = {
  weather: PropTypes.object.isRequired,
};
