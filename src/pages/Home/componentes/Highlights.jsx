import React from "react";
import propTypes from "prop-types";
import { Row, Col, ProgressBar } from "react-bootstrap";

export default function Hightlights({ weather }) {
  return (
    <section className='container mb-5'>
      <h2 className='ms-3 display-6 fw-normal mb-4'>Today's highlights</h2>
      <div className='container'>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <div
              className='bg-primary mt-lg-0 p-4 text-center mb-4 d-flex justify-content-center align-items-center flex-column'
              style={{ height: 264 }}
            >
              <div>
                <p className='fs-5 fw-lighter'>Wind Status</p>
                <p className='display-2'>
                  {Number(weather.wind_speed).toFixed(2)} mph
                </p>
                <p>WSW</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div
              className='bg-primary p-4 text-center mb-4 d-flex justify-content-center align-items-center flex-column'
              style={{ height: 264 }}
            >
              <p className='fs-5 fw-lighter'>Humidity</p>
              <p className='display-2'>
                {Number(weather.humidity).toFixed(0)}%
              </p>
              <div className='mx-auto' style={{ width: 250 }}>
                <ProgressBar now={weather.humidity} variant='warning' />
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className='bg-primary p-4 text-center mb-4 '>
              <p className='fs-5 fw-lighter'>Visibility</p>
              <p className='display-2'>
                {Number(weather.visibility).toFixed(1)} miles
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className='bg-primary p-4 text-center mb-4 '>
              <p className='fs-5 fw-lighter'>Air Presure</p>
              <p className='display-2'>
                {Number(weather.air_pressure).toFixed(0)} mb
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

Hightlights.propTypes = {
  weather: propTypes.object.isRequired,
};
