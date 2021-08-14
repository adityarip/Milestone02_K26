import React from 'react'
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
    )
}

export default Landing
