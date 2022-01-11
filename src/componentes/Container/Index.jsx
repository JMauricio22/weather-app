import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

export default function Container({ leftComponent, rightComponent }) {
  return (
    <Row className='m-0'>
      <Col xs={12} lg={4} md={12} className='p-0'>
        {leftComponent}
      </Col>
      <Col xs={12} lg={8} md={12} className='p-0'>
        {rightComponent}
      </Col>
    </Row>
  );
}

Container.propTypes = {
  leftComponent: PropTypes.element.isRequired,
  rightComponent: PropTypes.element.isRequired,
};
