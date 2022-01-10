import React from "react";
import PropTypes from "prop-types";
import { Button, Image, Row, Col } from "react-bootstrap";
import { imagesMapper } from "../utils/imagesMapper";

export default function Time({ currentWeather, title }) {
  return (
    <section className='ps-3 pe-3 pt-3 pb-5 h-lg-100'>
      <Row>
        <Col xs={12} className='mb-5'>
          <Button variant='secondary'>Search for places</Button>
        </Col>
        <Col xs={12} className='mb-5'>
          <div className='d-flex justify-content-center'>
            <Image
              src={imagesMapper[currentWeather.weather_state_abbr]}
              alt=''
              style={{ width: 150, height: 170 }}
            />
          </div>
        </Col>
        <Col className='text-center'>
          <p className='display-1'>
            {" "}
            {Number(currentWeather.the_temp).toFixed(2)} °C
          </p>
          <p className='fs-2 fw-bold'>{currentWeather.weather_state_name}</p>
          <p className='fs-6 text-secondary'>
            Today -{" "}
            {new Date().toLocaleDateString("en-GB", {
              weekday: "short",
              month: "short",
              day: "numeric",
            })}{" "}
          </p>
          <p className='fs-6 text-secondary'>{title}</p>
        </Col>
      </Row>
    </section>
  );
}

Time.propTypes = {
  title: PropTypes.string.isRequired,
  currentWeather: PropTypes.object,
};
