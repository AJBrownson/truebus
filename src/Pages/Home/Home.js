import React from 'react'
import Hero from '../../Assets/Images/hero-image.png'
import { HeroComponent, Wrapper, CTA, Action, ActionDropDown } from './Home.styles'



const Home = () => {
  return (
    <>
        <Wrapper>
            <HeroComponent>
              <div>
                <img src={Hero} alt='Hero' />
              </div>
            </HeroComponent>
            <CTA>
                <Action primary><span>Plan a Trip</span></Action>
                <Action><span>Check Trip</span></Action>
                <ActionDropDown>
                  <h6>You haven't saved any trip yet</h6>
                  <p>Plan a trip and save it for quick access in the future</p>
                  <button>Plan a Trip</button>
                </ActionDropDown>
              </CTA>
        </Wrapper>
    </>
  )
}

export default Home