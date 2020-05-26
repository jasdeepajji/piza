import React, { Fragment } from "react";
import {
  Button,
  ListGroup,
  ListGroupItem,
  ButtonGroup,
  Card,
  CardBody,
  CardText,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { BlockHead, Flex } from "../style";
import { processCart, getSize, getCrust, processAmount } from "../utils/common";
import { sizes, crusts } from "../constants";
import { useHistory } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cart";

function CartReview({ screen = "lg", showAction = true }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  const data = processCart(_.cloneDeep(cart));
  const totalAmount = processAmount(data, sizes);

  const addItem = ({
    categoryId,
    id,
    name,
    description,
    size,
    quantity,
    crust,
  }) => {
    dispatch(
      addToCart({ categoryId, id, name, description, size, quantity, crust })
    );
  };

  const removeItem = ({ categoryId, id }) => {
    dispatch(removeFromCart({ categoryId, id }));
  };

  return (
    <Fragment>
      <BlockHead className="mt-3">Review Cart</BlockHead>
      {cart.length !== 0 && (
        <ListGroup className="shadow">
          {data.map((x, i) => {
            const items = x.list ? x.list.length : 1;
            const size = getSize(sizes, x.categoryId, x.size);
            const crust = getCrust(crusts, x.categoryId, x.crust);
            return (
              <ListGroupItem
                key={i}
                className={`${
                  screen === "lg" ? "d-flex justify-content-between" : ""
                }`}
              >
                <Flex
                  row
                  smRow
                  justifyContent="space-between"
                  smJustifyContent="space-between"
                >
                  <div className="mr-3">
                    <img
                      src="https://images.dominos.co.in/new_margherita_2502.jpg"
                      alt="Pizza"
                      width="100"
                      height="60"
                    />
                  </div>
                  <div>
                    <b className="text-uppercase fs-14">{x.name}</b>
                    <p className="m-0 fs-12">{x.description}</p>
                    <b className="text-uppercase fs-12">
                      {size && size.name} | {crust && crust.name}
                    </b>
                  </div>
                </Flex>
                <Flex
                  reverse={screen === "lg" ? 'column-reverse' : 'row'}
                  row
                  smRow
                  justifyContent="space-between"
                  smJustifyContent="space-between"
                  className="mt-2"
                >
                  <ButtonGroup>
                    <Button
                      outline
                      color="primary"
                      className="btn-site-sm"
                      onClick={() => removeItem(x)}
                    >
                      -
                    </Button>
                    <Button outline color="primary" className="btn-site-sm">
                      {items}
                    </Button>
                    <Button
                      outline
                      color="primary"
                      className="btn-site-sm"
                      onClick={() => addItem(x)}
                    >
                      +
                    </Button>
                  </ButtonGroup>
                  <b className="fs-14">﹩{size ? size.price : 0}</b>
                </Flex>
              </ListGroupItem>
            );
          })}
          {showAction && <ListGroupItem>
            <Flex row justifyContent="space-between" className="mb-2">
              <b className="fs-16">Subtotal</b>
              <b className="text-uppercase fs-16">﹩ {totalAmount}</b>
            </Flex>
            <Button color="primary" block onClick={() => history.push("/cart")}>
              Checkout
            </Button>
          </ListGroupItem>}
        </ListGroup>
      )}
      {cart.length === 0 && (
        <Card>
          <CardBody>
            <CardText>No Item in the cart</CardText>
          </CardBody>
        </Card>
      )}
    </Fragment>
  );
}

export default React.memo(CartReview);
