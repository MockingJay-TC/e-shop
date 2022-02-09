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
  @media (max-width: 1140px) {
    margin-right: 1rem;
    font-size: 1rem;
  }
  @media (max-width: 990px) {
    margin-right: 0.1rem;
    font-size: 1rem;
  }
  @media (max-width: 858px) {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #fff;
    top: 5rem;
    left: -100%;
    text-align: center;
    transition: all 0.5s;
    z-index: 99999;
  }
`;

export const Item = styled.li`
  display: inline-block;
  line-height: 5rem;
  margin: 0 2rem;
  font-weight: 500;

  @media (max-width: 858px) {
    display: block;
    margin: 3.125rem 0;
    line-height: 30px;
  }
  @media (max-width: 1140px) {
    margin: 0 1rem;
    font-size: 1rem;
  }
  @media (max-width: 990px) {
    margin: 0 1rem;
    font-size: 1rem;
  }
`;

export const NavLink = styled.a`
  font-size: 1.25rem;
  color: white;
  @media (max-width: 858px) {
    color: tomato;
  }
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
    background-color: tomato;
    border: 2px solid tomato;
  }
  &:hover {
    color: white;
    transition: 0.4s ease-in-out;
    background: #008aff;
    border: 2px solid #008aff;
  }
`;

export const Span = styled.span`
  color: tomato;
`;

export const Logo = styled.div`
  display: inline-block;
  padding: 0 100px;
  line-height: 5rem;
  color: white;
  font-size: 2rem;
  @media (max-width: 858px) {
    padding: 0 50px;
  }
  @media (max-width: 1140px) {
    padding: 0 50px;
  }
  @media (max-width: 990px) {
    padding: 0 50px;
  }
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
export const Item4 = styled(PromoItem)`
  background-image: url(Assets/images/image4.jpg);
`;
export const Item5 = styled(PromoItem)`
  background-image: url(Assets/images/image5.jpg);
`;
export const Item6 = styled(PromoItem)`
  background-image: url(Assets/images/image6.jpg);
`;
export const Item7 = styled(PromoItem)`
  background-image: url(Assets/images/image7.jpg);
`;
export const Item8 = styled(PromoItem)`
  background-image: url(Assets/images/image8.jpg);
`;
export const Item9 = styled(PromoItem)`
  background-image: url(Assets/images/image9.jpg);
`;
export const ItemText = styled.h4`
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 8px 16px;
  border: 3px solid tomato;
  cursor: pointer;
`;

// Shop
export const Shop = styled.div`
  width: 90%;
  margin: 50px auto;
`;

export const New = styled(Promo)`
  margin: 40px 0px;
  gap: 8px;
`;

export const NewText = styled.span`
  border-bottom: 8px solid tomato;
  font-size: 32px;
`;

export const ShopText = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 858px) {
    display: block;
  }
`;

export const Text = styled.h4`
  padding: 8px 16px;
  text-transform: uppercase;
  border: 3px solid tomato;
  cursor: pointer;
  &:not(:last-child) {
    color: white;
    border: none;
    margin-right: 100px;
  }
  @media (max-width: 858px) {
    display: block;
    text-align: center;
    &:not(:last-child) {
      margin: 0px;
    }
  }
`;
export const Position = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

// Footer

export const Foot = styled(Nav)`
  background-color: #000;
`;

export const Copy = styled.span`
  color: white;
  fonst-size: 2rem;
`;
