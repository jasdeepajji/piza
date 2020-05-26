import React, { useState, useEffect } from "react";
import {
  Row,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { CardSubtitle } from "../style";
import { sizes, crusts } from "../constants";
import { addToCart, removeFromCart } from "../actions/cart";

export default function MenuItem({ id, name, description, categoryId }) {
  const [size, setSize] = useState("");
  const [crust, setCrust] = useState("");

  const dispatch = useDispatch();
  const selectItem = useSelector((state) =>
    state.cart.filter((x) => x.id === id && x.categoryId === categoryId)
  );
  const pizzaSizes = sizes.find((x) => x.categoryId === categoryId);

  useEffect(() => {
    if (pizzaSizes && !size) {
      setSize(pizzaSizes.sizes[0].id);
    }
    if (!crust && crusts) {
      setCrust(crusts[0].id);
    }
  }, [pizzaSizes, size, crust]);

  const addItem = () => {
    dispatch(
      addToCart({
        categoryId,
        id,
        name,
        description,
        size,
        quantity: 1,
        crust,
      })
    );
  };

  const removeItem = () => {
    dispatch(
      removeFromCart({
        categoryId,
        id,
      })
    );
  };

  return (
    <Card className="my-2 shadow">
      <CardImg
        top
        width="100%"
        src="https://images.dominos.co.in/new_margherita_2502.jpg"
        alt="Pizza"
      />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{description}</CardSubtitle>
        <Row form>
          <FormGroup className="col-6">
            <Label for="size" className="fs-12 m-0">
              Size:
            </Label>
            <Input
              type="select"
              name="select"
              id="size"
              className="fs-12"
              selected={size}
              onChange={(e) => setSize(e.target.value)}
            >
              {pizzaSizes &&
                pizzaSizes.sizes.map((x, i) => (
                  <option key={i} value={x.id}>
                    {x.name} | {x.description}
                  </option>
                ))}
            </Input>
          </FormGroup>
          <FormGroup className="col-6">
            <Label for="exampleSelect" className="fs-12 m-0">
              Crust:
            </Label>
            <Input
              type="select"
              name="select"
              id="crust"
              className="fs-12"
              selected={crust}
              onChange={(e) => setCrust(e.target.value)}
            >
              {crusts.map((x, i) => (
                <option key={i} value={x.id}>
                  {x.name}
                </option>
              ))}
            </Input>
          </FormGroup>
        </Row>
        {selectItem.length === 0 && (
          <Button
            outline
            color="primary"
            className="btn-site-sm float-right"
            onClick={() => addItem()}
          >
            Add to cart
          </Button>
        )}
        {selectItem.length !== 0 && (
          <ButtonGroup className="float-right">
            <Button outline color="primary" className="btn-site-sm" onClick={() => removeItem()}>
              -
            </Button>
            <Button outline color="primary" className="btn-site-sm">
              {selectItem.reduce((acc, x) => acc + x.quantity, 0)}
            </Button>
            <Button outline color="primary" className="btn-site-sm" onClick={() => addItem()}>
              +
            </Button>
          </ButtonGroup>
        )}
      </CardBody>
    </Card>
  );
}
