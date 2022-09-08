import React from 'react'
import { FaBus, FaCircle } from 'react-icons/fa'
import  { H4, P } from './Status.styles.js'

const Status = () => {
  return (
    <>
        <H4>Service status <FaBus /> <FaBus color='blue'/> </H4>
        <P><FaCircle color='grey'/> Extra Service</P>
        <P><FaCircle color='red'/> Delay</P>
        <P><FaCircle color='green'/> Planned - Suspended</P>
        <P><FaCircle color='yellow'/> Planned - Reschedule</P>
        <P>view all status</P>
    </>
  )
}

export default Status;