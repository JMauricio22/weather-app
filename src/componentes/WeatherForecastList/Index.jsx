import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import WeatherForecast from "../WeatherForecast/Index";
import Temperature from "../Temperature/Index";

export default function WeatherForecastList({
  forecast,
  isCelsius,
  setIsCelsius,
}) {
  return (
    <section className='container pt-lg-1 mb-5'>
      <Row>
        <Col xs={{ span: 2, offset: 10 }}>
          <Temperature isCelsius={isCelsius} setIsCelsius={setIsCelsius} />
        </Col>
      </Row>
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
            <WeatherForecast weather={weather} isCelsius={isCelsius} />
          </Col>
        ))}
      </Row>
    </section>
  );
}

WeatherForecastList.propTypes = {
  forecast: PropTypes.array.isRequired,
  isCelsius: PropTypes.bool.isRequired,
  setIsCelsius: PropTypes.func.isRequired,
};
