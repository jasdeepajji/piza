import React, { Fragment } from "react";
import { Row, Col } from "reactstrap";
import BorderLabel from "../components/BorderLabel";
import MenuItem from "../components/MenuItem";
import AddressBlock from "../components/AddressBlock";
import { menu } from "../constants";
import CartReview from "../components/CartReview";
export default function Menu() {
  return (
    <div className="p-1 mt-2">
      <Row>
        <Col sm="8">
          {menu.map((menuItem) => (
            <Fragment key={menuItem.categoryId}>
              <BorderLabel label={menuItem.categoryName} />
              <Row>
                {menuItem.data.map((x) => (
                  <Col key={x.id} sm={6} md={4} xs={12}>
                    <MenuItem {...x} categoryId={menuItem.categoryId} />
                  </Col>
                ))}
              </Row>
            </Fragment>
          ))}
        </Col>
        <Col sm="4">
          <CartReview screen="sm" label="Review Cart" />
          <AddressBlock />
        </Col>
      </Row>
    </div>
  );
}
