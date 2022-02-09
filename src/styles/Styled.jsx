import styled from "styled-components";

// NavBar
export const Nav = styled.nav`
  background-color: #b2b1b9;
  width: 100%;
  z-index: 9999;
  height: 5rem;
  font-family: "Poppins";
`;

export const NavItems = styled.ul`
  float: right;
  margin-right: 1.875rem;
  @media (max-width: 858px) {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #fff;
    top: 8rem;
    left: -100%;
    text-align: center;
    transition: all 0.5s;
  }
`;

export const Item = styled.li`
  display: inline-block;
  line-height: 5rem;
  margin: 0 2rem;
  font-weight: 500;
`;

export const NavLink = styled.a`
  font-size: 1.25rem;
  color: white;
`;

export const Button = styled.button`
  padding: 5px;
  font-size: 1.2rem;
  border-radius: 5px;
  outline: none;
  border: 2px solid #ceecec;
  box-shadow: 0px 0px 5px 0.2px rgba(0, 0, 0, 0.3);
  transition: 0.4s ease-in-out;
  &:not(:first-child) {
    margin: 0 1rem;
    background-color: red;
    border: 2px solid red;
  }
  &:hover {
    color: white;
    transition: 0.4s ease-in-out;
    background: #008aff;
    border: 2px solid #008aff;
  }
`;

export const Span = styled.span`
  color: red;
`;

export const Logo = styled.div`
  display: inline-block;
  padding: 0 100px;
  line-height: 5rem;
  font-size: 2rem;
`;

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label`
  font-size: 1.875rem;
  color: white;
  float: right;
  line-height: 5rem;
  margin-right: 2rem;
  display: none;

  @media (max-width: 858px) {
    display: block;
  }
`;

// Banner
export const Banner = styled.div`
  background-image: url(Assets/images/banner.jpg);
  background-size: cover;
  background-position: center center;
  top: 100%;
  width: 100%;
  height: 100vh;
`;
export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
`;
export const BannerText = styled.h1`
  justify-items: center;
  margin: 15px 0px;
  padding: 10px 20px;
  border-radius: 8px;
  background: #000;
  opacity: 0.6;
  font-size: 3rem;
  color: white;
  @media (max-width: 858px) {
    font-size: 1.8rem;
    padding: 20px 5px;
    margin: 15px 0px;
  }
`;
export const BannerButton = styled.button`
  padding: 12px 40px;
  font-size: 2rem;
  color: white;
  border-radius: 5px;
  outline: none;
  background: tomato;
  border: 2px solid tomato;
  box-shadow: 0px 0px 5px 0.2px rgba(0, 0, 0, 0.3);
  transition: 0.4s ease-in-out;
  &:hover {
    color: white;
    transition: 0.4s ease-in-out;
    background: #008aff;
    border: 2px solid #008aff;
  }
  @media (max-width: 858px) {
    font-size: 1.8rem;
    padding: 20px 28px;
    margin: 15px 0px;
  }
`;

// Promo
export const Promo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 858px) {
    display: block;
  }
`;
export const PromoItem = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
  color: tomato;
  background-size: cover;
  background-position: center center;
  height: 370px;
  width: 100%;
  position: relative;

  @media (max-width: 858px) {
    display: block;
  }
`;

export const Item1 = styled(PromoItem)`
  background-image: url(Assets/images/image1.jpg);
`;
export const Item2 = styled(PromoItem)`
  background-image: url(Assets/images/image2.jpg);
`;
export const Item3 = styled(PromoItem)`
  background-image: url(Assets/images/image3.jpg);
`;
export const ItemText = styled.h4`
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 8px 16px;
  border: 3px solid tomato;
  cursor: pointer;
`;
