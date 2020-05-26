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
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../../actions/user";

export default function Login({ modal, toggle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submit = () => {
    if (!email.trim().length) {
      toast.error("Please Enter email");
      return;
    }
    if (!password.trim().length) {
      toast.error("Please Enter email");
      return;
    }
    dispatch(
      login({ email, password }, (status) => {
        if (status) {
          toast.success('Successfully Login');
        } else {
          toast.error('Invalid email and password');
        }
        toggle();
      })
    );
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader>Login</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input
              type="email"
              name="email"
              id="Email"
              placeholder="Enter Here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input
              type="password"
              name="password"
              id="Password"
              placeholder="Enter Here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => submit("/menu")}>
          Login
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}
