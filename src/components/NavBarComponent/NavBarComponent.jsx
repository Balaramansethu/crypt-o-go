import React from "react"
import { FaCoins } from "react-icons/fa"
import "../NavBarComponent/NavBarComponent.css"

const NavBarComponent = () => {
    return (
        <div className="navbar">
            <FaCoins className="icon" />
            <h1>
                {" "}
                Crypt<span className="purple">-o-go</span>
            </h1>
        </div>
    )
}

export default NavBarComponent
