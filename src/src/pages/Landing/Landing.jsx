import React from 'react'
import Navbar from '../../NavBar/NavBar'
import Carousel from '../../components/WeeklyComponents/Carousel'
import UMKM from '../../components/LandingComponents/UMKM'
import GetStarted from '../../components/LandingComponents/Getstarted'
import BottomFooter from '../../components/LandingComponents/BottomFooter'

const Landing = () => {
    return (
        <>
            <Navbar/>
            <Carousel/>
            <UMKM/>
            <GetStarted/>
            <BottomFooter/>
        </>
    )
}

export default Landing
