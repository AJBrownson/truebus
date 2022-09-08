import React, { useState } from 'react'
import { Wrapper, Nav, NavLogo, Span1, Span2 } from './Nav.styles'
import { FaBars, FaSearch } from 'react-icons/fa'
import Logo from '../../Assets/Logo.png'


const Navbar = () => {
    const [click, setClick] = useState(false)
    const openSideBar = () => setClick(!click)
    
  return (
    <>
        <Wrapper>
            <Nav>

                <Span1 onClick={openSideBar} >
                    <FaBars color='white' size='1.5em' />
                </Span1>

                <NavLogo>
                    <img src={Logo} alt='TrueBus Company Logo' />
                </NavLogo>

                <Span2>
                <FaSearch color='white' size='1.5em' />
                </Span2>

            </Nav>
        </Wrapper>
    </>
  )
}

export default Navbar