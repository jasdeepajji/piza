import React from "react";
import { Row, Col, Card, CardBody, CardText } from "reactstrap";
import { useSelector } from "react-redux";
import moment from "moment";

export default function Order() {
  const { order, user } = useSelector((state) => state);
  return (
    <Row className="justify-content-center">
      {order.length !== 0 && (
        <Col sm="6" className="mt-3">
          {order.map((x) => (
            <Card key={x.orderId} className="shadow">
              <CardBody>
                <CardText className="d-flex justify-content-between mb-1 fs-14">
                  <b>OrderId: </b> {x.orderId}
                </CardText>
                <CardText className="d-flex justify-content-between mb-1 fs-14">
                  <b>Address: </b> {x.address}
                </CardText>
                <CardText className="d-flex justify-content-between mb-1 fs-14">
                  <b>Date: </b> {moment(x.orderId).format("DD/mm/yyyy")}
                </CardText>
                <CardText className="d-flex justify-content-between mb-1 fs-14">
                  <b>Amount: </b>{" "}
                  <span>
                    {x.totalAmount}
                    <b>(Total)</b> * {x.taxPercent}% = {x.GrandTotal}{" "}
                    <b>(Grand Total)</b>
                  </span>
                </CardText>
                <CardText className="d-flex justify-content-between mb-1 fs-14">
                  <b>Items: </b> {x.items.length}
                </CardText>
              </CardBody>
            </Card>
          ))}
        </Col>
      )}
      {order.length === 0 && (
        <Col m="6" className="mt-3">
          <Card>
            <CardBody>
              {!user.islogin && (
                <CardText>Please login to view order history</CardText>
              )}
              {user.islogin && <CardText>No item in order history</CardText>}
            </CardBody>
          </Card>
        </Col>
      )}
    </Row>
  );
}
