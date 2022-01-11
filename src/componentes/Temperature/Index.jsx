import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

export default function Index({ isCelsius, setIsCelsius }) {
  return (
    <div className='my-4'>
      <Button
        variant={isCelsius ? "light" : "secondary"}
        className='rounded-circle me-2'
        style={{ boxShadow: "none" }}
        onClick={() => setIsCelsius(true)}
      >
        °C
      </Button>
      <Button
        variant={isCelsius ? "secondary" : "light"}
        className='rounded-circle'
        style={{ boxShadow: "none" }}
        onClick={() => setIsCelsius(false)}
      >
        °F
      </Button>
    </div>
  );
}

Index.propTypes = {
  isCelsius: PropTypes.bool.isRequired,
  setIsCelsius: PropTypes.func.isRequired,
};
