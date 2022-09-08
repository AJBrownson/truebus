import React, { useState } from 'react'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import { ActionButtons, Button, Dropdown, } from './Button.styles'

const Buttons = () => {
    const [isActive, setIsActive] = useState(false)
    const toggleIsActive = () => setIsActive (!isActive)
    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = () => setIsOpen (!isOpen)

  return (
    <>
    <ActionButtons>
            <Button>Plan a Trip</Button>
            <Button down onClick={() => {toggleIsActive(); toggleIsOpen(); } }>Recent Trip {isOpen ? <FaCaretUp /> : <FaCaretDown /> } </Button>
            {isActive &&(
              <Dropdown>
                <h6>You haven't saved any trip yet</h6>
                <p>Plan a trip and save it for quick access in the future</p>
                <button>Plan a Trip</button>
              </Dropdown>
            )}
        </ActionButtons>
    </>
  )
}

export default Buttons

