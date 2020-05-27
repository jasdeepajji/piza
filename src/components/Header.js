import React, { useState, Fragment, useCallback } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Profile from "./modal/Profile";
import Login from "./modal/Login";
import { logout } from "../actions/user";

export default function Header() {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [collapse, setCollapse] = useState(false);

  const [loginModal, setLoginModal] = useState(false);
  const toggleLogin = () => setLoginModal(!loginModal);

  const [profileModal, setProfileModal] = useState(false);
  const toggleProfile = () => setProfileModal(!profileModal);

  const signOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <Fragment>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/">
          Pizaa
        </NavbarBrand>
        <NavbarToggler onClick={() => setCollapse(!collapse)} />
        <Collapse isOpen={collapse} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/menu">
                Menu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/cart">
                Cart
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/order">
                Order
              </NavLink>
            </NavItem>
            {!user.islogin && (
              <NavItem>
                <NavLink
                  tag={Button}
                  color="primary"
                  onClick={() => setLoginModal(true)}
                  className="text-white font-weight-bold"
                >
                  Login
                </NavLink>
              </NavItem>
            )}
            {user.islogin && (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {user.name || ''}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={() => setProfileModal(true)}>
                    Profile
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={signOut}>Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            )}
          </Nav>
        </Collapse>
      </Navbar>
      <Login modal={loginModal} toggle={toggleLogin} />
      <Profile modal={profileModal} toggle={toggleProfile} />
    </Fragment>
  );
}
