import React from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";
import WeatherForecast from "./WeatherForecast";

export default function WeatherForecastList({ forecast }) {
  return (
    <section className='container mt-5 mb-5 pe-4 ps-4'>
      <Row>
        {forecast.map((weather) => (
          <WeatherForecast weather={weather} key={weather.id} />
        ))}
      </Row>
    </section>
  );
}

WeatherForecastList.propTypes = {
  forecast: PropTypes.array.isRequired,
};
