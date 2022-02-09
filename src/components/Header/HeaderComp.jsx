import React from "react";
import {
  Nav,
  NavLink,
  NavItems,
  Item,
  Button,
  Span,
  Logo,
  Input
} from "../../styles/Styled";

const HeaderComp = ({ childComp }) => {
  return (
    <div>
      <Nav>
        <Input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
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
            <i class="fa-solid fa-cart-shopping"></i>
          </Item>
        </NavItems>
      </Nav>
      {childComp}
    </div>
  );
};

export default HeaderComp;
