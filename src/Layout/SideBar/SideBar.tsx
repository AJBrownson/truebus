import React, { useState } from 'react'
import { Wrapper, Nav, List, ListItem, Menu, Button } from './SideBar.styles'
import { Span1 } from '../NavBar/Nav.styles'
import { FaTimes } from 'react-icons/fa'



const SideBar = () => {
  const [ click, setClick ] = useState(false)
  const closeSideBar = () => setClick(!click)

  return (
    <>
        <Wrapper>
            <Nav>
                <Span1 onClick={closeSideBar}>
                    <FaTimes color='white' size='1.5em' />
                </Span1>
            </Nav>

            <Menu>

            <List>
            <ListItem>Plan a Trip</ListItem>
            <ListItem>Maps</ListItem>
            <ListItem>Service Status</ListItem>
            <ListItem>Fares</ListItem>
            <ListItem>Account / Wallet</ListItem>
            <ListItem>Settings</ListItem>
            </List>

            <Button>Login / Register</Button>

            </Menu>
        </Wrapper>
    </>
  )
}

export default SideBar