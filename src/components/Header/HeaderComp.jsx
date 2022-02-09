import React from "react";
import {
  Nav,
  NavLink,
  NavItems,
  Item,
  Button,
  Span,
  Logo,
} from "../../styles/Styled";

const HeaderComp = ({ childComp }) => {
  return (
    <div>
      <Nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <Logo>
          <Span>e</Span>Sale
        </Logo>
        <NavItems>
          <Item>
            <NavLink href="/"> NEW </NavLink>
          </Item>
          <Item>
            <NavLink href="/"> MEN </NavLink>
          </Item>
          <Item>
            <NavLink href="/"> WOMEN </NavLink>
          </Item>
          <Item>
            <NavLink href="/">TRAVEL</NavLink>
          </Item>
          <Item>
            <Button>Sign Up</Button>
            <Button>Sign Up</Button>
          </Item>
          <Item>
            <i className="fa-solid fa-cart-shopping"></i>
          </Item>
        </NavItems>
      </Nav>
      {childComp}
    </div>
  );
};

export default HeaderComp;
