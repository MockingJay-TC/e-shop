import React from "react";
import {
  Banner,
  BannerButton,
  BannerText,
  Container,
  Promo,
  Item1,
  Item2,
  Item3,
  ItemText,
  Shop,
  New,
  NewText,
} from "../../styles/Styled";

const Home = () => {
  return (
    <div>
      <Banner>
        <Container>
          <BannerText>
            Nice Watch <br />
            Cheaper Price
          </BannerText>
          <BannerButton>See More</BannerButton>
        </Container>
      </Banner>
      <Promo>
        <Item1>
          <ItemText>Shop Now</ItemText>
        </Item1>
        <Item2>
          <ItemText>Shop Now</ItemText>
        </Item2>
        <Item3>
          <ItemText>Shop Now</ItemText>
        </Item3>
      </Promo>
      <Shop>
        <New>
          <NewText>New Arrival</NewText>
        </New>
      </Shop>
    </div>
  );
};

export default Home;
