import React, { Fragment } from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { BlockHead, Flex } from "../style";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function AddressBlock() {
  const { user } = useSelector((state) => state);
  const changeAddress = () => {
    if (!user.islogin) {
      toast.error("Please login to update address");
      return;
    }
  };
  return (
    <Fragment>
      <BlockHead className="mt-3">Delivery address</BlockHead>
      <ListGroup className="shadow">
        <ListGroupItem>
          <Flex row justifyContent="space-between">
            <div>
              <b className="text-uppercase fs-12">Current Address</b>
              <p className="m-0 fs-12">
                {user.islogin
                  ? user.address
                  : "Ajit Nagar, Katra Ahluwalia, Amritsar"}
              </p>
            </div>
            {/* <div>
              <Button
                color="primary"
                className="btn-site-sm fs-12"
                onClick={changeAddress}
              >
                CHANGE
              </Button>
            </div> */}
          </Flex>
        </ListGroupItem>
      </ListGroup>
    </Fragment>
  );
}
