import React, { useState } from 'react'
import { 
        Wrapper, Nav, NavLogo, HamburgerIcon, Menu, NavMenu, NavItem, NavLinks, Button } from './Navbar.styles'
import Logo from '../../Assets/Logo.png'
import { FaTimes, FaBars } from 'react-icons/fa';



const Navbar = () => {
    const [click, setClick] = useState(false)
    const closeMobileMenu = () => setClick(false);
    const handleClick = () => setClick(!click);

  return (
    <>
        <Wrapper>
            <Nav>

                <NavLogo to ='/' onClick={closeMobileMenu}>
                    <img src={Logo} alt='TrueBus Company Logo' />
                    TrueBus
                </NavLogo>
                
                <HamburgerIcon onClick = {handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </HamburgerIcon>

                {/* <Menu> */}
                    <NavMenu onClick='handleClick' click={click}>
                        <NavItem>
                            <NavLinks>Plan a Trip</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>Maps</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>Service Status</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>Fares</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>Account / Wallet</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>Settings</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks></NavLinks>
                        </NavItem>
                        <Button>Login/Register</Button>
                    </NavMenu>
                    
                {/* </Menu> */}
            </Nav>
        </Wrapper>
    </>
  )
}

export default Navbar