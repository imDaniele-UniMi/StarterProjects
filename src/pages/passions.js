import React, {useState} from 'react'
import NavbarPassion from '../components/Navbar/navbarpassion'
import Passions from '../components/Passions'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from '../components/Passions/Data'
import Footer from '../components/Footer'

const PassionPage = () => {
  return (
    <div>
        <NavbarPassion />
        <Passions {...homeObjOne}/>
        <Passions {...homeObjTwo}/>
        <Passions {...homeObjThree}/>
        <Passions {...homeObjFour}/>
        <Footer />
    </div>
  )
}

export default PassionPage