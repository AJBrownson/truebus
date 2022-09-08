import React from 'react'
import { Wrapper, Cards, Card, Card2, Container, P } from './Maps.styles'
import Coins from '../../Assets/Images/Coins.jpg'
import { FaCaretRight } from 'react-icons/fa'


const Maps = () => {
  return (
    <>
    <Wrapper>
        <h3>Map Guides</h3>
        <Cards>
            <Card>
                <img src={Coins} alt='a bunch of crypto coins' />
                <Container>
                    <p>Getting to stadiums and arenas on public transport</p>
                </Container>
            </Card>

            <Card2>
                <img src={Coins} alt='a bunch of crypto coins' />
                <Container>
                    <p>Getting to airports on public transport</p>
                </Container>
            </Card2>
        </Cards>
        <P><FaCaretRight /> view more</P>
    </Wrapper>
    </>
  )
}

export default Maps