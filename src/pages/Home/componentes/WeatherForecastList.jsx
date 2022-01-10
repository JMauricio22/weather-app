import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import WeatherForecast from "./WeatherForecast";

export default function WeatherForecastList({ forecast }) {
  return (
    <section className='container pt-lg-1 mb-5'>
      <Row>
        <Col xs={0} lg={{ span: 1 }} md={{ span: 0 }} />
        {forecast.map((weather) => (
          <Col
            xs={{
              span: 4,
              offset: 1,
            }}
            lg={{
              span: 2,
              offset: 0,
            }}
            md={{
              span: 4,
              offset: 0,
            }}
            className='gx-lg-2'
          >
            <WeatherForecast weather={weather} key={weather.id} />
          </Col>
        ))}
      </Row>
    </section>
  );
}

WeatherForecastList.propTypes = {
  forecast: PropTypes.array.isRequired,
};
