import React from 'react'
import Hero from '../../Assets/Images/hero-image.png'
import { HeroComponent, Wrapper, Div, Card } from './Home.styles'
import Buttons from '../../Components/DropdownButton/Button'
import { FaAngleRight } from 'react-icons/fa'
import Status from '../../Components/StatusSnippet/Status'
import Explore from '../../Components/Explore/Explore'
import Maps from '../../Components/Maps/Maps'
import SideBar from '../../Layout/SideBar/SideBar.tsx'



const Home = () => {
  
  return (
    <>

    {/* <SideBar /> */}
    
      <Wrapper>
        <HeroComponent>
        <img src={Hero} alt='Snapshot of a yellow bus' />
        </HeroComponent>

        <Div>
          <Buttons />
          <Status />
          <Card>
            <h3>Fare</h3>
            <FaAngleRight />
          </Card>
          <Explore />
          <Maps />
        </Div>
  
      </Wrapper>
    </>
  )
}

export default Home