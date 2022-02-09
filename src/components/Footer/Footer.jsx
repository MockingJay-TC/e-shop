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
const Footer = () => {
  return (
    <div>
      <Footer>
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
      </Footer>
    </div>
  );
};

export default Footer;
