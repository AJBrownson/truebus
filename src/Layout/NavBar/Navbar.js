import React from 'react'
import { 
        Wrapper, Nav, NavLogo, Menu, NavMenu, NavItem, NavLinks, Button } from './Navbar.styles'
import Logo from '../../Assets/Logo.png'

const Navbar = () => {
  return (
    <>
        <Wrapper>
            <Nav>
                <NavLogo to ='/' >
                    <img src={Logo} alt='TrueBus Company Logo' />
                    TrueBus
                </NavLogo>

                <Menu>
                    <NavMenu>
                        <NavItem>
                            <NavLinks>Maps</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>Fares</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>Account/Wallet</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks>Settings</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks></NavLinks>
                        </NavItem>
                        <Button>Login/Register</Button>
                    </NavMenu>
                    
                </Menu>
            </Nav>
        </Wrapper>
    </>
  )
}

export default Navbar