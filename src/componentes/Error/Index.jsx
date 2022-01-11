import React from "react";
import { Alert, Container } from "react-bootstrap";

export default function Index() {
  return (
    <Container className='mt-5'>
      <Alert variant='danger'>
        <Alert.Heading>Error!</Alert.Heading>
        <p>An error occurred when the data was searched 😢.</p>
      </Alert>
    </Container>
  );
}
