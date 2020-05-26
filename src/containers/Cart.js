import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import CartReview from "../components/CartReview";
import AddressBlock from "../components/AddressBlock";
import PriceDetailBlock from "../components/PriceDetailBlock";
import PlaceOrder from "../components/modal/PlaceOrder";
import { useSelector } from "react-redux";

export default function Cart() {
  const [modal, setModal] = useState(false);
  const { cart } = useSelector((state) => state);
  const toggle = () => setModal(!modal);
  return (
    <div className="p-1">
      <Row>
        <Col sm="8">
          <div className="my-3">
            <CartReview screen="lg" showAction={false} />
          </div>
        </Col>
        <Col>
          <AddressBlock />
          {cart.length !== 0 && <PriceDetailBlock openModal={toggle} />}
        </Col>
      </Row>
      <PlaceOrder modal={modal} toggle={toggle} />
    </div>
  );
}
