import React from "react";
import {
  NavLinked,
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
            <NavLinked href="/"> Policy and Cookie </NavLinked>
          </Item>
          <Item>
            <NavLinked href="/"> Policy Intellectual </NavLinked>
          </Item>
          <Item>
            <NavLinked href="/"> Property </NavLinked>
          </Item>
        </NavItems>
      </Foot>
    </div>
  );
};

export default Footer;
