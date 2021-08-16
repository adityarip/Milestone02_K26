import React from 'react'
import HeaderCat from '../../components/CategoryComponents/HeaderCat'
import BottomFooter from '../../components/LandingComponents/BottomFooter'
import RekomCat from '../../components/CategoryComponents/RekomCat'
import Navbar from '../../NavBar/NavBar'

const Category = () => {
    return (
        <div>
            <Navbar/>
            <HeaderCat/>
            <RekomCat/>
            <BottomFooter/>
        </div>
    )
}

export default Category
