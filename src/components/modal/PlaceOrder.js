import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ListGroup,
  ListGroupItem,
  FormGroup,
  Input,
  Button,
  Label,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { processAmount, calculateTax } from "../../utils/common";
import { sizes, taxPercent, deliveryCost } from "../../constants";
import { confirmOrder } from "../../actions/order";
import { toast } from "react-toastify";

export default function PlaceOrder({ modal, toggle }) {
  const dispatch = useDispatch();
  const { cart, user } = useSelector((state) => state);
  const totalAmount = processAmount(cart, sizes);
  const taxAmount = calculateTax(totalAmount, taxPercent).toFixed(2);
  const GrandTotal = parseFloat(totalAmount) + parseFloat(taxAmount);
  const [paymentType, setPaymentType] = useState("card");
  const [orderId] = useState(Date.now());

  const submit = () => {
    dispatch(
      confirmOrder({
        orderId,
        type: paymentType,
        GrandTotal,
        totalAmount,
        address: user.address,
        deliveryCost,
        taxPercent,
      })
    );
    toggle();
    toast.success("Order Placed");
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader>Place Order</ModalHeader>
      <ModalBody>
        <ListGroup flush>
          <ListGroupItem className="d-flex">
            <b className="fs-14 m-0 mr-3">Order Id:</b>
            <p className="fs-14 mb-0">{orderId}</p>
          </ListGroupItem>
          <ListGroupItem className="d-flex">
            <b className="fs-14 m-0 mr-3">Items:</b>
            <p className="fs-14 mb-0">{cart.length}</p>
          </ListGroupItem>
          <ListGroupItem className="d-flex">
            <b className="fs-14 m-0 mr-3">Address:</b>
            <p className="fs-14 mb-0">{user.address}</p>
          </ListGroupItem>
          <ListGroupItem className="d-flex">
            <b className="fs-14 m-0 mr-3">Amount:</b>
            <p className="fs-14 mb-0">{GrandTotal}</p>
          </ListGroupItem>
          <ListGroupItem className="d-flex">
            <b className="fs-14 m-0 mr-3">Payment Method:</b>
            <FormGroup check className="mr-3">
              <Label check>
                <Input
                  type="radio"
                  name="paymentType"
                  value="card"
                  checked={paymentType === "card"}
                  onChange={(e) => setPaymentType(e.target.value)}
                />
                Card
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="paymentType"
                  value="cash"
                  checked={paymentType === "cash"}
                  onChange={(e) => setPaymentType(e.target.value)}
                />
                Cash
              </Label>
            </FormGroup>
          </ListGroupItem>
          {paymentType === "card" && (
            <ListGroupItem>
              <FormGroup>
                <Label for="cardNumber">
                  <b className="fs-14 m-0 mr-3">Card Number</b>
                </Label>
                <Input
                  type="number"
                  id="cardNumber"
                  placeholder="XXXXXXXXXXXXXX"
                />
              </FormGroup>
            </ListGroupItem>
          )}
        </ListGroup>
        <Button color="primary" block onClick={submit}>
          Confirm Order
        </Button>
      </ModalBody>
    </Modal>
  );
}
