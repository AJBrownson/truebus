import React from 'react'
import Snapshot from '../../Assets/Images/Avatar.JPG'
import { Image } from './Avatar.styles'

const Avatar = () => {
  return (
    <>
    <Image>
        <img src={Snapshot} alt='' />
    </Image>
    </>
  )
}

export default Avatar