import React from 'react'
<<<<<<< HEAD
import Navbar from '../../NavBar/NavBar'
const Landing = () => {
    return (
        <Navbar></Navbar>
=======
import Weeklycard from '../../components/LandingComponents/Weeklycard'
import Getstarted from '../../components/LandingComponents/Getstarted'
import UMKM from '../../components/LandingComponents/UMKM'
import BottomFooter from '../../components/LandingComponents/BottomFooter'
const Landing = () => {
    return (
        <div>
            <Weeklycard />
            <UMKM />
            <Getstarted />
            <BottomFooter />
        </div>
>>>>>>> development
    )
}

export default Landing
