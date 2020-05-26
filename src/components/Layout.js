import React, { Fragment } from "react";
import { Container } from 'reactstrap';
import Header from "./Header";

export const PublicLayout = ({ children }) => {
  return <Container fluid>{children}</Container>;
};

export const PrivateLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Container fluid>{children}</Container>
    </Fragment>
  );
};
