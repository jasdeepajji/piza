import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";
import { useHistory } from "react-router-dom";
export default function Login() {
  const history = useHistory();
  return (
    <Row className="justify-content-center align-items-center vh-100">
      <Col sm="3">
        <Card>
          <CardBody>
            <CardTitle className="text-center">Login</CardTitle>
            <Form>
              <FormGroup>
                <Label for="Email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="Email"
                  placeholder="Enter Here"
                />
              </FormGroup>
              <FormGroup>
                <Label for="Password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="Password"
                  placeholder="Enter Here"
                />
              </FormGroup>
            </Form>
            <Button color="primary" onClick={()=>history.push('/menu')}>Login</Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}
