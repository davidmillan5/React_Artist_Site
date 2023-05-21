import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from 'react-bootstrap';
import { useState, useEffect } from 'react';

exports.BookBar = () => {
  return (
    <>
      <Container className="my-5 mx-auto px-5">
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Search For Books"
            type="input"
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                search();
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          ></FormControl>
          <Button onClick={search} className="btn-dark">
            Search
          </Button>
        </InputGroup>
      </Container>
    </>
  );
};
