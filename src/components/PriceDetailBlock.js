import React, { Fragment } from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { BlockHead, Flex } from "../style";
import { calculateTax, processAmount } from "../utils/common";
import { taxPercent, sizes, deliveryCost } from "../constants";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import _ from "lodash";

export default function PriceDetailBlock({ openModal }) {
  const { cart, user } = useSelector((state) => state);
  const totalAmount = processAmount(cart, sizes);
  const taxAmount = calculateTax(totalAmount, taxPercent).toFixed(2);
  const GrandTotal = _.sum([
    parseFloat(totalAmount),
    parseFloat(taxAmount),
    parseFloat(deliveryCost),
  ]);
  const submit = () => {
    if (!user.islogin) {
      toast.error("Please login to place login");
      return;
    }
    openModal();
  };
  return (
    <Fragment>
      <BlockHead className="mt-3">Price Details</BlockHead>
      <ListGroup flush className="shadow">
        <ListGroupItem>
          <Flex
            row
            smRow
            justifyContent="space-between"
            smJustifyContent="space-between"
          >
            <BlockHead className="m-0">Sub Total</BlockHead>
            <BlockHead className="m-0">﹩{totalAmount.toFixed(2)}</BlockHead>
          </Flex>
        </ListGroupItem>
        <ListGroupItem>
          <Flex
            row
            smRow
            justifyContent="space-between"
            smJustifyContent="space-between"
          >
            <BlockHead className="m-0">TAX</BlockHead>
            <BlockHead className="m-0">﹩{taxAmount}</BlockHead>
          </Flex>
        </ListGroupItem>
        <ListGroupItem>
          <Flex
            row
            smRow
            justifyContent="space-between"
            smJustifyContent="space-between"
          >
            <BlockHead className="m-0">Delivery</BlockHead>
            <BlockHead className="m-0">﹩{deliveryCost.toFixed(2)}</BlockHead>
          </Flex>
        </ListGroupItem>
        <ListGroupItem>
          <Flex
            row
            smRow
            justifyContent="space-between"
            smJustifyContent="space-between"
          >
            <BlockHead className="m-0">Grand Total</BlockHead>
            <BlockHead className="m-0">﹩{GrandTotal}</BlockHead>
          </Flex>
        </ListGroupItem>
        <ListGroupItem>
          <Button color="success" block onClick={() => submit()}>
            PLACE ORDER
          </Button>
        </ListGroupItem>
      </ListGroup>
    </Fragment>
  );
}
