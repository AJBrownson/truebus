import React from 'react'
import Home from "../Pages/Home/Home";
import Account from '../Pages/Account/Account'
import { Routes, Route } from 'react-router-dom'


const Routing = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path='/account' element ={ <Account /> } />
        </Routes>
    </>
  )
}

export default Routing