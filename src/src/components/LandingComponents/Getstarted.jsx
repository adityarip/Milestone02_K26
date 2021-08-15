import React from 'react'
import getStartedImg from '../../shared/getstarted.png'

const Getstarted = () => {
    return (
        <div class="getStarted">
            <h4>Sudah siap?</h4>
            <img draggable="false" ondragstart="return false;" src={getStartedImg} alt="Get Started" id="getStartedImg"></img>
        </div>
    )
}

export default Getstarted