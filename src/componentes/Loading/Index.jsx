import React from "react";
import { Spinner } from "react-bootstrap";

export default function Index() {
  return (
    <div className='vw-100 vh-100 d-flex justify-content-center align-items-center'>
      <Spinner animation='border' role='status' variant='success'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    </div>
  );
}
