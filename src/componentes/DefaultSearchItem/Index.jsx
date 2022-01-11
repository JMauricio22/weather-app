import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export default function DefaultSearchItem({ city, onChangeLocation }) {
  return (
    <div
      className='place-btn d-flex justify-content-between align-items-center'
      onClick={onChangeLocation}
    >
      <span>{city}</span>
      <span className='fs-4'></span>
    </div>
  );
}

DefaultSearchItem.propTypes = {
  city: PropTypes.string.isRequired,
  onChangeLocation: PropTypes.func.isRequired,
};
