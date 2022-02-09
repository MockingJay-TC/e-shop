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
  Item4,
  Item5,
  Item6,
  Item7,
  Item8,
  Item9,
  ItemText,
  Shop,
  New,
  NewText,
  ShopText,
  Text,
  Position,
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
        {/* New Arrival Category */}
        <NewText>New Arrival</NewText>
        <New>
          <Item4>
            <Position>
              <ShopText>
                <Text>Mc Fly</Text>
                <Text>$170</Text>
              </ShopText>
            </Position>
          </Item4>
          <Item5>
            <Position>
              <ShopText>
                <Text>Bearnest</Text>
                <Text>$100</Text>
              </ShopText>
            </Position>
          </Item5>
          <Item6>
            <Position>
              <ShopText>
                <Text>Barked</Text>
                <Text>$150</Text>
              </ShopText>
            </Position>
          </Item6>
        </New>

        {/* Men Category */}
        <NewText>Men</NewText>
        <New>
          <Item7>
            <Position>
              <ShopText>
                <Text>Fleko</Text>
                <Text>$250</Text>
              </ShopText>
            </Position>
          </Item7>
          <Item8>
            <Position>
              <ShopText>
                <Text>Bean</Text>
                <Text>$300</Text>
              </ShopText>
            </Position>
          </Item8>
          <Item9>
            <Position>
              <ShopText>
                <Text>Feloi</Text>
                <Text>$180</Text>
              </ShopText>
            </Position>
          </Item9>
        </New>
      </Shop>
    </div>
  );
};

export default Home;
