import React, { useRef } from "react";
import PropTypes from "prop-types";
import { faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Form,
  Row,
  Col,
  Button,
  Container,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "./styles.scss";

export default function SearchMenu({
  showMenu,
  toggleSearchMenu,
  children,
  onSearch,
}) {
  const inputSearchRef = useRef();

  return (
    <div
      className={`w-100 h-100 bg-info position-absolute left-0 top-0 search-menu ${
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
              <InputGroup>
                <InputGroup.Text
                  id='basic-addon1'
                  className='bg-transparent border-end-0'
                >
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
                <FormControl
                  size='lg'
                  type='text'
                  placeholder='Search location'
                  className='border-start-0 outline-none shadow-none border-color-dark'
                  ref={inputSearchRef}
                />
              </InputGroup>
            </Col>
            <Col xs={4} md={4} lg={4}>
              <Button
                size='lg'
                variant='primary'
                onClick={() => onSearch(inputSearchRef.current.value)}
              >
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
