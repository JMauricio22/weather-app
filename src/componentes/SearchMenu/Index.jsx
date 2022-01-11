import React from "react";
import PropTypes from "prop-types";
import { faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import "./styles.scss";

export default function SearchMenu({ showMenu, toggleSearchMenu, children }) {
  return (
    <div
      className={`w-100 h-100 bg-primary position-absolute left-0 top-0 search-menu ${
        showMenu && "slide-in-left"
      }`}
    >
      <button className='times' onClick={toggleSearchMenu}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <Container className='mt-5 mb-3'>
        <Form>
          <Row className='m-0  p-0'>
            <Col xs={8} md={8} lg={8}>
              {/* <FontAwesomeIcon icon={faSearch} /> */}
              <Form.Control size='lg' type='text' />
            </Col>
            <Col xs={4} md={4} lg={4}>
              <Button size='lg' variant='warning'>
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <Container>{children}</Container>
    </div>
  );
}

SearchMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  toggleSearchMenu: PropTypes.func.isRequired,
};
