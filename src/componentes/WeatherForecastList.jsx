import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import WeatherForecast from "./WeatherForecast";

export default function WeatherForecastList({ forecast }) {
  return (
    <section className='container pt-lg-1 mb-5'>
      <Row className='justify-content-lg-around'>
        {forecast.map((weather) => (
          <Col
            xs={{
              span: 6,
              offset: 0,
            }}
            lg={{
              span: 2,
              offset: 0,
            }}
            md={{
              span: 4,
              offset: 0,
            }}
            className='gx-2'
            key={weather.id}
          >
            <WeatherForecast weather={weather} />
          </Col>
        ))}
      </Row>
    </section>
  );
}

WeatherForecastList.propTypes = {
  forecast: PropTypes.array.isRequired,
};
