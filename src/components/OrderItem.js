import React from "react";
import {
  Row,
  Col,
  CardBody,
  CardTitle,
  Button,
  ButtonGroup,
  CardText,
} from "reactstrap";
import { Card, CardImg, CardSubtitle, Flex } from "../style";


export default function OrderItem() {
  return (
    <Card className="shadow">
      <CardImg
        src="https://images.dominos.co.in/new_margherita_2502.jpg"
        alt="Pizza"
      />
      <CardBody>
        <Row>
          <Col md="8" sm="12" xs="12">
            <CardTitle>Margherita</CardTitle>
            <CardText>
              Classic delight with 100% real mozzarella cheese
            </CardText>
            <CardSubtitle>Medium | New Hand Tossed</CardSubtitle>
          </Col>
          <Col md="4" sm="12" xs="12">
            <Flex
              smRow
              alignItems="flex-end"
              smAlignItems="center"
              smJustifyContent="space-between"
              className="mt-xs-3"
            >
              <CardText className="mb-xs-0">₹ 199.00</CardText>
              <ButtonGroup>
                <Button outline color="primary" className="btn-site-sm">
                  -
                </Button>
                <Button outline color="primary" className="btn-site-sm">
                  1
                </Button>
                <Button outline color="primary" className="btn-site-sm">
                  +
                </Button>
              </ButtonGroup>
            </Flex>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}
