import React from "react";
import { FaCaretRight } from "react-icons/fa";
import Coins from "../../Assets/Images/Coins.jpg";
import { Wrapper, Cards, Card, Card2, Container, P } from "./Explore.styles";
import { Link } from "react-router-dom";


const Explore = () => {
  return (
    <>
      <Wrapper>
        <h3>Explore more with TrueBus</h3>
        <Cards>
          <Card>
            <img src={Coins} alt="bunch of crypto coins" />
            <Container>
              <p>Destinations</p>
            </Container>
          </Card>

          <Card2>
            <img src={Coins} alt="bunch of crypto coins" />
            <Container>
              <p>Terminal routes</p>
            </Container>
          </Card2>
        </Cards>
        <Link to='/account'> <P><FaCaretRight /> view more</P> </Link>
      </Wrapper>
    </>
  );
};

export default Explore;
