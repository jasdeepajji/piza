import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updateProfile } from "../../actions/user";

export default function Profile({ modal, toggle }) {
  const { user } = useSelector((state) => state);
  const [name, setName] = useState(user.name);
  const [number, setNumber] = useState(user.number);
  const [email, setEmail] = useState(user.email || "");

  const dispatch = useDispatch();

  const submit = () => {
    if (!name.trim().length) {
      toast.error("Name is required");
    }
    if (!number) {
      toast.error("Number is required");
    }
    if (!email.trim().length) {
      toast.error("Email is required");
    }
    dispatch(
      updateProfile({
        email,
        name,
        number,
      })
    );
    toggle();
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader>Profile</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              id="name"
              placeholder="Enter here"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Number</Label>
            <Input
              type="number"
              id="number"
              placeholder="Enter here"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={submit}>
          Submit
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}
