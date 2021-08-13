import React from 'react'
import './NavBar.css'
const Navbar = () => {
    return (
        <div className="border-2 border-black border-dashed bg-blue-500">
            <ul>
                <li><a href="\">Home</a></li>
                <li><a href="\">About</a></li>
                <li><a href="\">Login</a></li>
            </ul>
        </div>
    )
}

export default Navbar