import React from "react";
import {
  NavLink,
  NavItems,
  Item,
  Span,
  Logo,
  Foot,
  Copy,
} from "../../styles/Styled";
const Footer = () => {
  return (
    <div>
      <Foot>
        <Logo>
          <Span>e</Span>Sale
        </Logo>
        <Copy>Copyright ©2018 monsterMuz.Inc</Copy>
        <NavItems>
          <Item>
            <NavLink href="/"> Policy and Cookie </NavLink>
          </Item>
          <Item>
            <NavLink href="/"> Policy Intellectual </NavLink>
          </Item>
          <Item>
            <NavLink href="/"> Property </NavLink>
          </Item>
        </NavItems>
      </Foot>
    </div>
  );
};

export default Footer;
