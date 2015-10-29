import React from 'react';
import { Link } from 'react-router';
import { Navbar, NavBrand, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class navbarComp extends React.Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <LinkContainer to="/home"><NavBrand>Razr9</NavBrand></LinkContainer>
          <Nav>
            <LinkContainer to="/home"><NavItem>Home</NavItem></LinkContainer>
            <LinkContainer to="/about"><NavItem>About</NavItem></LinkContainer>
          </Nav>
        </Navbar>
      </div>
      );
  }
};
