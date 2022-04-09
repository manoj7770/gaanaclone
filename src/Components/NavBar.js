import React from "react";
import '../App.css'
import Gaanalogo from "../Components/Gaanalogo.jpg";
const NavBar = () => {
    return (
        <>
            <div id="navbar">
                <div class="threeDot">
                    <div class="Dot"></div>
                    <div class="Dot"></div>
                    <div class="Dot"></div>
                </div>

                <div>
                    <img className="logo" src={Gaanalogo} alt="no image" />
                </div>

                <input className="input" />
                <div className="Premium">
                <div className="PremiumBtn One">Go Add Free</div>

                <div className="PremiumBtn Two">Get Ganna Plus</div>
                </div>
                <div id="moon"></div>

                <div className="login">
                    Login in/Sign up
                </div>
            </div>
        </>
    )
}

export default NavBar;